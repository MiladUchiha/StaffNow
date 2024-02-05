
import React from "react";
import { getCurrentUser } from "../../../lib/session"
import  getbemannaByEmail  from "../../../lib/getbemannaByEmail"
import { redirect } from "next/navigation"
import NewProjectContainer from "../../../components/Applications/Project/NewProject"

const page = async () => {
  const session = await getCurrentUser()
  if (!session) redirect("/login")
  const user = await getbemannaByEmail(session.email)
  
  return <NewProjectContainer user={user} />
};

export default page;
