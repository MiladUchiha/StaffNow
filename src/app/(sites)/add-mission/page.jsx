import { getCurrentUser } from "@/lib/session"
import  getbemannaByEmail  from "@/lib/getbemannaByEmail"
import { redirect } from "next/navigation"
import AddMissionForm from "@/components/AddMissionForm"


const page = async () => {
  const session = await getCurrentUser()
  const user = await getbemannaByEmail(session?.email)
  if (!session) redirect("/login")
  
  

  return (
    <>
      <AddMissionForm 
        user={user}
      />
    
    </>
  )
}

export default page