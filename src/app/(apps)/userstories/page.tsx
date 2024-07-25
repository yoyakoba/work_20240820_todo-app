import { Metadata } from "next"
import { Suspense } from "react"
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react"
import UserStoriesTable from "@/components/dashboard/user-stories"

export const metadata: Metadata = {
  title: "User Stories",
}

export default function Page() {
  return (
    <Suspense>
      <UserStoriesTable />
    </Suspense>
  )
}
