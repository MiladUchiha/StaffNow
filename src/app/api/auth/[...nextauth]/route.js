import NextAuth from "next-auth/next";
import prisma from '../../../../lib/prismadb'
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs'

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
       
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" },

                
            },
            async authorize(credentials) {
              
                // check to see if email and password is there
                if(!credentials.email || !credentials.password) {
                    throw new Error('Var god fyll i alla fält')
                }

                // check to see if user exists
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                });
                
                // if no user was found 
                if (!user || !user?.hashedPassword) {
                    throw new Error('Ingen användare hittades med den emailen')
                }
                
                // check to see if password matches
                const passwordMatch = await bcrypt.compare(credentials.password, user.hashedPassword)

                // if password does not match
                if (!passwordMatch) {
                    throw new Error('Lösenordet matchar inte med emailen')
                }

                return user;
            },
        }),  
    ],
    secret: process.env.SECRET,
    
    session: {
        strategy: "jwt",
    },
    debug: process.env.NODE_ENV === "development",
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST}