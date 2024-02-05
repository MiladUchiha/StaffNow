import prisma from '../../../lib/prismadb'

import { NextResponse } from 'next/server'

export async function POST(request){
    const body = await request.json()
    const {title, payway,  jobTitle, priority, description, area, antalPersonal, startDate, endDate, userId } = body
    console.log(jobTitle)
    const mission = await prisma.mission.create({
        data: {
            title: title,
            payway: payway,
            priority: priority,
            jobTitle: jobTitle[0],
            description: description,
            area: area[0],
            antalPersonal: antalPersonal,
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


