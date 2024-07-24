import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  BarChartBig,
  Blocks,
  ChevronsLeft,
  ChevronsRight,
  ClipboardList,
  LayoutGrid,
  PieChart,
  Receipt,
  Users2,
} from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import UserAvatar from "@/components/global/user-avatar"
import { getCurrentUser } from "@/lib/session"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export async function AppSideBar({ className }: SidebarProps) {
  const user = await getCurrentUser()
  return (
    <Collapsible
      className={cn(
        {
          "pb-12 hidden sm:block": true,
          "sm:col-span-2 md:col-span-3 lg:col-span-3 xl:col-span-2": true,
          "sm:col-span-1": !true,
        },
        className
      )}
      open={true}
    >
        <div className="px-3 py-2">
          <div className="mb-4 flex justify-between items-center">
            <h2 className="px-4 text-lg font-semibold tracking-tight">
              Hi, {user?.name}
            </h2>
            <CollapsibleTrigger>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <ChevronsLeft className="mr-2 h-4 w-4 cursor-pointer rounded-sm hover:bg-secondary/80" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Collapse</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </CollapsibleTrigger>
          </div>
          <div className="space-y-1">
            <Button variant="secondary" className="w-full justify-start">
              <LayoutGrid className="mr-2 h-4 w-4" />
              Todo
            </Button>
          </div>
        </div>
    </Collapsible>
  )
}
