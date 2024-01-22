import prisma from '@/lib/prismadb'

import { NextResponse } from 'next/server'

export async function POST(request){
    const body = await request.json()
    const {  jobTitle, jobCategory, description, address, antalPersonal, timmar, startDate, endDate, userId } = body
    const mission = await prisma.mission.create({
        data: {
            jobTitle: jobTitle,
            description: description,
            address: address,
            jobCategory: jobCategory,
            antalPersonal: antalPersonal,
            timmar: timmar,

            startDate: startDate,
            endDate: endDate,
            bemannasKonto: {
                connect: {
                    id: userId
                }
            }
        }
    })
    prisma.$disconnect();
    return NextResponse.json(mission, {status: 201})
}


