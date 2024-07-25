import LandingPageMenu from "@/components/landing/landingpage-menu"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "User Stories",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <LandingPageMenu />
      <div className="border-t">
        <div className="bg-background">
            <div className="col-span-4 md:col-span-7 lg:col-span-9 xl:col-span-10 lg:border-l">
              <div className="h-full px-4 py-6 lg:px-8">
                <main className="relative w-full min-h-screen">{children}</main>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
