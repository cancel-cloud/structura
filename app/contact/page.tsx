import type { Metadata } from "next"
import type * as React from "react"
import Link from "next/link"
import { ArrowUpRight, Clock3, Home, Mail, MapPin, Phone } from "lucide-react"

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
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Structura for property inquiries, private tours, and personalized support.",
}

const contactDetails = [
  {
    label: "Email",
    value: "hello@structura.studio",
    href: "mailto:hello@structura.studio",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+1 (555) 214-8097",
    href: "tel:+15552148097",
    icon: Phone,
  },
  {
    label: "Studio",
    value: "214 Maple Avenue, Greenfield",
    href: "https://maps.google.com",
    icon: MapPin,
  },
]

const visitNotes = [
  {
    title: "Private tours",
    description:
      "Schedule a guided visit for selected residences and design consultations.",
    icon: Home,
  },
  {
    title: "Quick response",
    description:
      "Our team replies within one business day with clear next steps.",
    icon: Clock3,
  },
]

function ContactPage() {
  return (
    <main className="min-h-svh overflow-x-hidden bg-background text-foreground">
      <SiteNavbar activeSection="contact" appearance="default" />

      <section className="px-4 pt-28 pb-16 sm:px-6 lg:px-8 lg:pt-36 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <LoadRevealGroup className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <RevealItem>
              <IconBadge icon={Mail}>Contact</IconBadge>
            </RevealItem>
            <RevealItem>
              <h1 className="mt-6 text-4xl font-medium tracking-normal sm:text-6xl sm:text-balance lg:text-7xl">
                Find a Home That Truly Fits Your Lifestyle
              </h1>
            </RevealItem>
            <RevealItem>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                Get in touch for property inquiries, private tours, or
                personalized support. We&apos;ll guide you with clear
                information and a smooth experience.
              </p>
            </RevealItem>
          </LoadRevealGroup>

          <div className="mt-14 grid gap-5 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
            <RevealItem>
              <Card className="h-full p-0">
                <div className="relative min-h-[32rem] flex-1 bg-muted">
                  <AnimatedFillImage
                    src="https://framerusercontent.com/images/ZCaYluyJPifco8EGWrU6hqYCpA.png?width=1064&height=1052"
                    alt="Warm modern interior for a private property visit"
                    priority
                    sizes="(min-width: 1024px) 46vw, 100vw"
                    revealDelay={0.1}
                  />
                  <div className="absolute inset-x-4 bottom-4 border border-white/20 bg-black/35 p-5 text-white backdrop-blur-md sm:inset-x-6 sm:bottom-6">
                    <RevealGroup className="grid gap-5 sm:grid-cols-2">
                      {visitNotes.map((note) => {
                        const Icon = note.icon

                        return (
                          <RevealItem key={note.title}>
                            <div className="flex gap-3">
                              <span className="flex size-9 shrink-0 items-center justify-center bg-white text-black">
                                <Icon className="size-4" aria-hidden="true" />
                              </span>
                              <div>
                                <p className="text-sm font-medium">
                                  {note.title}
                                </p>
                                <p className="mt-1 text-xs leading-5 text-white/70">
                                  {note.description}
                                </p>
                              </div>
                            </div>
                          </RevealItem>
                        )
                      })}
                    </RevealGroup>
                  </div>
                </div>
              </Card>
            </RevealItem>

            <RevealItem>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-3xl tracking-normal sm:text-4xl">
                    Request Information
                  </CardTitle>
                  <CardDescription className="max-w-xl">
                    Tell us what you&apos;re looking for and our team will help
                    shape the right next step.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form>
                    <RevealGroup className="grid gap-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <RevealItem>
                          <Field label="Full Name" name="name" type="text" />
                        </RevealItem>
                        <RevealItem>
                          <Field
                            label="Email Address"
                            name="email"
                            type="email"
                          />
                        </RevealItem>
                      </div>
                      <RevealItem>
                        <Field label="Subject" name="subject" type="text" />
                      </RevealItem>
                      <RevealItem>
                        <div className="grid gap-2">
                          <label
                            htmlFor="message"
                            className="text-sm font-medium text-foreground"
                          >
                            Message
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Tell us about your preferred location, style, budget, or visit schedule."
                          />
                        </div>
                      </RevealItem>
                      <RevealItem>
                        <Button type="submit" size="lg" className="w-fit">
                          Request Information
                          <ArrowUpRight
                            data-icon="inline-end"
                            className="size-4"
                          />
                        </Button>
                      </RevealItem>
                    </RevealGroup>
                  </form>

                  <RevealGroup className="mt-8 border-t pt-6">
                    <RevealItem>
                      <p className="text-sm font-medium text-foreground">
                        Contact details
                      </p>
                    </RevealItem>
                    <div className="mt-4 divide-y divide-border border-y">
                      {contactDetails.map((detail) => {
                        const Icon = detail.icon

                        return (
                          <RevealItem key={detail.label}>
                            <Link
                              href={detail.href}
                              className="group flex items-center justify-between gap-4 py-4"
                            >
                              <span className="flex min-w-0 items-center gap-3">
                                <span className="flex size-9 shrink-0 items-center justify-center bg-muted text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                                  <Icon className="size-4" aria-hidden="true" />
                                </span>
                                <span className="min-w-0">
                                  <span className="block text-sm font-medium">
                                    {detail.label}
                                  </span>
                                  <span className="mt-1 block truncate text-sm text-muted-foreground">
                                    {detail.value}
                                  </span>
                                </span>
                              </span>
                              <ArrowUpRight
                                className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground"
                                aria-hidden="true"
                              />
                            </Link>
                          </RevealItem>
                        )
                      })}
                    </div>
                  </RevealGroup>
                </CardContent>
              </Card>
            </RevealItem>
          </div>
        </div>
      </section>

      <ReviewSection />
      <CtaFooterSection />
    </main>
  )
}

type FieldProps = {
  label: string
  name: string
  type: React.HTMLInputTypeAttribute
}

function Field({ label, name, type }: FieldProps) {
  return (
    <div className="grid gap-2">
      <label htmlFor={name} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <Input id={name} name={name} type={type} placeholder={label} />
    </div>
  )
}

export default ContactPage
