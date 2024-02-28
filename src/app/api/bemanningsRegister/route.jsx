import bcrypt from 'bcryptjs'
import prisma from '../../../lib/prismadb'
import { NextResponse } from 'next/server'
import { sendEmail } from '../../../lib/sendEmail';
import { VerifyEmailTemplate } from '../../../components/mail/verify-email';
import crypto from 'crypto';
import { NyRegistering } from '../../../components/mail/nyRegistering';

export async function POST(request) {
  const body = await request.json();
  const { name, companyName, organizationNumber, address, branches, crewNumber, areas, email, password, description} = body;


  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user and account
  const user = await prisma.user.create({
    data: {
      email,
      hashedPassword // hash password
    }
  })

  // Create new account related to user
  const bemanningsKonto = await prisma.bemanningsKonto.create({
    data: {
      name,
      companyName,
      organizationNumber,
      address,
      branches,
      crewNumber,
      areas,
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
await sendEmail({
  from: 'Admin <admin@staffnow.se>',
  to: ['ahmadpourmilad8@gmail.com', "maftuna.tur@gmail.com"],
  subject: 'Ny registrering',
  react: NyRegistering({name, email, organizationNumber, branches, description, companyName, address, type: "Bemanningsföretag", crewNumber, areas})
});

  return NextResponse.json(user, bemanningsKonto)
}