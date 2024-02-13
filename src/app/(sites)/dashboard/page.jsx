import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth/next"
import getbemannaByEmail from "../../../lib/getbemannaByEmail"
import getbemanningsByEmail from "../../../lib/getbemanningsByEmail"
import { redirect } from "next/navigation"
import ClientDash from '../../../components/ClientDash'
import BemanningDash2 from '../../../components/BemanningDash2'
import prisma from '../../../lib/prismadb'

const page = async () => {
  
    const session = await getServerSession(authOptions)
    const mainUser = session?.user
    if (!session) redirect('/login')
    const user = await getbemannaByEmail(mainUser?.email)
    const bemannings = await getbemanningsByEmail(mainUser?.email)
    if (!user && !bemannings) redirect('/login')
    
     const mission = await prisma.mission.findMany({
        where: {
          bemannasKontoId: user.id
        }
    })
  
   
    prisma.$disconnect();

  return (
    <>
    {user ?
    
    <ClientDash user={user}  mission={mission} />  :
    null

    }
    {bemannings ?
    <BemanningDash2 user={bemannings} />  :
    null

    }
    
    </>
  )
}

export default page