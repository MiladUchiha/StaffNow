import LoginForm from "@/components/LoginForm";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";



export default async function Home() {
  const session = await getCurrentUser();
  if (session) redirect("/dashboard");
  return (
    <main>
      <LoginForm />
    </main>
  );
}

