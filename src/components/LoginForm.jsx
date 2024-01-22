"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function LoginForm() {
    const [data, setData] = useState({
        email: '',
        password: '',
    });
    const router = useRouter()

 

  const handleSubmit = async (e) => {
    e.preventDefault()
    signIn('credentials',
     {...data, redirect: false
    })
    .then((callback) => {
        if (callback?.error) {
            toast.error(callback.error)
        }

        if(callback?.ok && !callback?.error) {
            toast.success('Logged in successfully!')
            router.push('/dashboard')
            router.refresh('dashboard', )
        }
    } )
  };

  return (
    <div className="flex justify-center  items-center min-h-screen bg-gray-100">
      
    <Card className=" max-w-xl sm:w-1/3 mx-auto  px-2 ">
     
    <CardHeader>
      <CardTitle className="text-2xl text-center">Login</CardTitle>
      <CardDescription className="text-center">Please enter your details below to log in.</CardDescription>
    </CardHeader>
    <form action="" onSubmit={handleSubmit}>
    <CardContent className="space-y-4">
      <div className="space-y-2">
        <Label className="block text-sm font-medium text-gray-700" htmlFor="email">
          Email
        </Label>
        <Input
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          id="email"
          placeholder="john@example.com"
          required
          type="email"
        />
      </div>
      <div className="space-y-2">
        <Label className="block text-sm font-medium text-gray-700" htmlFor="password">
          Password
        </Label>
        <Input
        value={data.password}
        onChange={(e) => setData({ ...data, password: e.target.value })}
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          id="password"
          required
          type="password"
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            id="remember_me"
            name="remember_me"
            type="checkbox"
          />
          <Label className="ml-2 block text-sm text-gray-900" htmlFor="remember_me">
            Remember me
          </Label>
        </div>
        <div className="text-sm">
          <Link className="font-medium text-indigo-600 hover:text-indigo-500" href="#">
            Forgot your password?
          </Link>
        </div>
      </div>
    </CardContent>
    <CardFooter className="flex items-center justify-center pt-5">
      
      <Button
        className="w-full items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
        type="submit"
      >
        Submit
      </Button>
      
    </CardFooter>
    </form>
  </Card>
 
  </div>
  );
}


