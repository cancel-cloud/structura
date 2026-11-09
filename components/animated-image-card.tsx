"use client"

import Image, { type ImageProps } from "next/image"
import { motion, type Variants } from "motion/react"

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const imageRevealEase = [0.22, 1, 0.36, 1] as const

const imageContentVariants: Variants = {
  hidden: {
    y: "10%",
    scale: 1.12,
  },
  visible: (delay = 0) => ({
    y: "0%",
    scale: 1,
    transition: {
      duration: 0.9,
      ease: imageRevealEase,
      delay,
    },
  }),
}

type AnimatedImageCardProps = Omit<ImageProps, "fill"> & {
  cardClassName?: string
  imageClassName?: string
  revealDelay?: number
  trigger?: "load" | "scroll"
}

function AnimatedImageCard({
  alt,
  cardClassName,
  className,
  imageClassName,
  revealDelay = 0,
  trigger = "scroll",
  ...props
}: AnimatedImageCardProps) {
  const motionProps =
    trigger === "load"
      ? { animate: "visible" as const }
      : {
          whileInView: "visible" as const,
          viewport: { once: true, amount: 0.28 } as const,
        }

  return (
    <Card
      className={cn(
        "relative bg-transparent p-0 shadow-none ring-0",
        cardClassName
      )}
    >
      <motion.div
        variants={imageContentVariants}
        initial="hidden"
        custom={revealDelay}
        className="absolute inset-0 origin-bottom"
        {...motionProps}
      >
        <Image
          {...props}
          alt={alt}
          fill
          className={cn("object-cover", imageClassName, className)}
        />
      </motion.div>
    </Card>
  )
}

export { AnimatedImageCard }
