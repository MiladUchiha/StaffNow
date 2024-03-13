import prisma from '@/lib/prismadb'
import { NextResponse } from 'next/server'

export async function POST(request){
    const body = await request.json()
    const {missionId, user, bemannasKontoId} = body
    const exists = await prisma.missionChat.findFirst({
        where: {
            missionId: missionId,
            bemanningsKontoId: user.id,
            bemannasKontoId: bemannasKontoId
        }
    })
    if (exists) {
        return new Response(JSON.stringify({ message: "Chat already exists", chatExists: true }), {
            status: 201 // Note the status code change here
            
        });
    }
    const chat =  await prisma.missionChat.create({
        data: {
          mission: { connect: { id: missionId } },
          bemanningsKonto: { connect: { id: user.id } },
          bemannasKonto: { connect: { id: bemannasKontoId } },
        },
      });
    const updatedArray = [...user.acceptedMissionId, missionId];
    const addAccepted = await prisma.bemanningsKonto.update({
        where: {
            id: user.id
        },
        data: {
           acceptedMissionId: updatedArray
        }
    })

    return NextResponse.json({chat, addAccepted}, {status: 201})

}