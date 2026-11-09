"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type ThemeToggleProps = {
  appearance?: "default" | "inverse"
  className?: string
}

function ThemeToggle({ appearance = "default", className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme()
  const isInverse = appearance === "inverse"
  const isDark = resolvedTheme === "dark"
  const nextTheme = isDark ? "light" : "dark"

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      aria-label={`Switch to ${nextTheme} theme`}
      title={`Switch to ${nextTheme} theme`}
      onClick={() => setTheme(nextTheme)}
      className={cn(
        "relative overflow-hidden",
        isInverse &&
          "border-white/25 bg-white/10 text-white backdrop-blur hover:bg-white/20 hover:text-white",
        className
      )}
    >
      <Sun
        className={cn(
          "absolute size-4 transition-all duration-300",
          isDark
            ? "scale-0 rotate-90 opacity-0"
            : "scale-100 rotate-0 opacity-100"
        )}
      />
      <Moon
        className={cn(
          "absolute size-4 transition-all duration-300",
          isDark
            ? "scale-100 rotate-0 opacity-100"
            : "scale-0 -rotate-90 opacity-0"
        )}
      />
    </Button>
  )
}

export { ThemeToggle }
