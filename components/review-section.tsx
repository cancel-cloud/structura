"use client"

import * as React from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight, MessageSquareQuote } from "lucide-react"

import { IconBadge } from "@/components/icon-badge"
import { RevealGroup, RevealItem } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const reviews = [
  {
    name: "Emily Carter",
    role: "Creative Director, Nova Studio",
    quote:
      "Structura made the entire home-design experience smooth and stress-free. Their team guided us with professionalism, clarity, and genuine attention to every detail.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85",
    preview:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&q=85",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=85",
  },
  {
    name: "Adrian Malik",
    role: "Founder, Atelier North",
    quote:
      "The team translated our brief into a calm, precise space that works beautifully every day. Every meeting felt focused, honest, and deeply considered.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    preview:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=85",
  },
  {
    name: "Sofia Tan",
    role: "Property Partner, Eastline Group",
    quote:
      "From early massing to final material decisions, Structura kept the project elegant and practical. The result feels refined without losing warmth.",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=85",
    preview:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=85",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=85",
  },
]

function ReviewSection() {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const activeReview = reviews[activeIndex]
  const nextReview = reviews[(activeIndex + 1) % reviews.length]

  function showPreviousReview() {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? reviews.length - 1 : currentIndex - 1
    )
  }

  function showNextReview() {
    setActiveIndex((currentIndex) => (currentIndex + 1) % reviews.length)
  }

  return (
    <section
      id="reviews"
      className="border-y bg-background px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <RevealGroup className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <RevealItem>
            <IconBadge icon={MessageSquareQuote}>Client Stories</IconBadge>
            <h2 className="mt-6 max-w-3xl text-3xl font-medium tracking-normal sm:text-5xl sm:text-balance">
              Real Experiences, Trusted by Clients
            </h2>
          </RevealItem>

          <RevealItem className="max-w-md lg:justify-self-end">
            <p className="text-sm leading-7 text-muted-foreground sm:text-base">
              Hear how our clients shaped spaces that truly match their
              lifestyle, ambitions, and expectations.
            </p>
            <div className="mt-8 flex gap-3 lg:justify-end">
              <Button
                type="button"
                variant="outline"
                size="icon-lg"
                aria-label="Show previous client story"
                onClick={showPreviousReview}
              >
                <ArrowLeft className="size-5" aria-hidden="true" />
              </Button>
              <Button
                type="button"
                size="icon-lg"
                aria-label="Show next client story"
                onClick={showNextReview}
              >
                <ArrowRight className="size-5" aria-hidden="true" />
              </Button>
            </div>
          </RevealItem>
        </RevealGroup>

        <RevealGroup className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_1fr_0.48fr] lg:items-end">
          <RevealItem>
            <Card className="relative aspect-[1.18/1] bg-muted p-0">
              <Image
                key={activeReview.image}
                src={activeReview.image}
                alt={`${activeReview.name} project review`}
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
            </Card>
          </RevealItem>

          <RevealItem className="max-w-xl self-center lg:pb-8">
            <div
              aria-hidden="true"
              className="font-heading text-7xl leading-none text-muted-foreground/35 sm:text-8xl"
            >
              &quot;
            </div>
            <blockquote className="mt-8 text-xl leading-8 font-medium tracking-normal sm:text-2xl sm:leading-10">
              {activeReview.quote}
            </blockquote>
            <div className="mt-10 flex items-center gap-4">
              <div className="relative size-14 shrink-0 overflow-hidden rounded-full bg-muted">
                <Image
                  src={activeReview.avatar}
                  alt={`${activeReview.name} avatar`}
                  fill
                  sizes="3.5rem"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <div className="text-base font-medium">{activeReview.name}</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {activeReview.role}
                </div>
              </div>
            </div>
          </RevealItem>

          <RevealItem>
            <Card className="relative hidden aspect-[0.68/1] bg-muted p-0 lg:block">
              <button
                type="button"
                aria-label={`Preview next story from ${nextReview.name}`}
                onClick={showNextReview}
                className="absolute inset-0"
              >
                <Image
                  key={nextReview.preview}
                  src={nextReview.preview}
                  alt={`${nextReview.name} next review preview`}
                  fill
                  sizes="18vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </button>
            </Card>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  )
}

export { ReviewSection }
