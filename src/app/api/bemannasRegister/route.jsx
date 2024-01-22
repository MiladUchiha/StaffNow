import bcrypt from 'bcryptjs'
import prisma from '@/lib/prismadb'
import { NextResponse } from 'next/server'
import { randomUUID } from 'crypto';

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
 

  return NextResponse.json(user, bemannasKonto)
}