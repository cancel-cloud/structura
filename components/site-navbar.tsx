"use client"

import Link from "next/link"
import { ArrowUpRight, Menu } from "lucide-react"
import { motion } from "motion/react"

import { StructuraLogo } from "@/components/structura-logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { siteNavItems } from "@/lib/site-navigation"
import { cn } from "@/lib/utils"

const navbarEase = [0.22, 1, 0.36, 1] as const

type SiteNavbarProps = {
  activeSection?: string
  animated?: boolean
  appearance?: "default" | "inverse"
  className?: string
  ctaHref?: string
  ctaLabel?: string
}

function SiteNavbar({
  activeSection = "home",
  animated = true,
  appearance = "default",
  className,
  ctaHref = "/contact",
  ctaLabel = "Book a Visit",
}: SiteNavbarProps) {
  const isInverse = appearance === "inverse"
  const content = (
    <>
      <Link
        href="/#home"
        className={cn(
          "flex min-w-0 items-center gap-2 text-sm font-medium",
          isInverse ? "text-white" : "text-foreground"
        )}
      >
        <StructuraLogo
          markClassName="h-7"
          wordmarkClassName="text-lg"
          className="min-w-0"
        />
      </Link>

      <div className="hidden items-center gap-8 md:flex">
        {siteNavItems.map((item) => (
          <SiteNavLink
            key={item.href}
            href={item.href}
            label={item.label}
            isActive={activeSection === item.sectionId}
            appearance={appearance}
          />
        ))}
      </div>

      <div className="hidden items-center gap-2 md:flex">
        <ThemeToggle appearance={appearance} />
        <Button
          asChild
          size="lg"
          variant="outline"
          className={cn(
            "hidden sm:inline-flex",
            isInverse &&
              "border-white/25 bg-white/10 text-white backdrop-blur hover:bg-white/20 hover:text-white"
          )}
        >
          <Link href={ctaHref}>
            {ctaLabel}
            <ArrowUpRight data-icon="inline-end" className="size-4" />
          </Link>
        </Button>
      </div>

      <div className="flex items-center gap-2 md:hidden">
        <ThemeToggle appearance={appearance} />
        <SiteMobileMenu
          activeSection={activeSection}
          appearance={appearance}
          ctaHref={ctaHref}
          ctaLabel={ctaLabel}
        />
      </div>
    </>
  )

  return (
    <header className={cn("absolute inset-x-0 top-0 z-50", className)}>
      {animated ? (
        <motion.nav
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: navbarEase, delay: 0.2 }}
          className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
        >
          {content}
        </motion.nav>
      ) : (
        <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          {content}
        </nav>
      )}
    </header>
  )
}

type SiteMobileMenuProps = {
  activeSection: string
  appearance: "default" | "inverse"
  ctaHref: string
  ctaLabel: string
}

function SiteMobileMenu({
  activeSection,
  appearance,
  ctaHref,
  ctaLabel,
}: SiteMobileMenuProps) {
  const isInverse = appearance === "inverse"

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          type="button"
          size="icon"
          variant="outline"
          aria-label="Open navigation"
          className={cn(
            isInverse &&
              "border-white/25 bg-white/10 text-white backdrop-blur hover:bg-white/20 hover:text-white"
          )}
        >
          <Menu className="size-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[min(22rem,calc(100vw-2rem))]">
        <SheetHeader>
          <SheetTitle>
            <StructuraLogo markClassName="h-7" wordmarkClassName="text-lg" />
          </SheetTitle>
          <SheetDescription>
            Architecture and interiors for modern living.
          </SheetDescription>
        </SheetHeader>

        <nav className="grid gap-1">
          {siteNavItems.map((item) => (
            <SheetClose asChild key={item.href}>
              <Link
                href={item.href}
                aria-current={
                  activeSection === item.sectionId ? "page" : undefined
                }
                className={cn(
                  "flex items-center justify-between border-b py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                  activeSection === item.sectionId && "text-foreground"
                )}
              >
                {item.label}
                <span className="text-xs text-muted-foreground">
                  {String(siteNavItems.indexOf(item) + 1).padStart(2, "0")}
                </span>
              </Link>
            </SheetClose>
          ))}
        </nav>

        <SheetFooter>
          <div className="flex items-center justify-between border-b py-3">
            <span className="text-sm font-medium text-muted-foreground">
              Theme
            </span>
            <ThemeToggle />
          </div>
          <SheetClose asChild>
            <Button asChild size="lg" variant="default" className="w-full">
              <Link href={ctaHref}>
                {ctaLabel}
                <ArrowUpRight data-icon="inline-end" className="size-4" />
              </Link>
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

type SiteNavLinkProps = {
  appearance: "default" | "inverse"
  href: string
  isActive: boolean
  label: string
}

function SiteNavLink({ appearance, href, isActive, label }: SiteNavLinkProps) {
  const isInverse = appearance === "inverse"

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "group relative overflow-hidden py-2 text-sm leading-none font-medium tracking-normal transition-colors duration-300",
        isInverse
          ? "text-white/65 hover:text-white data-[active=true]:text-white"
          : "text-muted-foreground hover:text-foreground data-[active=true]:text-foreground"
      )}
      data-active={isActive}
    >
      <span className="relative block overflow-hidden">
        <span className="block transition-transform duration-500 ease-out group-hover:-translate-y-full">
          {label}
        </span>
        <span className="absolute inset-0 translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0">
          {label}
        </span>
      </span>
    </Link>
  )
}

export { SiteNavbar, siteNavItems }
