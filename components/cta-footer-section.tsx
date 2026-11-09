import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { AnimatedWordmark } from "@/components/animated-wordmark"
import { StructuraLogo } from "@/components/structura-logo"
import { Reveal, RevealGroup, RevealItem } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { siteNavItems } from "@/lib/site-navigation"

const socialLinks = [
  ["Twitter", "https://twitter.com"],
  ["LinkedIn", "https://www.linkedin.com"],
  ["Facebook", "https://www.facebook.com"],
]

function CtaFooterSection() {
  return (
    <section id="contact" className="bg-black text-white">
      <div className="relative isolate min-h-[32rem] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=85"
          alt="Modern residence at sunset"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/35 to-black" />
        <RevealGroup className="relative z-10 mx-auto flex min-h-[32rem] max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
          <RevealItem>
            <h2 className="max-w-3xl text-4xl font-medium tracking-normal text-white sm:text-5xl sm:text-balance lg:text-6xl">
              Find Your Perfect Home Designed for Modern Living
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
              Explore thoughtfully designed homes that combine comfort, style,
              and functionality, helping you find a space that truly fits your
              lifestyle.
            </p>
          </RevealItem>
          <RevealItem>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="mt-8 bg-white text-black hover:bg-white/90"
            >
              <Link href="mailto:hello@structura.studio">
                Get Started
                <ArrowUpRight data-icon="inline-end" className="size-4" />
              </Link>
            </Button>
          </RevealItem>
        </RevealGroup>
      </div>

      <footer className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <RevealGroup className="grid gap-12 lg:grid-cols-[1.1fr_0.65fr_0.65fr]">
            <RevealItem>
              <Link href="/#home" className="inline-flex text-white">
                <StructuraLogo markClassName="h-9" wordmarkClassName="text-xl" />
              </Link>
              <p className="mt-8 text-sm text-white/45">Get in touch with us</p>
              <Link
                href="mailto:hello@structura.studio"
                className="mt-3 inline-block text-sm text-white/70 transition-colors hover:text-white"
              >
                hello@structura.studio
              </Link>
            </RevealItem>

            <RevealItem>
              <p className="text-sm text-white/70">Navigation</p>
              <nav className="mt-5 grid gap-2.5">
                {siteNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </RevealItem>

            <RevealItem>
              <p className="text-sm text-white/70">Social</p>
              <div className="mt-5 grid gap-2.5">
                {socialLinks.map(([label, href]) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-white/70 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </RevealItem>
          </RevealGroup>

          <RevealGroup className="mt-16 grid gap-6 border-t border-white/10 pt-10 lg:grid-cols-[0.5fr_1fr] lg:items-end">
            <RevealItem>
              <p className="text-sm text-white/70">Newsletter</p>
            </RevealItem>
            <form>
              <RevealGroup className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
                <RevealItem>
                  <div>
                    <p className="mb-6 text-sm text-white/35">
                      Get updates on new projects and insights.
                    </p>
                    <Input
                      type="email"
                      required
                      aria-label="Email address"
                      placeholder="Enter your email"
                      className="border-x-0 border-t-0 border-white/15 px-0 text-white placeholder:text-white/25 focus-visible:border-white/60 focus-visible:ring-0"
                    />
                  </div>
                </RevealItem>
                <RevealItem>
                  <Button
                    type="submit"
                    size="lg"
                    variant="secondary"
                    className="bg-white text-black hover:bg-white/90"
                  >
                    Subscribe
                  </Button>
                </RevealItem>
              </RevealGroup>
            </form>
          </RevealGroup>

          <Reveal
            aria-label="Structura"
            className="relative mt-16 flex min-h-48 items-center justify-center px-8 py-10 sm:min-h-64 sm:px-12 lg:mt-20 lg:min-h-80"
          >
            <span
              aria-hidden="true"
              className="absolute top-0 left-0 h-14 w-14 border-t border-l border-white/25"
            />
            <span
              aria-hidden="true"
              className="absolute top-0 right-0 h-14 w-14 border-t border-r border-white/25"
            />
            <span
              aria-hidden="true"
              className="absolute bottom-0 left-0 h-14 w-14 border-b border-l border-white/25"
            />
            <span
              aria-hidden="true"
              className="absolute right-0 bottom-0 h-14 w-14 border-r border-b border-white/25"
            />
            <AnimatedWordmark
              text="STRUCTURA"
              className="text-6xl text-white sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[13rem]"
            />
          </Reveal>

          <RevealGroup className="mt-12 grid gap-4 text-sm text-white/40 sm:grid-cols-3 sm:items-center">
            <RevealItem>
              <p>© 2026 Structura. All rights reserved.</p>
            </RevealItem>
            <RevealItem className="sm:text-center">
              <Link href="#" className="transition-colors hover:text-white">
                Privacy Policy
              </Link>
            </RevealItem>
            <RevealItem>
              <p className="sm:text-right">
                Designed by{" "}
                <Link
                  href="https://micholabs.com"
                  target="_blank"
                  className="underline"
                >
                  Micholabs
                </Link>
              </p>
            </RevealItem>
          </RevealGroup>
        </div>
      </footer>
    </section>
  )
}

export { CtaFooterSection }
