import React from 'react'
import PrivateChatContainer from '@/components/Applications/Chat/PrivateChat'
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation";
import prisma from "@/lib/prismadb";
const page = async () => {
  "use server"
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect("/login");
  }
  const user = await prisma.bemanningsKonto.findUnique({
    where: {
      email: session.user.email
    }
  })
  const user2 = await prisma.bemannasKonto.findUnique({
    where: {
      email: session.user.email
    }
  })
  
  return (
    <>
    {user ? (
      
      <PrivateChatContainer currentUser={user} pusherKey={process.env.PUSHER_APP_KEY} pusherCluster={process.env.PUSHER_APP_CLUSTER} />) : 
      (<PrivateChatContainer currentUser={user2} type="uppdragGivare"  pusherKey={process.env.PUSHER_APP_KEY} pusherCluster={process.env.PUSHER_APP_CLUSTER} />)
    }
    </>
  )
}

export default page