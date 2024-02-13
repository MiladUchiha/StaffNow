import prisma from '../../../../lib/prismadb'
import { NextResponse } from 'next/server'

export async function POST(request){
    const body = await request.json()
    const {id} = body
    const mission = await prisma.mission.delete({
        where: {
            id: id
        }
    })
    prisma.$disconnect();
    return NextResponse.json(mission, {status: 201})
}