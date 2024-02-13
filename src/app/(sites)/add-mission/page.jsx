import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth/next"
import  getbemannaByEmail  from "../../../lib/getbemannaByEmail"
import { redirect } from "next/navigation"
import NewProjectContainer from "../../../components/Applications/Project/NewProject"

const page = async () => {
  const session = await getServerSession(authOptions)
  if (!session) redirect("/login")
  const user = await getbemannaByEmail(session.email)
  
  return <NewProjectContainer user={user} />
};

export default page;
