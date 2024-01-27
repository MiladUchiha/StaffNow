import BemannasForm from "@/components/BemannasForm";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";


export default async function CompanyRegister() {
  const session = await getCurrentUser();
  if (session) redirect("/dashboard");

  return <BemannasForm/>;
}
