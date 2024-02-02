import bcrypt from 'bcryptjs'
import prisma from '../../../lib/prismadb'
import { NextResponse } from 'next/server'
import { sendEmail } from '../../../lib/sendEmail';
import { VerifyEmailTemplate } from '../../../components/mail/verify-email';
import crypto from 'crypto';

export async function POST(request) {
  const body = await request.json();
  const { name, companyName, organizationNumber, address, branches, email, password, description} = body;


  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user and account
  const user = await prisma.user.create({
    data: {
      email,
      hashedPassword // hash password
    }
  })

  // Create new account related to user
  const bemannasKonto = await prisma.bemannasKonto.create({
    data: {
      name,
      companyName,
      organizationNumber,
      address,
      branches,
      description,
      email,
      user: {
        connect: { id: user.id }
      }
    }
  })
  const emailVerificationToken = crypto.randomBytes(32).toString("base64url");
  await prisma.user.update({
    where: {
        id: user.id
    },
    data: {
        emailVerificationToken: emailVerificationToken,
    }
})
await sendEmail({
  from: 'Admin <admin@staffnow.se>',
  to: [email],
  subject: 'Verifera din email',
  react: VerifyEmailTemplate({email, emailVerificationToken})
});

  return NextResponse.json(user, bemannasKonto)
}