import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Bath,
  BedDouble,
  CalendarDays,
  CheckCircle2,
  FileText,
  Home,
  ImageIcon,
  Layers3,
  MapPin,
  Ruler,
  Sparkles,
} from "lucide-react"

import { AnimatedFillImage } from "@/components/animated-fill-image"
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
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { getPropertyBySlug, properties, type Property } from "@/lib/properties"

type PropertyDetailPageProps = {
  params: Promise<{
    slug: string
  }>
}

const specIcons = {
  bathrooms: Bath,
  bedrooms: BedDouble,
  completionYear: CalendarDays,
  floors: Layers3,
  livingSpace: Ruler,
}

export function generateStaticParams() {
  return properties.map((property) => ({
    slug: property.slug,
  }))
}

export async function generateMetadata({
  params,
}: PropertyDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const property = getPropertyBySlug(slug)

  if (!property) {
    return {
      title: "Property",
    }
  }

  return {
    title: property.title,
    description: property.description,
  }
}

async function PropertyDetailPage({ params }: PropertyDetailPageProps) {
  const { slug } = await params
  const property = getPropertyBySlug(slug)

  if (!property) {
    notFound()
  }

  const featuredProperties = properties
    .filter((item) => item.slug !== property.slug)
    .slice(0, 3)

  const specs = [
    {
      key: "livingSpace",
      label: "Living space",
      value: property.livingSpace,
    },
    {
      key: "completionYear",
      label: "Completion year",
      value: property.completionYear,
    },
    {
      key: "floors",
      label: "Floors",
      value: property.floors,
    },
    {
      key: "bedrooms",
      label: "Bedrooms",
      value: property.bedrooms,
    },
    {
      key: "bathrooms",
      label: "Bathrooms",
      value: property.bathrooms,
    },
  ] as const

  return (
    <main className="min-h-svh overflow-x-hidden bg-background text-foreground">
      <SiteNavbar activeSection="work" appearance="default" />

      <section className="px-4 pt-28 pb-12 sm:px-6 lg:px-8 lg:pt-36 lg:pb-16">
        <div className="mx-auto max-w-7xl">
          <LoadRevealGroup className="max-w-4xl">
            <RevealItem>
              <Button asChild variant="ghost" size="sm" className="mb-8 -ml-3">
                <Link href="/property-listings">
                  <ArrowLeft data-icon="inline-start" className="size-4" />
                  Back to Properties
                </Link>
              </Button>
            </RevealItem>
            <RevealItem>
              <IconBadge icon={Home}>{property.status}</IconBadge>
            </RevealItem>
            <RevealItem>
              <h1 className="mt-6 text-4xl font-medium tracking-normal sm:text-6xl sm:text-balance lg:text-7xl">
                {property.title}
              </h1>
            </RevealItem>
            <RevealItem>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                {property.description}
              </p>
            </RevealItem>
            <RevealItem>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <span className="font-mono text-4xl text-foreground sm:text-5xl">
                  {property.price}
                </span>
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="size-4" aria-hidden="true" />
                  {property.location}
                </span>
              </div>
            </RevealItem>
          </LoadRevealGroup>

          <RevealGroup className="mt-12">
            <RevealItem>
              <Card className="p-0">
                <div className="relative min-h-[26rem] bg-muted sm:min-h-[36rem]">
                  <AnimatedFillImage
                    src={property.image}
                    alt={`${property.title} exterior preview`}
                    priority
                    sizes="(min-width: 1280px) 1200px, 100vw"
                    trigger="load"
                    revealDelay={0.15}
                  />
                  <div className="absolute inset-x-4 bottom-4 border border-white/20 bg-black/40 p-4 text-white backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:p-5">
                    <RevealGroup className="grid gap-3 sm:grid-cols-3">
                      {specs.slice(0, 3).map((spec) => (
                        <RevealItem key={spec.key}>
                          <div>
                            <p className="text-xs text-white/60">
                              {spec.label}
                            </p>
                            <p className="mt-1 text-lg font-medium">
                              {spec.value}
                            </p>
                          </div>
                        </RevealItem>
                      ))}
                    </RevealGroup>
                  </div>
                </div>
              </Card>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.62fr_0.38fr] lg:items-start">
          <RevealGroup className="space-y-10">
            <RevealItem>
              <IconBadge icon={FileText}>Overview</IconBadge>
              <h2 className="mt-5 max-w-3xl text-3xl font-medium tracking-normal sm:text-5xl sm:text-balance">
                Refined Living, Thoughtfully Designed
              </h2>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
                {property.overview}
              </p>
            </RevealItem>

            <RevealItem>
              <div>
                <IconBadge icon={CheckCircle2}>Property Highlights</IconBadge>
                <h3 className="mt-5 text-2xl font-medium tracking-normal sm:text-3xl">
                  A Home Designed for Comfort, Functionality, and Modern Living
                </h3>
              </div>
            </RevealItem>

            <RevealGroup className="grid gap-4 sm:grid-cols-3">
              {property.highlights.map((highlight) => (
                <RevealItem key={highlight}>
                  <Card size="sm" className="h-full">
                    <CardHeader>
                      <div className="mb-3 flex size-9 items-center justify-center bg-primary text-primary-foreground">
                        <CheckCircle2 className="size-4" aria-hidden="true" />
                      </div>
                      <CardDescription>{highlight}</CardDescription>
                    </CardHeader>
                  </Card>
                </RevealItem>
              ))}
            </RevealGroup>
          </RevealGroup>

          <RevealGroup className="grid gap-5 lg:sticky lg:top-28">
            <RevealItem>
              <Card>
                <CardHeader>
                  <CardTitle>Property Details</CardTitle>
                  <CardDescription>
                    Key information for {property.title}.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="divide-y divide-border border-y">
                    {specs.map((spec) => {
                      const Icon = specIcons[spec.key]

                      return (
                        <div
                          key={spec.key}
                          className="flex items-center justify-between gap-4 py-4"
                        >
                          <span className="flex items-center gap-3 text-sm text-muted-foreground">
                            <span className="flex size-8 items-center justify-center bg-muted text-foreground">
                              <Icon className="size-4" aria-hidden="true" />
                            </span>
                            {spec.label}
                          </span>
                          <span className="text-sm font-medium">
                            {spec.value}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/contact">
                      Schedule a Visit
                      <ArrowUpRight data-icon="inline-end" className="size-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <RevealGroup className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <RevealItem>
              <IconBadge icon={ImageIcon}>Gallery</IconBadge>
              <h2 className="mt-5 text-3xl font-medium tracking-normal sm:text-5xl">
                Inside the Project
              </h2>
            </RevealItem>
          </RevealGroup>

          <RevealGroup className="mt-8 grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
            <RevealItem>
              <Card className="p-0">
                <div className="relative min-h-[28rem] bg-muted">
                  <AnimatedFillImage
                    src={property.gallery[0]}
                    alt={`${property.title} gallery image 1`}
                    sizes="(min-width: 1024px) 45vw, 100vw"
                  />
                </div>
              </Card>
            </RevealItem>
            <div className="grid gap-5 sm:grid-cols-2">
              {property.gallery.slice(1).map((image, index) => (
                <RevealItem key={image}>
                  <Card className="h-full p-0">
                    <div className="relative min-h-[28rem] bg-muted">
                      <AnimatedFillImage
                        src={image}
                        alt={`${property.title} gallery image ${index + 2}`}
                        sizes="(min-width: 1024px) 28vw, 100vw"
                        revealDelay={0.08 * (index + 1)}
                      />
                    </div>
                  </Card>
                </RevealItem>
              ))}
            </div>
          </RevealGroup>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <RevealGroup className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <RevealItem>
              <IconBadge icon={Sparkles}>Featured Properties</IconBadge>
              <h2 className="mt-5 text-3xl font-medium tracking-normal sm:text-5xl">
                More Spaces to Explore
              </h2>
            </RevealItem>
            <RevealItem>
              <Button asChild variant="outline">
                <Link href="/property-listings">
                  View All
                  <ArrowUpRight data-icon="inline-end" className="size-4" />
                </Link>
              </Button>
            </RevealItem>
          </RevealGroup>

          <RevealGroup className="mt-8 grid gap-5 md:grid-cols-3">
            {featuredProperties.map((item) => (
              <RevealItem key={item.slug}>
                <FeaturedPropertyCard property={item} />
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

function FeaturedPropertyCard({ property }: { property: Property }) {
  return (
    <Link
      href={`/property-listings/${property.slug}`}
      aria-label={`Open ${property.title}`}
      className="block h-full"
    >
      <Card className="h-full p-0">
        <div className="relative aspect-[4/5] bg-muted">
          <Image
            src={property.image}
            alt={`${property.title} featured preview`}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover/card:scale-105"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-2xl tracking-normal">
            {property.title}
          </CardTitle>
          <CardDescription className="mt-2 flex items-center gap-2">
            <MapPin className="size-4" aria-hidden="true" />
            {property.location}
          </CardDescription>
        </CardHeader>
        <CardFooter className="justify-between">
          <span className="font-mono text-2xl">{property.price}</span>
          <span className="flex size-8 items-center justify-center bg-secondary text-secondary-foreground">
            <ArrowRight className="size-4" aria-hidden="true" />
          </span>
        </CardFooter>
      </Card>
    </Link>
  )
}

export default PropertyDetailPage
