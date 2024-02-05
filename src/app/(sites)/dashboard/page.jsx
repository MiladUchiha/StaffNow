import { getCurrentUser } from "../../../lib/session"
import getbemannaByEmail from "../../../lib/getbemannaByEmail"
import getbemanningsByEmail from "../../../lib/getbemanningsByEmail"
import { redirect } from "next/navigation"
import ClientDash from '../../../components/ClientDash'
import BemanningDash2 from '../../../components/BemanningDash2'
import prisma from '../../../lib/prismadb'

const page = async () => {
  
    const session = await getCurrentUser()
    if (!session) redirect('/login')
    const user = await getbemannaByEmail(session?.email)
    const bemannings = await getbemanningsByEmail(session?.email)
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