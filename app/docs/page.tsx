import type { Metadata } from "next"
import type * as React from "react"
import Link from "next/link"
import {
  ArrowDown,
  BookOpen,
  Boxes,
  Code2,
  FileText,
  FolderTree,
  ImageIcon,
  Layers3,
  Palette,
  Rocket,
  Sparkles,
  Terminal,
} from "lucide-react"

import { CtaFooterSection } from "@/components/cta-footer-section"
import { IconBadge } from "@/components/icon-badge"
import {
  LoadRevealGroup,
  Reveal,
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
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Documentation for installing, customizing, and shipping the Structura architecture website template.",
}

const packageManagers = [
  { label: "npm", key: "npm" },
  { label: "pnpm", key: "pnpm" },
  { label: "yarn", key: "yarn" },
  { label: "bun", key: "bun" },
] as const

const quickStartSteps = [
  {
    title: "Install dependencies",
    description: "Install project dependencies.",
    commands: {
      npm: "npm install",
      pnpm: "pnpm install",
      yarn: "yarn install",
      bun: "bun install",
    },
  },
  {
    title: "Start development",
    description: "Start the local development server.",
    commands: {
      npm: "npm run dev",
      pnpm: "pnpm dev",
      yarn: "yarn dev",
      bun: "bun run dev",
    },
  },
  {
    title: "Build for production",
    description: "Create a production build before deployment.",
    commands: {
      npm: "npm run build",
      pnpm: "pnpm build",
      yarn: "yarn build",
      bun: "bun run build",
    },
  },
]

const routeGroups = [
  ["/", "Homepage with hero, stats, approach, FAQ, reviews, CTA, and footer."],
  ["/about-us", "About page with studio story, values, journey, and mission."],
  [
    "/property-listings",
    "Property grid page with shadcn-styled project cards.",
  ],
  [
    "/property-listings/[slug]",
    "Dynamic project detail page generated from property data.",
  ],
  ["/blog", "Blog list page with a featured article and regular article grid."],
  ["/blog/[slug]", "Dynamic article detail page generated from blog data."],
  ["/contact", "Contact page with inquiry form and contact details."],
  ["/docs", "Template documentation for buyers and maintainers."],
]

const structureItems = [
  {
    title: "app",
    description:
      "Next.js App Router pages, route segments, metadata, and page-level layouts.",
    icon: FolderTree,
  },
  {
    title: "components",
    description:
      "Reusable sections such as navbar, hero, footer, review, FAQ, and animation helpers.",
    icon: Boxes,
  },
  {
    title: "components/ui",
    description:
      "shadcn UI primitives used by the template, including Button, Card, Badge, Input, and Separator.",
    icon: Layers3,
  },
  {
    title: "lib",
    description:
      "Shared content/data utilities, including properties, blog posts, and class name helpers.",
    icon: Code2,
  },
]

const contentGuides = [
  {
    title: "Properties",
    path: "lib/properties.ts",
    description:
      "Edit property titles, prices, locations, specs, galleries, and detail-page copy here.",
  },
  {
    title: "Blog Posts",
    path: "lib/blog-posts.ts",
    description:
      "Edit article slugs, images, excerpts, and detail sections here.",
  },
  {
    title: "Navigation",
    path: "components/site-navbar.tsx",
    description:
      "Update shared navigation links, active states, brand label, and CTA link here.",
  },
  {
    title: "CTA and Footer",
    path: "components/cta-footer-section.tsx",
    description:
      "Update footer links, newsletter copy, social links, and the dark CTA section here.",
  },
]

const standards = [
  {
    title: "Use shadcn first",
    description:
      "Build UI from components in components/ui and keep styling aligned with existing tokens.",
    icon: Palette,
  },
  {
    title: "Keep global CSS clean",
    description:
      "Do not add page-specific styles to app/globals.css. Use Tailwind utilities and tokens.",
    icon: FileText,
  },
  {
    title: "Animate with Motion",
    description:
      "Use RevealGroup, RevealItem, LoadRevealGroup, and Motion helpers for subtle staggered reveals.",
    icon: Sparkles,
  },
  {
    title: "Optimize images",
    description:
      "Use next/image, allowed remote domains, descriptive alt text, and stable aspect/min-height values.",
    icon: ImageIcon,
  },
]

function DocsPage() {
  return (
    <main className="min-h-svh overflow-x-hidden bg-background text-foreground">
      <SiteNavbar activeSection="docs" appearance="default" />

      <section className="px-4 pt-28 pb-14 sm:px-6 lg:px-8 lg:pt-36 lg:pb-20">
        <div className="mx-auto max-w-7xl">
          <LoadRevealGroup className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <RevealItem>
              <IconBadge icon={BookOpen}>Documentation</IconBadge>
            </RevealItem>
            <RevealItem>
              <h1 className="mt-6 text-4xl font-medium tracking-normal sm:text-6xl sm:text-balance lg:text-7xl">
                Structura Architecture Website Template Docs
              </h1>
            </RevealItem>
            <RevealItem>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                A practical guide for installing, editing, extending, and
                shipping this shadcn-powered architecture website template.
              </p>
            </RevealItem>
            <RevealItem>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button asChild>
                  <Link href="#quick-start">
                    Quick Start
                    <ArrowDown data-icon="inline-end" className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="#customization">Customize Template</Link>
                </Button>
              </div>
            </RevealItem>
          </LoadRevealGroup>

          <div className="mt-14 grid gap-5 lg:grid-cols-[0.28fr_0.72fr] lg:items-start">
            <RevealItem className="hidden lg:block">
              <Card className="sticky top-28">
                <CardHeader>
                  <CardTitle>Docs Index</CardTitle>
                  <CardDescription>
                    Jump to the most common setup and customization areas.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <nav className="grid gap-2 text-sm">
                    {[
                      ["Quick Start", "#quick-start"],
                      ["Project Structure", "#structure"],
                      ["Routes", "#routes"],
                      ["Customization", "#customization"],
                      ["Design Rules", "#design-rules"],
                      ["Deployment", "#deployment"],
                    ].map(([label, href]) => (
                      <Link
                        key={href}
                        href={href}
                        className="text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {label}
                      </Link>
                    ))}
                  </nav>
                </CardContent>
              </Card>
            </RevealItem>

            <div className="grid gap-5">
              <DocsSection
                id="quick-start"
                eyebrow="Setup"
                icon={Terminal}
                title="Quick Start"
                description="Use your preferred package manager. The template works with npm, pnpm, yarn, and Bun."
              >
                <RevealGroup className="grid gap-5">
                  {quickStartSteps.map((step) => (
                    <RevealItem key={step.title}>
                      <div className="grid gap-4 border-b pb-5 last:border-b-0 last:pb-0 lg:grid-cols-[0.58fr_0.42fr] lg:items-center">
                        <div className="grid gap-2">
                          {packageManagers.map((manager) => (
                            <div
                              key={manager.key}
                              className="grid grid-cols-[3.75rem_1fr] items-center gap-3"
                            >
                              <span className="text-xs font-medium text-muted-foreground">
                                {manager.label}
                              </span>
                              <code className="bg-muted px-3 py-2 font-mono text-xs text-foreground sm:text-sm">
                                {step.commands[manager.key]}
                              </code>
                            </div>
                          ))}
                        </div>
                        <div>
                          <p className="text-sm font-medium">{step.title}</p>
                          <p className="mt-2 text-sm leading-6 text-muted-foreground">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </RevealItem>
                  ))}
                </RevealGroup>
              </DocsSection>

              <DocsSection
                id="structure"
                eyebrow="Files"
                icon={FolderTree}
                title="Project Structure"
                description="Most template customization happens in a small set of predictable folders."
              >
                <RevealGroup className="grid gap-4 sm:grid-cols-2">
                  {structureItems.map((item) => {
                    const Icon = item.icon

                    return (
                      <RevealItem key={item.title}>
                        <Card size="sm" className="h-full">
                          <CardHeader>
                            <div className="mb-3 flex size-9 items-center justify-center bg-primary text-primary-foreground">
                              <Icon className="size-4" aria-hidden="true" />
                            </div>
                            <CardTitle>{item.title}</CardTitle>
                            <CardDescription>
                              {item.description}
                            </CardDescription>
                          </CardHeader>
                        </Card>
                      </RevealItem>
                    )
                  })}
                </RevealGroup>
              </DocsSection>

              <DocsSection
                id="routes"
                eyebrow="Pages"
                icon={BookOpen}
                title="Available Routes"
                description="These are the main pages included in the template."
              >
                <RevealGroup className="divide-y divide-border border-y">
                  {routeGroups.map(([route, description]) => (
                    <RevealItem key={route}>
                      <div className="grid gap-2 py-4 sm:grid-cols-[0.36fr_0.64fr]">
                        <code className="font-mono text-sm text-foreground">
                          {route}
                        </code>
                        <p className="text-sm leading-6 text-muted-foreground">
                          {description}
                        </p>
                      </div>
                    </RevealItem>
                  ))}
                </RevealGroup>
              </DocsSection>

              <DocsSection
                id="customization"
                eyebrow="Editing"
                icon={FileText}
                title="Customize Content"
                description="Content is intentionally centralized so buyers can edit the template without hunting through every component."
              >
                <RevealGroup className="grid gap-4">
                  {contentGuides.map((guide) => (
                    <RevealItem key={guide.path}>
                      <div className="grid gap-3 border-b pb-4 last:border-b-0 last:pb-0 sm:grid-cols-[0.3fr_0.7fr]">
                        <div>
                          <p className="text-sm font-medium">{guide.title}</p>
                          <code className="mt-2 block bg-muted px-3 py-2 font-mono text-xs text-muted-foreground">
                            {guide.path}
                          </code>
                        </div>
                        <p className="text-sm leading-6 text-muted-foreground">
                          {guide.description}
                        </p>
                      </div>
                    </RevealItem>
                  ))}
                </RevealGroup>
              </DocsSection>

              <DocsSection
                id="design-rules"
                eyebrow="Standards"
                icon={Palette}
                title="Design System Rules"
                description="Keep the template consistent by following the same patterns used across every page."
              >
                <RevealGroup className="grid gap-4 sm:grid-cols-2">
                  {standards.map((standard) => {
                    const Icon = standard.icon

                    return (
                      <RevealItem key={standard.title}>
                        <Card size="sm" className="h-full">
                          <CardHeader>
                            <div className="mb-3 flex size-9 items-center justify-center bg-muted text-foreground">
                              <Icon className="size-4" aria-hidden="true" />
                            </div>
                            <CardTitle>{standard.title}</CardTitle>
                            <CardDescription>
                              {standard.description}
                            </CardDescription>
                          </CardHeader>
                        </Card>
                      </RevealItem>
                    )
                  })}
                </RevealGroup>
              </DocsSection>

              <DocsSection
                id="deployment"
                eyebrow="Shipping"
                icon={Rocket}
                title="Deployment Checklist"
                description="Run the checks below before uploading the template or handing it to a client."
              >
                <RevealGroup className="grid gap-4">
                  {[
                    "Run the lint script and fix warnings before release.",
                    "Run the typecheck script to confirm route params and data files are valid.",
                    "Run the build script to verify all static and dynamic pages compile.",
                    "Review images, links, contact details, and metadata before publishing.",
                  ].map((item, index) => (
                    <RevealItem key={item}>
                      <div className="flex gap-3">
                        <span className="mt-1 flex size-5 shrink-0 items-center justify-center bg-primary text-[10px] text-primary-foreground">
                          {index + 1}
                        </span>
                        <p className="text-sm leading-6 text-muted-foreground">
                          {item}
                        </p>
                      </div>
                    </RevealItem>
                  ))}
                </RevealGroup>
              </DocsSection>
            </div>
          </div>
        </div>
      </section>

      <CtaFooterSection />
    </main>
  )
}

type DocsSectionProps = {
  children: React.ReactNode
  description: string
  eyebrow: string
  icon: React.ElementType
  id: string
  title: string
}

function DocsSection({
  children,
  description,
  eyebrow,
  icon: Icon,
  id,
  title,
}: DocsSectionProps) {
  return (
    <Reveal>
      <Card id={id}>
        <CardHeader>
          <IconBadge icon={Icon}>{eyebrow}</IconBadge>
          <CardTitle className="mt-5 text-3xl tracking-normal sm:text-4xl">
            {title}
          </CardTitle>
          <CardDescription className="max-w-2xl">{description}</CardDescription>
        </CardHeader>
        <Separator />
        <CardContent>{children}</CardContent>
      </Card>
    </Reveal>
  )
}

export default DocsPage
