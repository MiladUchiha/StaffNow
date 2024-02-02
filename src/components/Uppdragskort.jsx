import React from 'react'
import { Checkbox } from "../components/ui/checkbox"
import { Label } from "../components/ui/label"
import { CardTitle, CardHeader, CardContent, CardFooter, Card, CardDescription } from "../components/ui/card"
import { Button } from "../components/ui/button"
const Uppdragskort = ({jobCategory, jobTitle, address, startDate, endDate, timmar, antalPersonal, description}) => {
  return (
    <Card className="w-full">
          <CardHeader>
            <CardTitle>{jobCategory}</CardTitle>
            <CardDescription>Information om uppdreget</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 ">
              <li>
                <strong>Job Title:</strong>
                {jobTitle}
              </li>
              <li>
                <strong>Address:</strong>
                {address}
              </li>
              <li>
                <strong>Start Date:</strong>
                {startDate}
              </li>
              <li>
                <strong>End Date:</strong>
                {endDate}
              </li>
              <li>
                <strong>Timmar:</strong>
                {timmar}
              </li>
              <li>
                <strong>Antal Personal:</strong>
                {antalPersonal}
              </li>
              <li>
                <strong>Description:</strong>
                {description}
              </li>
            </ul>
            <div className="flex items-center space-x-2 mt-4">
              <Checkbox id="mission1" />
              <Label htmlFor="mission1">Mission Completed</Label>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Edit</Button>
            <Button variant="destructive">Delete</Button>
          </CardFooter>
        </Card>
        
  )
}

export default Uppdragskort