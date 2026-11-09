"use client"

import { motion, type Variants } from "motion/react"

import { cn } from "@/lib/utils"

const wordmarkEase = [0.22, 1, 0.36, 1] as const

const wordmarkVariants: Variants = {
  hidden: {},
  visible: (delayChildren = 0.08) => ({
    transition: {
      staggerChildren: 0.08,
      delayChildren,
    },
  }),
}

const letterVariants: Variants = {
  hidden: {
    y: "115%",
    opacity: 0,
  },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: wordmarkEase,
    },
  },
}

type AnimatedWordmarkProps = {
  ariaHidden?: boolean
  className?: string
  delay?: number
  text: string
  trigger?: "load" | "scroll"
}

function AnimatedWordmark({
  ariaHidden = false,
  className,
  delay = 0.08,
  text,
  trigger = "scroll",
}: AnimatedWordmarkProps) {
  const content = Array.from(text).map((letter, index) => (
    <span
      key={`${letter}-${index}`}
      aria-hidden="true"
      className="inline-block overflow-hidden"
    >
      <motion.span variants={letterVariants} className="inline-block">
        {letter}
      </motion.span>
    </span>
  ))

  const classNames = cn(
    "flex justify-center overflow-hidden text-center leading-none font-medium tracking-normal",
    className
  )

  if (trigger === "load") {
    return (
      <motion.div
        aria-hidden={ariaHidden || undefined}
        aria-label={ariaHidden ? undefined : text}
        variants={wordmarkVariants}
        custom={delay}
        initial="hidden"
        animate="visible"
        className={classNames}
      >
        {content}
      </motion.div>
    )
  }

  return (
    <motion.div
      aria-hidden={ariaHidden || undefined}
      aria-label={ariaHidden ? undefined : text}
      variants={wordmarkVariants}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className={classNames}
    >
      {content}
    </motion.div>
  )
}

export { AnimatedWordmark }
