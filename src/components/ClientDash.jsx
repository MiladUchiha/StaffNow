/**
 * v0 by Vercel.
 * @see https://v0.dev/t/NOLWzBrZHrS
 */
import { CardTitle, CardHeader, CardContent, CardFooter, Card, CardDescription } from "../components/ui/card"
import { Button } from "../components/ui/button"
import  Link  from "next/link"

import Uppdragskort from "./Uppdragskort"

export default function Component({user, mission}) {
  return (
    <div key="1" className="p-4 space-y-6">
      <h1 className="text-2xl font-semibold">Welcome {user.name}</h1>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>User Details</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5">
            <li>
              <strong>Företags namn:</strong>
              {user.companyName}
            </li>

            <li>
              <strong>Email:</strong>
              {user.email}
            </li>
            <li>
              <strong>Address:</strong>
              {user.address}
            </li>
            <li>
              <strong>Branches:</strong>
              {user.branches}
            </li>
          
          </ul>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button variant="outline">Edit</Button>
        </CardFooter>
      </Card>
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Your Missions</h2>
          
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {mission.map((mission) => (
        <Uppdragskort
        key={'Kort'}
        jobCategory={mission.jobCategory}
        jobTitle={mission.jobTitle}
        address={mission.address}
        startDate={mission.startDate}
        endDate={mission.endDate}
        timmar={mission.timmar}
        antalPersonal={mission.antalPersonal}
        description={mission.description}
        />
      ))}
      
        <div className="flex items-center justify-center w-full h-[450px] bg-gray-200 rounded-lg">
        <Link href="/add-mission">
          <Button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
            
            <PlusIcon className="h-6 w-6" />
          </Button>
            </Link>
        </div>
      </div>
    </div>
  )
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}
