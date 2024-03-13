import prisma from '@/lib/prismadb'
import { NextResponse } from 'next/server'


export async function POST(request){
    const body = await request.json()
    const {id} = body
    const updatedMission = await prisma.mission.update({
        where: {
            id: id
        },
        data: {
            done: true
        }
    })
    prisma.$disconnect();
    return NextResponse.json(updatedMission, {status: 201})

    
}