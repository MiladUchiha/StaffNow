import { authOptions } from "../../../app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation";
import prisma from "@/lib/prismadb";
import LoginSimpleContainer from "../../../components/Other/Authentication/LoginSimple";
const page = async () => {
  "use server"
  const session = await getServerSession(authOptions)
  if (session) {
    const theUser = await prisma.user.findUnique({
      where: {
        email: session?.user.email
      }
    });
    if (theUser.role === "Uppdragsgivare") {
      redirect("/uppdrag-givare/profil");
    }
    if (theUser.role === "Bemanningsföretag") {
      redirect("/bemanning-foretag/profil");
    }
  }
  
  
  return <LoginSimpleContainer />;
};

export default page;
