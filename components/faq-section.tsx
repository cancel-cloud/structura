import { Store } from "lucide-react"

import { IconBadge } from "@/components/icon-badge"
import { RevealGroup, RevealItem } from "@/components/scroll-reveal"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    value: "project-types",
    question: "What types of projects do you design?",
    answer:
      "We design private residences, boutique hospitality spaces, work studios, and refined mixed-use interiors with a focus on calm planning, durable materials, and strong site response.",
  },
  {
    value: "process",
    question: "How does the design process work?",
    answer:
      "Our process is simple and transparent. From brief discovery and site studies to concept design, documentation, and delivery coordination, our team guides each phase so decisions stay clear and the experience feels smooth.",
  },
  {
    value: "site-visit",
    question: "Can I schedule a site consultation?",
    answer:
      "Yes. We begin many projects with a site review to understand orientation, access, constraints, and opportunities before recommending the right scope and timeline.",
  },
  {
    value: "guidance",
    question: "Do you provide consultation and guidance?",
    answer:
      "Yes. We can support early feasibility, layout direction, material selection, budget alignment, and design review for clients who need focused expert input before committing to a full build.",
  },
  {
    value: "budgets",
    question: "Do you work with different budgets?",
    answer:
      "We do. Each proposal is shaped around project goals, desired scope, schedule, and budget range, then refined so the most important design decisions receive the right attention.",
  },
]

function FaqSection() {
  return (
    <section id="faq" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <RevealGroup className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <RevealItem>
            <IconBadge icon={Store}>FAQ</IconBadge>
          </RevealItem>
          <RevealItem>
            <h2 className="mt-6 text-3xl font-medium tracking-normal sm:text-5xl sm:text-balance">
              Frequently Asked Questions
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
              Find clear answers to common questions about our projects,
              process, and services, helping you make informed decisions with
              confidence.
            </p>
          </RevealItem>
        </RevealGroup>

        <Accordion
          type="single"
          collapsible
          defaultValue="process"
          className="mx-auto mt-10 grid max-w-5xl gap-4"
        >
          <RevealGroup className="grid gap-4">
            {faqs.map((faq) => (
              <RevealItem key={faq.value}>
                <AccordionItem
                  value={faq.value}
                  className="border-0 bg-muted/40 px-5 sm:px-6"
                >
                  <AccordionTrigger className="py-5 text-lg font-medium tracking-normal hover:no-underline sm:py-6 sm:text-2xl [&>svg]:size-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <div className="bg-background px-4 py-3 text-sm leading-7 text-muted-foreground sm:px-5">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </RevealItem>
            ))}
          </RevealGroup>
        </Accordion>
      </div>
    </section>
  )
}

export { FaqSection }
