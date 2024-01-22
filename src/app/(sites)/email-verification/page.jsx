/**
 * v0 by Vercel.
 * @see https://v0.dev/t/XTRA4UKd02w
 */
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Component() {
  return (
    <main className="flex items-center justify-center h-screen bg-gray-100">
      <Card className="max-w-md w-full space-y-6 py-8 px-6 bg-white rounded-xl shadow-md">
        <CardHeader className="text-center">
          <h2 className="text-2xl font-bold">Email Verification</h2>
          <p className="text-gray-500">Please enter the verification code sent to your email</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="verification-code">Verification Code</Label>
            <Input id="verification-code" placeholder="Enter verification code" required />
          </div>
          <Button className="w-full" type="submit">
            Verify
          </Button>
        </CardContent>
        <div className="mt-4 text-center text-sm">
          Didn't receive the code?
          <Link className="underline ml-1" href="#">
            Resend Code
          </Link>
        </div>
      </Card>
    </main>
  )
}

