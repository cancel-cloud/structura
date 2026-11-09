import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Eye, Home, MapPin } from "lucide-react"

import { CtaFooterSection } from "@/components/cta-footer-section"
import { IconBadge } from "@/components/icon-badge"
import { ReviewSection } from "@/components/review-section"
import {
  LoadRevealGroup,
  RevealGroup,
  RevealItem,
} from "@/components/scroll-reveal"
import { SiteNavbar } from "@/components/site-navbar"
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { properties, type Property } from "@/lib/properties"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Property Listings",
  description:
    "Explore a curated collection of modern residences, villas, retreats, and penthouses designed for refined living.",
}

function PropertyListingsPage() {
  return (
    <main className="min-h-svh overflow-x-hidden bg-background text-foreground">
      <SiteNavbar activeSection="work" appearance="default" />

      <section className="px-4 pt-28 pb-14 sm:px-6 lg:px-8 lg:pt-36 lg:pb-20">
        <div className="mx-auto max-w-7xl">
          <LoadRevealGroup className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <RevealItem>
              <IconBadge icon={Home}>Property Listings</IconBadge>
            </RevealItem>
            <RevealItem>
              <h1 className="mt-6 text-4xl font-medium tracking-normal sm:text-6xl sm:text-balance lg:text-7xl">
                Explore Exceptional Living Spaces
              </h1>
            </RevealItem>
            <RevealItem>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                Discover a curated collection of refined homes, coastal villas,
                modern retreats, and penthouses shaped for comfort, value, and
                everyday elegance.
              </p>
            </RevealItem>
          </LoadRevealGroup>

          <RevealGroup className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {properties.map((property, index) => (
              <RevealItem key={property.slug}>
                <PropertyCard property={property} priority={index < 3} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <ReviewSection />
      <CtaFooterSection />
    </main>
  )
}

type PropertyCardProps = {
  priority: boolean
  property: Property
}

function PropertyCard({ priority, property }: PropertyCardProps) {
  return (
    <Link
      href={`/property-listings/${property.slug}`}
      aria-label={`Open ${property.title}`}
      className="block h-full"
    >
      <Card
        id={property.slug}
        className="relative aspect-[0.78] min-h-[28rem] p-0"
      >
        <Image
          src={property.image}
          alt={`${property.title} property preview`}
          fill
          priority={priority}
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover/card:scale-105"
        />
        <CardContent className="absolute inset-x-2 bottom-2 border border-border bg-card/85 p-0 pt-3 text-card-foreground backdrop-blur-md">
          <CardHeader className="mb-3">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="mb-3 text-xs text-muted-foreground">
                  {property.type}
                </div>
                <CardTitle className="text-2xl tracking-normal">
                  {property.title}
                </CardTitle>
                <CardDescription className="mt-3 flex items-center gap-2">
                  <span className="flex size-5 shrink-0 items-center justify-center bg-primary text-primary-foreground">
                    <MapPin className="size-3" aria-hidden="true" />
                  </span>
                  <span>{property.location}</span>
                </CardDescription>
              </div>
              <span
                className={cn(
                  buttonVariants({ variant: "secondary", size: "icon-lg" }),
                  "shrink-0"
                )}
              >
                <ArrowRight className="size-5" aria-hidden="true" />
              </span>
            </div>
          </CardHeader>
          <CardFooter className="justify-between gap-4">
            <span
              className={cn(
                buttonVariants({ variant: "secondary", size: "icon" }),
                "shrink-0"
              )}
            >
              <Eye className="size-4" aria-hidden="true" />
            </span>
            <div className="font-mono text-3xl text-foreground">
              {property.price}
            </div>
          </CardFooter>
        </CardContent>
      </Card>
    </Link>
  )
}

export default PropertyListingsPage
