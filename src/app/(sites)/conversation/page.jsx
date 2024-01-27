/**
 * v0 by Vercel.
 * @see https://v0.dev/t/zgNnJgWVMlC
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div key="1" className="grid grid-cols-1 lg:grid-cols-4 gap-4 h-screen mr-8">
      <div className="border-r overflow-y-auto">
        <div className="p-4">
          <h2 className="text-xl font-bold">Chats</h2>
        </div>
        <nav className="divide-y">
          <div className="flex items-center gap-4 p-4">
            <Avatar>
              <AvatarImage alt="@johndoe" src="/placeholder-avatar.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium line-clamp-1">John Doe</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">Hey, how's it going?</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4">
            <Avatar>
              <AvatarImage alt="@janedoe" src="/placeholder-avatar.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium line-clamp-1">Jane Doe</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">Let's catch up soon!</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4">
            <Avatar>
              <AvatarImage alt="@alexsmith" src="/placeholder-avatar.jpg" />
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium line-clamp-1">Alex Smith</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">Sent a photo</p>
            </div>
          </div>
        </nav>
      </div>
      <div className="col-span-3 flex flex-col">
        <div className="border-b p-4">
          <h2 className="text-xl font-bold">John Doe</h2>
        </div>
        <div className="mt-6 space-y-4">
          <div className="flex items-end space-x-2">
            <Avatar>
              <AvatarImage alt="@johndoe" src="/placeholder-avatar.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="rounded-lg bg-gray-200 dark:bg-gray-800 p-3">
                <p className="text-sm">Hi, let's have a meeting tomorrow...</p>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">10:15 AM</p>
            </div>
          </div>
          <div className="flex items-end space-x-2 ml-auto">
            <div className="flex-1 min-w-0">
              <div className="rounded-lg bg-blue-500 text-white p-3">
                <p className="text-sm">Sure, what time works for you?</p>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-right">10:16 AM</p>
            </div>
            <Avatar>
              <AvatarImage alt="@me" src="/placeholder-avatar.jpg" />
              <AvatarFallback>ME</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="border-t p-4 fixed bottom-0 w-3/4 bg-white dark:bg-gray-950">
          <div className="flex items-center gap-4">
            <Input className="flex-1" placeholder="Type a message" />
            <Button>Send</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

