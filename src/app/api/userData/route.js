import prisma from '@/lib/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request){
    const body = await request.json();
    const {userMail} = body;
    const user = await prisma.account.findUnique({
        where: {
            email: userMail,
        }
    });
    prisma.$disconnect();
    if(user){
        return NextResponse.json(user);
    }
    else {
        return NextResponse.json({error: 'User not found'});
    }
}