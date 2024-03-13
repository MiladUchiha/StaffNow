import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth/next"

import { redirect } from "next/navigation"
import NewProjectContainer from "@/components/Applications/Project/NewProject"
import prisma from "@/lib/prismadb"

const page = async () => {
  "use server"
  const session = await getServerSession(authOptions)
  if (!session) redirect("/login")
  const user = await prisma.bemannasKonto.findUnique({
    where: {
      email: session.user.email
    }
  })
  
  return <NewProjectContainer user={user} />
};

export default page;
