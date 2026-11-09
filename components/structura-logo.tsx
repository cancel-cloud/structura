import type * as React from "react"

import { cn } from "@/lib/utils"

type StructuraLogoProps = React.ComponentProps<"span"> & {
  markClassName?: string
  showWordmark?: boolean
  wordmarkClassName?: string
}

function StructuraLogo({
  className,
  markClassName,
  showWordmark = true,
  wordmarkClassName,
  ...props
}: StructuraLogoProps) {
  return (
    <span
      aria-label="Structura"
      className={cn("inline-flex items-center gap-2 text-current", className)}
      {...props}
    >
      <span
        aria-hidden="true"
        className={cn(
          "block aspect-[35/27] h-5 shrink-0 bg-current",
          markClassName
        )}
        style={{
          WebkitMask: "url('/logo.svg') center / contain no-repeat",
          mask: "url('/logo.svg') center / contain no-repeat",
        }}
      />
      {showWordmark ? (
        <span
          className={cn(
            "font-heading text-xl leading-none font-semibold tracking-normal",
            wordmarkClassName
          )}
        >
          Structura
        </span>
      ) : null}
    </span>
  )
}

export { StructuraLogo }
