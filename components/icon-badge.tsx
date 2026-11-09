import type * as React from "react"

import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type IconBadgeProps = React.ComponentProps<typeof Badge> & {
  icon: React.ElementType
}

function IconBadge({
  children,
  className,
  icon: Icon,
  ...props
}: IconBadgeProps) {
  return (
    <Badge variant="outline" className={cn("w-fit", className)} {...props}>
      <Icon data-icon="inline-start" className="size-3" />
      {children}
    </Badge>
  )
}

export { IconBadge }
