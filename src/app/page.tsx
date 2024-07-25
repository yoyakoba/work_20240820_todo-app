import LandingPageMenu from "@/components/landing/landingpage-menu"
import { Canvas } from "@/components/landing/canvas"
import { Separator } from "@/components/ui/separator"
import { Github } from "lucide-react"
import Link from "next/link"
import { Button } from "@nextui-org/react"
import Particles from "@/components/landing/particle"

export default async function Home() {
  return (
    <>
      <div className="relative z-[2]">
        <LandingPageMenu />
        <section
          id="hero"
          className="container mx-auto mt-20 mb-8 flex flex-col justify-center items-center sm:my-24 md:my-32 lg:my-28"
        >
          <Particles
            className="absolute inset-0 -z-10 animate-fade-in"
            quantity={500}
          />
          <h1
            className="w-3/4
           font-bold min-[270px]:text-[2.2rem] min-[370px]:text-[2.4rem] min-[420px]:text-[2.7rem] xs:text-[2.7rem] mb-4 bg-clip-text text-center  text-transparent bg-gradient-to-r from-primary via-foreground-500 to-primary md:text-5xl xl:text-8xl"
          >
            Welcome to QA Hackathon
          </h1>

          <div className="w-full md:w-1/2 flex flex-col mt-10 justify-center items-center">
            <p className="font-medium text-primary md:text-background text-sm text-center mb-2 md:mt-0 md:text-md xl:text-lg xl:text-white xl:mt-20 2xl:mt-0 2xl:text-background">
              &quot;Empowering Innovation Through Quality Assurance: Integrating Automation and Manual Testing to Unveil the Future, One Test at a Time!&quot;
            </p>
            <Link href="/todo">
              <Button color="primary" className="md:w-60 xl:mt-2">
                Get start now
              </Button>
            </Link>
          </div>
        </section>
      </div>
      <Canvas className="absolute z-[1]" />
    </>
  )
}
