import { authOptions } from "../../../app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth/next"
import RegisterSimpleContainer from "../../../components/Other/Authentication/RegisterSimple";


import { redirect } from "next/navigation";
const RegisterSimple = async () => {
  const session = await getServerSession(authOptions)
  if (session) {
    redirect("/dashboard");
  }
  

  return <RegisterSimpleContainer />;
};

export default RegisterSimple;
