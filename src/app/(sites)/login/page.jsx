import { getCurrentUser } from "../../../lib/session";
import { redirect } from "next/navigation";
import LoginSimpleContainer from "../../../components/Other/Authentication/LoginSimple";

const  page = async () => {
  const session = await getCurrentUser();
  if (session) redirect("/dashboard");
  
  return <LoginSimpleContainer />;
};

export default page;
