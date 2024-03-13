import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import prisma from "@/lib/prismadb"
import ClientDash from '@/components/ClientDash'
const page = async () => {
    const session = await getServerSession(authOptions)
    if (!session) redirect('/login')
    const user = await prisma.bemannasKonto.findUnique({
        where: {
            email: session?.user.email
        }
    })
    if (!user) redirect('/login')
    const mission = await prisma.mission.findMany({
        where: {
            bemannasKontoId: user.id
        }
    })

    return (
        
        <ClientDash user={user}  mission={mission} type="uppdraggivare" />
        
    )
}
export default page
