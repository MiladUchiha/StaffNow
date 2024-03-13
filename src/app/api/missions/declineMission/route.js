import prisma from '@/lib/prismadb'
import { NextResponse } from 'next/server'




export async function POST(request){
    const body = await request.json()
    const {id, user} = body
    const updatedArray = [...user.declinedMissionId, id];
    const updatedUser = await prisma.bemanningsKonto.update({
        where: {
            id: user.id
        },
        data: {
            declinedMissionId: updatedArray
        }
    })
    prisma.$disconnect();
    return NextResponse.json(updatedUser, {status: 201})

    
}