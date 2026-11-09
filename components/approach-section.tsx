"use client"

import * as React from "react"
import Image from "next/image"
import { DraftingCompass } from "lucide-react"

import { IconBadge } from "@/components/icon-badge"
import { RevealGroup, RevealItem } from "@/components/scroll-reveal"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const approachItems = [
  {
    title: "Interior Styling",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
    description:
      "Every space we create is thoughtfully designed to reflect both beauty and functionality. From material selection to lighting and layout, we ensure each detail enhances comfort, style, and everyday living.",
    detail:
      "Our approach focuses on balance, combining modern aesthetics with practical design solutions to create environments that feel both refined and lived-in.",
  },
  {
    title: "Exterior Architecture",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
    description:
      "Facade rhythm, shade, openings, and landscape edges are developed together so every building feels grounded in its site and generous to the people moving through it.",
    detail:
      "We shape exterior expression through proportion, durable materials, and clear construction logic that keeps the architecture quiet, confident, and timeless.",
  },
  {
    title: "Space Planning",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    description:
      "Plans are organized around natural light, circulation, privacy, and daily rituals, creating rooms that work beautifully before they ask for decoration.",
    detail:
      "Each layout study tests adjacency, furniture scale, and long-term flexibility so homes and hospitality spaces remain useful as needs evolve.",
  },
  {
    title: "Structural Design",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
    description:
      "Structural clarity gives every project its calm. We coordinate spans, grids, and systems early so the final expression feels effortless and buildable.",
    detail:
      "The result is a disciplined framework where engineering decisions support atmosphere, comfort, and construction efficiency at the same time.",
  },
  {
    title: "Interior Design",
    image:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=85",
    description:
      "Interior design brings the project into human scale through furniture, textures, storage, and tactile details that make rooms feel complete.",
    detail:
      "We refine the final layer with a restrained palette and purposeful contrast, keeping every choice connected to the architectural idea.",
  },
]

function ApproachSection() {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const activeItem = approachItems[activeIndex]

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLDivElement>,
    index: number
  ) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      setActiveIndex(index)
    }
  }

  return (
    <section
      id="services"
      className="border-y bg-background px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <RevealGroup className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <RevealItem>
            <IconBadge icon={DraftingCompass}>Our Approach</IconBadge>
          </RevealItem>
          <RevealItem>
            <h2 className="mt-6 text-3xl font-medium tracking-normal sm:text-4xl sm:text-balance lg:text-5xl">
              Crafting Spaces with Purpose
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
              We design refined environments where architecture, comfort, and
              functionality come together to create a truly elevated living
              experience.
            </p>
          </RevealItem>
        </RevealGroup>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <RevealGroup className="grid gap-3">
            {approachItems.map((item, index) => {
              const isActive = index === activeIndex

              return (
                <RevealItem key={item.title}>
                  <Card
                    role="button"
                    tabIndex={0}
                    aria-pressed={isActive}
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                    onKeyDown={(event) => handleKeyDown(event, index)}
                    className={cn(
                      "cursor-pointer transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                      isActive
                        ? "bg-muted/50 text-foreground"
                        : "bg-background text-muted-foreground ring-0 hover:bg-muted/30 hover:text-foreground"
                    )}
                  >
                    <CardHeader className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 py-4 sm:py-5">
                      <CardTitle
                        className={cn(
                          "truncate text-2xl font-medium tracking-normal sm:text-3xl lg:text-4xl",
                          !isActive && "text-muted-foreground/65"
                        )}
                      >
                        {item.title}
                      </CardTitle>
                      <span className="font-mono text-sm text-muted-foreground">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </CardHeader>
                  </Card>
                </RevealItem>
              )
            })}
          </RevealGroup>

          <RevealItem className="lg:sticky lg:top-24">
            <Card className="relative aspect-[4/3] bg-muted p-0">
              <Image
                key={activeItem.image}
                src={activeItem.image}
                alt={`${activeItem.title} approach preview`}
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
            </Card>
            <div className="pt-7">
              <h3 className="text-2xl font-medium tracking-normal">
                Description
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                {activeItem.description}
              </p>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                {activeItem.detail}
              </p>
            </div>
          </RevealItem>
        </div>
      </div>
    </section>
  )
}

export { ApproachSection }
