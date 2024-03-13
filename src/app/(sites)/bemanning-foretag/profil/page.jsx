import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import prisma from "@/lib/prismadb"
import ClientDash from '@/components/ClientDash'
const page = async () => {
    "use server"
    const session = await getServerSession(authOptions)
    if (!session) redirect('/login')
    const user = await prisma.bemanningsKonto.findUnique({
        where: {
            email: session?.user.email
        },
        
    })
    if (!user) redirect('/login')
    const matchedMissions = await prisma.mission.findMany({
        where: {
            area: {in: user.areas,}, 
            jobTitle: {in: user.branches,},
            done: false,
            id: {notIn: user.declinedMissionId.map(id => id)}    
        },
    });
    prisma.$disconnect()
    return (
        
        <ClientDash user={user}  mission={matchedMissions} />
        
    )
}
export default page
