import { authOptions } from "../../../api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth/next"
import RegisterSimpleContainer from "@/components/Other/Authentication/RegisterSimple";

const metadata = {
  title: "Register",
  description: "Registreringssida för uppdragsgivare",
};

import { redirect } from "next/navigation";
const RegisterSimple = async () => {
  const session = await getServerSession(authOptions)
  if (session) {
    redirect("/dashboard");
  }
  

  return <RegisterSimpleContainer />;
};

export default RegisterSimple;
