
import RegisterSimpleContainer from "../../../components/Other/Authentication/RegisterSimple";

import { getCurrentUser } from "../../../lib/session";
import { redirect } from "next/navigation";
const RegisterSimple = async () => {
  const session = await getCurrentUser();
  if (session) {
    redirect("/dashboard");
  }
  

  return <RegisterSimpleContainer />;
};

export default RegisterSimple;
