import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Compass,
  Handshake,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Telescope,
} from "lucide-react"

import { AnimatedImageCard } from "@/components/animated-image-card"
import { CountUpNumber } from "@/components/count-up-number"
import { CtaFooterSection } from "@/components/cta-footer-section"
import { IconBadge } from "@/components/icon-badge"
import { ReviewSection } from "@/components/review-section"
import {
  LoadRevealGroup,
  RevealGroup,
  RevealItem,
} from "@/components/scroll-reveal"
import { SiteNavbar } from "@/components/site-navbar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how Structura combines thoughtful design, market insight, and modern living principles to create refined spaces.",
}

const aboutStats = [
  ["7500+", "Homes delivered"],
  ["12+", "Years of expertise"],
  ["98%", "Client satisfaction"],
  ["250+", "Projects completed"],
]

const values = [
  {
    title: "Integrity",
    description:
      "We build trust through honesty and transparency in every interaction.",
    icon: ShieldCheck,
  },
  {
    title: "Excellence",
    description:
      "We deliver quality results with careful attention to every detail.",
    icon: Sparkles,
  },
  {
    title: "Innovation",
    description:
      "We embrace modern design to create functional, future-ready homes.",
    icon: Lightbulb,
  },
  {
    title: "Client Focus",
    description:
      "We focus on our clients, offering personalized and thoughtful support.",
    icon: Handshake,
  },
]

const journey = [
  {
    period: "2020 - 2022",
    title: "A foundation built on trust",
    description:
      "We established a focused studio practice, helping clients navigate design decisions, property goals, and project opportunities with clarity and confidence.",
  },
  {
    period: "2022 - 2024",
    title: "Refined service at a wider scale",
    description:
      "We expanded our services, delivering modern living experiences focused on quality homes, seamless coordination, and long-term client relationships.",
  },
]

const missionPoints = [
  "Expert guidance for confident decisions",
  "Simplified buying, selling, and investing",
  "Strong focus on quality and long-term value",
]

const visionCards = [
  {
    title: "Professional Insight",
    description:
      "In-depth market knowledge and expert advice to help you make confident real estate decisions.",
    icon: Compass,
  },
  {
    title: "Verified Opportunities",
    description:
      "Carefully selected properties ensuring accuracy, reliability, and long-term investment value.",
    icon: CheckCircle2,
  },
  {
    title: "Trusted Guidance",
    description:
      "End-to-end support designed to simplify your journey and deliver a smooth, stress-free experience.",
    icon: Telescope,
  },
]

function AboutPage() {
  return (
    <main className="min-h-svh overflow-x-hidden bg-background text-foreground">
      <SiteNavbar activeSection="about" appearance="default" />

      <section className="px-4 pt-28 pb-16 sm:px-6 lg:px-8 lg:pt-36 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <LoadRevealGroup className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <RevealItem>
              <IconBadge icon={Building2}>About Us</IconBadge>
            </RevealItem>
            <RevealItem>
              <h1 className="mt-6 text-4xl font-medium tracking-normal sm:text-6xl sm:text-balance lg:text-7xl">
                Where Thoughtful Design Meets Modern Living
              </h1>
            </RevealItem>
            <RevealItem>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                We create refined real estate experiences by combining
                thoughtful design, market expertise, and a deep understanding of
                modern living.
              </p>
            </RevealItem>
            <RevealItem>
              <Button asChild className="mt-8">
                <Link href="/contact">
                  Book a Visit
                  <ArrowUpRight data-icon="inline-end" className="size-4" />
                </Link>
              </Button>
            </RevealItem>
          </LoadRevealGroup>

          <div className="mt-14 grid gap-4 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <AnimatedImageCard
              src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85"
              alt="Modern home exterior with refined materials"
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              trigger="load"
              revealDelay={0.35}
              cardClassName="aspect-[16/10]"
            />
            <AnimatedImageCard
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85"
              alt="Warm minimal interior"
              sizes="(min-width: 1024px) 34vw, 100vw"
              trigger="load"
              revealDelay={0.48}
              cardClassName="aspect-[4/5]"
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <RevealGroup className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <RevealItem>
              <IconBadge icon={Building2}>Who We Are</IconBadge>
            </RevealItem>
            <RevealItem>
              <h2 className="mt-6 text-3xl font-medium tracking-normal sm:text-5xl sm:text-balance">
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
          </RevealGroup>

          <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {aboutStats.map(([value, label]) => (
              <RevealItem key={label}>
                <Card className="items-center justify-center bg-muted/40 py-10 text-center">
                  <CardContent>
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
        </div>
      </section>

      <section className="border-y bg-muted/30 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <RevealGroup className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <RevealItem>
              <IconBadge icon={ShieldCheck}>What We Stand For</IconBadge>
              <h2 className="mt-5 max-w-3xl text-3xl font-medium tracking-normal sm:text-5xl sm:text-balance lg:text-6xl">
                Principles that keep every project clear, useful, and lasting.
              </h2>
            </RevealItem>
            <RevealItem>
              <p className="max-w-xl text-sm leading-7 text-muted-foreground lg:ml-auto">
                Our work is shaped around trust, careful execution, modern
                thinking, and a client experience that feels steady from the
                first conversation to the final decision.
              </p>
            </RevealItem>
          </RevealGroup>

          <RevealGroup className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon

              return (
                <RevealItem key={value.title}>
                  <Card className="h-full bg-background">
                    <CardHeader>
                      <span className="flex size-9 items-center justify-center border border-border bg-muted">
                        <Icon className="size-4" aria-hidden="true" />
                      </span>
                      <CardTitle>{value.title}</CardTitle>
                      <CardDescription>{value.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </RevealItem>
              )
            })}
          </RevealGroup>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <RevealGroup className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr]">
            <RevealItem>
              <h2 className="text-5xl font-medium tracking-normal sm:text-6xl lg:text-7xl">
                Our Journey
              </h2>
            </RevealItem>
            <RevealGroup className="grid gap-9">
              {journey.map((item) => (
                <RevealItem key={item.period}>
                  <div className="grid gap-4 sm:grid-cols-[0.34fr_0.66fr]">
                    <p className="font-mono text-2xl text-foreground sm:text-3xl">
                      {item.period}
                    </p>
                    <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </RevealGroup>

          <RevealGroup className="mt-14 grid gap-6 lg:grid-cols-[0.38fr_0.62fr]">
            <div aria-hidden="true" className="hidden lg:block" />
            <AnimatedImageCard
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85"
              alt="Warm interior lounge with refined materials"
              sizes="(min-width: 1024px) 62vw, 100vw"
              trigger="scroll"
              revealDelay={0.08}
              cardClassName="aspect-[16/10]"
            />
          </RevealGroup>
        </div>
      </section>

      <section className="border-y px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <RevealGroup className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr]">
            <RevealItem>
              <h2 className="text-5xl font-medium tracking-normal sm:text-6xl lg:text-7xl">
                Our Mission
              </h2>
            </RevealItem>

            <RevealGroup className="grid gap-10">
              <RevealItem>
                <div className="grid gap-4 sm:grid-cols-[0.34fr_0.66fr]">
                  <h3 className="text-2xl font-medium tracking-normal sm:text-3xl">
                    Purpose
                  </h3>
                  <div>
                    <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                      Our mission is to deliver exceptional real estate
                      experiences through thoughtful service, modern solutions,
                      and a deep understanding of client needs.
                    </p>
                    <RevealGroup className="mt-6 grid gap-3">
                      {missionPoints.map((point) => (
                        <RevealItem key={point}>
                          <div className="flex items-center gap-3 text-sm">
                            <CheckCircle2
                              className="size-4 text-muted-foreground"
                              aria-hidden="true"
                            />
                            <span>{point}</span>
                          </div>
                        </RevealItem>
                      ))}
                    </RevealGroup>
                  </div>
                </div>
              </RevealItem>

              <RevealItem>
                <div className="grid gap-4 sm:grid-cols-[0.34fr_0.66fr]">
                  <h3 className="text-2xl font-medium tracking-normal sm:text-3xl">
                    Vision
                  </h3>
                  <div>
                    <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                      Shape the future of modern living.
                    </p>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                      We aim to shape the future of modern living by connecting
                      people with spaces that inspire, support, and elevate
                      everyday life.
                    </p>
                    <RevealGroup className="mt-6 grid gap-3">
                      {visionCards.map((card) => {
                        const Icon = card.icon

                        return (
                          <RevealItem key={card.title}>
                            <div className="flex items-start gap-3">
                              <span className="flex size-8 shrink-0 items-center justify-center bg-muted">
                                <Icon className="size-4" aria-hidden="true" />
                              </span>
                              <div>
                                <h4 className="font-medium">{card.title}</h4>
                                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                                  {card.description}
                                </p>
                              </div>
                            </div>
                          </RevealItem>
                        )
                      })}
                    </RevealGroup>
                  </div>
                </div>
              </RevealItem>
            </RevealGroup>
          </RevealGroup>

          <RevealGroup className="mt-14 grid gap-6 lg:grid-cols-[0.38fr_0.62fr]">
            <div aria-hidden="true" className="hidden lg:block" />
            <AnimatedImageCard
              src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85"
              alt="Modern residence shaped by thoughtful design"
              sizes="(min-width: 1024px) 62vw, 100vw"
              trigger="scroll"
              revealDelay={0.08}
              cardClassName="aspect-[16/10]"
            />
          </RevealGroup>
        </div>
      </section>

      <ReviewSection />
      <CtaFooterSection />
    </main>
  )
}

export default AboutPage
