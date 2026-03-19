import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'warning' | 'success' | 'blue';
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        {
          "bg-gray-900 text-gray-50": variant === "default",
          "bg-gray-100 text-gray-900": variant === "secondary",
          "text-gray-900 border border-gray-200": variant === "outline",
          "bg-orange-50 text-orange-700 border border-orange-200": variant === "warning",
          "bg-green-50 text-green-700 border border-green-200": variant === "success",
          "bg-blue-50 text-blue-600 border border-blue-200": variant === "blue",
        },
        className
      )}
      {...props}
    />
  )
}

export { Badge }
