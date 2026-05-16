import { TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"

interface BadgeProps {
  text: string
  positive: boolean
}

interface StatCardProps {
  label: string
  value: string
  valueColor?: "default" | "positive" | "negative"
  badge?: BadgeProps
}

function StatusBadge({ text, positive }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 h-[22px] px-2.5 py-0.5 rounded-lg text-xs font-medium whitespace-nowrap border",
        positive
          ? "bg-green-100 border-green-600 text-green-600"
          : "bg-red-100 border-red-600 text-red-600"
      )}
    >
      {positive && <TrendingUp className="size-3" />}
      {text}
    </span>
  )
}

export default function StatCard({
  label,
  value,
  valueColor = "default",
  badge,
}: StatCardProps) {
  return (
    <div className="bg-card border border-border rounded-xl p-4 flex flex-col gap-1.5 shadow-xs">
      <div className="flex items-center h-[22px] gap-1.5">
        <span className="flex-1 text-sm font-normal text-muted-foreground leading-5">
          {label}
        </span>
        {badge && <StatusBadge {...badge} />}
      </div>
      <p
        className={cn("m-0 text-xl font-semibold leading-7", {
          "text-card-foreground": valueColor === "default",
          "text-green-600": valueColor === "positive",
          "text-destructive": valueColor === "negative",
        })}
      >
        {value}
      </p>
    </div>
  )
}
