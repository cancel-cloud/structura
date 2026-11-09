"use client"

import Image, { type ImageProps } from "next/image"
import { motion, type Variants } from "motion/react"

import { cn } from "@/lib/utils"

const imageRevealEase = [0.22, 1, 0.36, 1] as const

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 36,
    scale: 1.08,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: imageRevealEase,
      delay,
    },
  }),
}

type AnimatedFillImageProps = Omit<ImageProps, "fill"> & {
  imageClassName?: string
  revealDelay?: number
  trigger?: "load" | "scroll"
}

function AnimatedFillImage({
  alt,
  className,
  imageClassName,
  revealDelay = 0,
  trigger = "scroll",
  ...props
}: AnimatedFillImageProps) {
  const motionProps =
    trigger === "load"
      ? { animate: "visible" as const }
      : {
          whileInView: "visible" as const,
          viewport: { once: true, amount: 0.28 } as const,
        }

  return (
    <motion.div
      variants={imageVariants}
      initial="hidden"
      custom={revealDelay}
      className={cn("absolute inset-0 origin-bottom", className)}
      {...motionProps}
    >
      <Image
        {...props}
        alt={alt}
        fill
        className={cn("object-cover", imageClassName)}
      />
    </motion.div>
  )
}

export { AnimatedFillImage }
