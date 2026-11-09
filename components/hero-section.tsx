"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { motion, type Variants } from "motion/react"

import { AnimatedWordmark } from "@/components/animated-wordmark"
import { SiteNavbar } from "@/components/site-navbar"
import { Button } from "@/components/ui/button"
import { siteNavItems } from "@/lib/site-navigation"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type HeroProject = {
  title: string
  location: string
  image: string
}

type HeroSectionProps = {
  projects: HeroProject[]
  stats: string[][]
}

const HERO_ROTATION_INTERVAL_MS = 5000

const heroEase = [0.22, 1, 0.36, 1] as const

const heroGroupVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
}

const heroItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.72,
      ease: heroEase,
    },
  },
}

function HeroSection({ projects, stats }: HeroSectionProps) {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const [activeSection, setActiveSection] = React.useState("home")
  const activeProject = projects[activeIndex]
  const nextIndex = (activeIndex + 1) % projects.length
  const secondaryProject = projects[nextIndex]

  React.useEffect(() => {
    if (projects.length <= 1) {
      return
    }

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % projects.length)
    }, HERO_ROTATION_INTERVAL_MS)

    return () => window.clearInterval(interval)
  }, [projects.length])

  React.useEffect(() => {
    const sections = siteNavItems
      .map((item) => document.getElementById(item.sectionId))
      .filter((section): section is HTMLElement => section !== null)

    function updateActiveSection(entries: IntersectionObserverEntry[]) {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

      if (window.scrollY < 120) {
        setActiveSection("home")
        return
      }

      if (visibleEntry?.target.id) {
        setActiveSection(visibleEntry.target.id)
      }
    }

    const observer = new IntersectionObserver(updateActiveSection, {
      rootMargin: "-35% 0px -45% 0px",
      threshold: [0.1, 0.25, 0.5],
    })

    sections.forEach((section) => observer.observe(section))

    function handleScroll() {
      if (window.scrollY < 120) {
        setActiveSection("home")
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  function selectProject(index: number) {
    setActiveIndex(index === activeIndex ? nextIndex : index)
  }

  return (
    <section
      id="home"
      className="relative isolate min-h-svh overflow-hidden bg-foreground text-white"
    >
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: heroEase }}
      >
        <Image
          key={activeProject.image}
          src={activeProject.image}
          alt={`${activeProject.title} hero image`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/5 to-black/75" />
      <SiteNavbar activeSection={activeSection} appearance="inverse" />

      <AnimatedWordmark
        ariaHidden
        delay={0.45}
        text="Structura"
        trigger="load"
        className="absolute top-24 left-4 z-10 justify-start text-8xl text-white/30 select-none sm:left-8 sm:text-[10rem] lg:top-24 lg:left-12 lg:text-[15rem] xl:text-[18rem]"
      />

      <div className="relative z-10 mx-auto flex min-h-svh w-full max-w-7xl flex-col justify-end px-4 pt-32 pb-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(18rem,0.45fr)] lg:items-end">
          <motion.div
            variants={heroGroupVariants}
            initial="hidden"
            animate="visible"
            className="max-w-88 min-w-0 sm:max-w-xl"
          >
            <h1 className="sr-only">
              Structura architecture website template
            </h1>
            <motion.p
              variants={heroItemVariants}
              className="sm:text-md mt-5 max-w-88 text-base leading-7 wrap-break-word text-white/85 sm:max-w-xl"
            >
              Discover considered homes designed with elegance and comfort.
              Structura connects clients with spaces that elevate everyday
              living beautifully.
            </motion.p>
            <motion.div
              variants={heroItemVariants}
              className="mt-6 grid max-w-88 gap-4 sm:flex sm:max-w-none sm:flex-wrap sm:items-end sm:gap-4"
            >
              <div className="grid grid-cols-3 gap-4 sm:gap-4">
                {stats.map(([value, label]) => (
                  <div key={label} className="min-w-0">
                    <div className="font-mono text-2xl text-white">{value}</div>
                    <div className="mt-1 text-xs leading-4 text-white/65">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                <Link href="#work">
                  View portfolio
                  <ArrowUpRight data-icon="inline-end" className="size-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: heroEase, delay: 0.55 }}
            className="hidden justify-self-end lg:block"
          >
            <div className="w-80 border border-white/30 bg-white/10 p-2 backdrop-blur-md xl:w-88">
              <button
                type="button"
                aria-label={`Show ${activeProject.title}`}
                aria-pressed={true}
                onClick={() => selectProject(activeIndex)}
                className="relative block aspect-[2.3/1] w-full overflow-hidden border border-white/35"
              >
                <Image
                  src={activeProject.image}
                  alt={`${activeProject.title} preview`}
                  fill
                  sizes="(min-width: 1280px) 22rem, 20rem"
                  className="object-cover"
                />
              </button>
              <button
                type="button"
                aria-label={`Show ${secondaryProject.title}`}
                aria-pressed={false}
                onClick={() => selectProject(nextIndex)}
                className="relative mt-2 block aspect-[2.3/1] w-full overflow-hidden border border-white/35"
              >
                <Image
                  src={secondaryProject.image}
                  alt={`${secondaryProject.title} preview`}
                  fill
                  sizes="(min-width: 1280px) 22rem, 20rem"
                  className="object-cover"
                />
              </button>
            </div>
            <Card className="mt-3 w-80 bg-background/95 text-foreground xl:w-88">
              <CardHeader>
                <CardTitle>{activeProject.title}</CardTitle>
                <CardDescription>{activeProject.location}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="#work">
                    Explore project
                    <ArrowUpRight data-icon="inline-end" className="size-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export { HeroSection }
