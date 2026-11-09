import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  MapPin,
} from "lucide-react"

import { ApproachSection } from "@/components/approach-section"
import { CountUpNumber } from "@/components/count-up-number"
import { CtaFooterSection } from "@/components/cta-footer-section"
import { FaqSection } from "@/components/faq-section"
import { HeroSection } from "@/components/hero-section"
import { IconBadge } from "@/components/icon-badge"
import { ReviewSection } from "@/components/review-section"
import { RevealGroup, RevealItem } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const projects = [
  {
    title: "Courtyard House",
    location: "Jakarta, Indonesia",
    category: "Residential",
    area: "420 SQM",
    price: "$340,000",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    description:
      "A private home organized around shade, cross-breeze, and a quiet garden core.",
  },
  {
    title: "Harbor Atelier",
    location: "Canggu, Indonesia",
    category: "Hospitality",
    area: "1,180 SQM",
    price: "$1,850,000",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
    description:
      "A small retreat with layered terraces, carved thresholds, and framed ocean light.",
  },
  {
    title: "Northline Office",
    location: "Singapore",
    category: "Workspace",
    area: "2,400 SQM",
    price: "$5,100,000",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
    description:
      "A civic workplace shaped for deep focus, open review, and long daily use.",
  },
]

const stats = [
  ["18", "Project completed"],
  ["42k", "SQM planned"],
  ["09", "Active cities"],
]

const impactStats = [
  ["7500+", "Homes delivered"],
  ["12+", "Years of expertise"],
  ["98%", "Client satisfaction"],
  ["250+", "Projects completed"],
]

export default function Page() {
  return (
    <main className="min-h-svh overflow-x-hidden bg-background text-foreground">
      <HeroSection projects={projects} stats={stats} />

      <section
        id="about"
        className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <RevealGroup className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <RevealItem>
              <IconBadge icon={Building2}>Who We Are</IconBadge>
            </RevealItem>
            <RevealItem>
              <h2 className="mt-8 text-3xl font-medium tracking-normal sm:text-4xl lg:text-5xl">
                <span className="text-muted-foreground/45">
                  We craft modern homes that blend
                </span>{" "}
                elegance, comfort, and functionality, creating refined spaces
                that inspire{" "}
                <span className="text-muted-foreground/45">
                  better living and deliver lasting value
                </span>{" "}
                every day.
              </h2>
            </RevealItem>
            <RevealGroup className="mt-10 grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
              {projects.map((project) => (
                <RevealItem key={project.title}>
                  <Card className="relative aspect-[16/9] bg-muted p-0">
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      sizes="(min-width: 640px) 14rem, 100vw"
                      className="object-cover"
                    />
                  </Card>
                </RevealItem>
              ))}
            </RevealGroup>
          </RevealGroup>

          <RevealGroup className="mx-auto mt-24 flex max-w-5xl flex-col items-center">
            <RevealItem>
              <IconBadge icon={BarChart3}>Our impact</IconBadge>
            </RevealItem>
            <RevealGroup className="mt-10 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {impactStats.map(([value, label]) => (
                <RevealItem key={label}>
                  <Card className="items-center justify-center bg-muted/40 py-10 text-center">
                    <CardContent className="px-6">
                      <CountUpNumber
                        value={value}
                        className="block font-mono text-5xl text-foreground sm:text-6xl"
                      />
                      <p className="mt-5 text-sm text-muted-foreground">
                        {label}
                      </p>
                    </CardContent>
                  </Card>
                </RevealItem>
              ))}
            </RevealGroup>
          </RevealGroup>
        </div>
      </section>

      <section id="work" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <RevealGroup className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <RevealItem className="max-w-2xl">
              <IconBadge icon={BriefcaseBusiness}>Selected Work</IconBadge>
              <h2 className="mt-4 text-3xl font-medium sm:text-4xl sm:text-balance">
                Portfolio layouts that let the projects hold the room.
              </h2>
            </RevealItem>
            <RevealItem>
              <Button asChild variant="outline">
                <Link href="#contact">
                  Book consultation
                  <ArrowUpRight data-icon="inline-end" className="size-4" />
                </Link>
              </Button>
            </RevealItem>
          </RevealGroup>

          <RevealGroup className="mt-10 grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <RevealItem key={project.title}>
                <Card className="relative aspect-[0.78] min-h-[28rem] p-0">
                  <Image
                    src={project.image}
                    alt={`${project.title} architecture project`}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover/card:scale-105"
                  />
                  <CardContent className="absolute inset-x-2 bottom-2 border border-border bg-card/85 p-0 pt-3 text-card-foreground backdrop-blur-md">
                    <CardHeader className="mb-3">
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <CardTitle className="text-2xl tracking-normal">
                            {project.title}
                          </CardTitle>
                          <CardDescription className="mt-3 flex items-center gap-2">
                            <span className="flex size-5 shrink-0 items-center justify-center bg-primary text-primary-foreground">
                              <MapPin className="size-3" aria-hidden="true" />
                            </span>
                            <span>{project.location}</span>
                          </CardDescription>
                        </div>
                        <Button
                          type="button"
                          variant="secondary"
                          size="icon-lg"
                          aria-label={`Open ${project.title}`}
                          className="shrink-0"
                        >
                          <ArrowRight className="size-5" aria-hidden="true" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardFooter className="justify-between gap-4">
                      <div className="font-mono text-3xl text-foreground">
                        {project.price}
                      </div>
                    </CardFooter>
                  </CardContent>
                </Card>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <ApproachSection />

      <FaqSection />

      <ReviewSection />

      <CtaFooterSection />
    </main>
  )
}
