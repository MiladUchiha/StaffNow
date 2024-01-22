'use client'
import { useState } from "react"
import axios from "axios"
import { toast } from 'sonner'
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/bglRpKVVF76
 */
import { CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover"
import * as React from "react"
import { CommandInput, CommandEmpty, CommandItem, CommandGroup, Command } from "@/components/ui/command"
import { cn } from "@/lib/utils"
const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
]
const frameworks2 = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
]






function ChevronsUpDownIcon(props) {
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
      <path d="m7 15 5 5 5-5" />
      <path d="m7 9 5-5 5 5" />
    </svg>
  )
}

const addMissionForm = ({ user, className }) => {

  const [open, setOpen] = useState(false)
  const [openn, setOpenn] = useState(false)
  const [jobCategory, setJobCategoty] = useState("")
  const [jobTitle, setJobTitle] = useState("")
  const [antalPersonal, setAntalPersonal] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [timmar, setTimmar] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [userId, setUserId] = useState(user.id); // Assuming 'user' is defined in your component or coming from props/context


  const [isLoading, setIsLoading] = useState(false)
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    axios.post("/api/missions", { jobCategory, jobTitle, antalPersonal, startDate, endDate, timmar, address, description, userId}).then((res) => {
      console.log(res)
      toast.success("Uppdraget har lagts till!")

      setIsLoading(false)
    })
      .catch((err) => {
        console.log(err)
        setIsLoading(false)
      })

  }


  return (
    <div className={cn("flex justify-center  items-center min-h-screen bg-gray-100", className)}>
      <main key="1" className="space-y-8 max-w-xl sm:w-1/3">
        <Card>
          <form onSubmit={handleSubmit}>
          <CardHeader className="font-bold text-lg">Lägga till uppdrag</CardHeader>
          <CardContent className="grid gap-4">
            
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-full justify-between"
                >
                  {jobCategory
                    ? frameworks.find((framework) => framework.value === jobCategory)?.label
                    : "Select framework..."}
                  <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Search framework..." className="h-9" />
                  <CommandEmpty>No framework found.</CommandEmpty>
                  <CommandGroup>
                    {frameworks.map((framework) => (
                      <CommandItem
                        key={framework.value}
                        value={framework.value}
                        onSelect={(currentValue) => {
                          setJobCategoty(currentValue === jobCategory ? "" : currentValue)
                          setOpen(false)
                        }}
                      >
                        {framework.label}
                        <CheckIcon
                          className={cn(
                            "ml-auto h-4 w-4",
                            jobCategory === framework.value ? "opacity-100" : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
            <Popover open={openn} onOpenChange={setOpenn}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={openn}
                  className="w-full justify-between"
                >
                  {jobTitle
                    ? frameworks.find((framework) => framework.value === jobTitle)?.label
                    : "Select framework..."}
                  <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Search framework..." className="h-9" />
                  <CommandEmpty>No framework found.</CommandEmpty>
                  <CommandGroup>
                    {frameworks.map((framework) => (
                      <CommandItem
                        key={framework.value}
                        value={framework.value}
                        onSelect={(currentValue) => {
                          setJobTitle(currentValue === jobTitle ? "" : currentValue)
                          setOpenn(false)
                        }}
                      >
                        {framework.label}
                        <CheckIcon
                          className={cn(
                            "ml-auto h-4 w-4",
                            jobTitle === framework.value ? "opacity-100" : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>

            <div className="grid gap-1.5">
              <Label htmlFor="people-needed">Number of People Needed</Label>
              <Input 
              value={antalPersonal} onChange={(e) => setAntalPersonal(e.target.value)}
              id="people-needed" placeholder="Enter number of people needed" type="number" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="start-date">Start Date</Label>
                <Input
                value={startDate} onChange={(e) => setStartDate(e.target.value)}
                id="start-date" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="end-date">End Date</Label>
                <Input
                value={endDate} onChange={(e) => setEndDate(e.target.value)}
                id="end-date" type="date" />
              </div>
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="hours">Hours</Label>
              <Input
              value={timmar} onChange={(e) => setTimmar(e.target.value)}
              id="hours" placeholder="Enter hours required" type="number" />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="address">Address</Label>
              <Input
              value={address} onChange={(e) => setAddress(e.target.value)}
              id="address" placeholder="Enter mission location" type="text" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Beskrivning</Label>
              <Textarea
              value={description} onChange={(e) => setDescription(e.target.value)}
                id="description" placeholder="Ett kort beskrivning av ditt företag" required />
            </div>
            <Button className="w-full bg-blue-500 text-white" type="submit">
              Add Mission
            </Button>
          </CardContent>
          </form>
        </Card>
      </main>
    </div>
  )
}

export default addMissionForm