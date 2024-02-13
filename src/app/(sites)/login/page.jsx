import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation";
import LoginSimpleContainer from "../../../components/Other/Authentication/LoginSimple";


const page = async () => {
  const session = await getServerSession(authOptions)
  if (session) redirect("/dashboard");
  
  return <LoginSimpleContainer />;
};

export default page;
