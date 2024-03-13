import prisma from '../../../lib/prismadb'
import { NextResponse } from 'next/server';

export async function POST(request) {
    const body = await request.json();
    const { email } = body;
    const user = await prisma.user.findUnique({
        where: {
            email: email
        },
    });
    if (user) {
        return NextResponse.json({ exists: true });
    }else{
        return NextResponse.json({ exists: false });
    }

    
}
    