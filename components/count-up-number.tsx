"use client"

import * as React from "react"

type CountUpNumberProps = {
  value: string
  duration?: number
  className?: string
}

function splitValue(value: string) {
  const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/)

  if (!match) {
    return {
      prefix: "",
      target: 0,
      suffix: value,
    }
  }

  return {
    prefix: match[1],
    target: Number(match[2]),
    suffix: match[3],
  }
}

function CountUpNumber({
  value,
  duration = 1400,
  className,
}: CountUpNumberProps) {
  const ref = React.useRef<HTMLSpanElement>(null)
  const [hasStarted, setHasStarted] = React.useState(false)
  const [displayValue, setDisplayValue] = React.useState(0)
  const { prefix, target, suffix } = React.useMemo(
    () => splitValue(value),
    [value]
  )

  React.useEffect(() => {
    const element = ref.current

    if (!element || hasStarted) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [hasStarted])

  React.useEffect(() => {
    if (!hasStarted) {
      return
    }

    let animationFrame = 0
    const startedAt = performance.now()

    function tick(now: number) {
      const progress = Math.min((now - startedAt) / duration, 1)
      const easedProgress = 1 - Math.pow(1 - progress, 3)

      setDisplayValue(Math.round(target * easedProgress))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(tick)
      }
    }

    animationFrame = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(animationFrame)
  }, [duration, hasStarted, target])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  )
}

export { CountUpNumber }
