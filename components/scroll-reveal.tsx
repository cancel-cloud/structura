"use client"

import type * as React from "react"
import { motion, type HTMLMotionProps, type Variants } from "motion/react"

import { cn } from "@/lib/utils"

const revealEase = [0.22, 1, 0.36, 1] as const

const groupVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
}

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: revealEase,
    },
  },
}

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number
  distance?: number
}

function Reveal({
  children,
  className,
  delay = 0,
  distance = 28,
  ...props
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.65, delay, ease: revealEase }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

function RevealGroup({
  children,
  className,
  ...props
}: HTMLMotionProps<"div"> & { children: React.ReactNode }) {
  return (
    <motion.div
      variants={groupVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18, margin: "0px 0px -8% 0px" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

function RevealItem({
  children,
  className,
  ...props
}: HTMLMotionProps<"div"> & { children: React.ReactNode }) {
  return (
    <motion.div
      variants={itemVariants}
      className={cn("min-w-0", className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}

function LoadRevealGroup({
  children,
  className,
  ...props
}: HTMLMotionProps<"div"> & { children: React.ReactNode }) {
  return (
    <motion.div
      variants={groupVariants}
      initial="hidden"
      animate="visible"
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export { LoadRevealGroup, Reveal, RevealGroup, RevealItem }
