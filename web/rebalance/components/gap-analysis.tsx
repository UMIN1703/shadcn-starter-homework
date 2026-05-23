import { cn } from "@/lib/utils"

const gapItems = [
  { label: "หุ้นต่างประเทศ", current: 23.7, target: 43, delta: -12.50, color: "#3b82f6" },
  { label: "PVD, สหกรณ์",    current: 23.7, target: 43, delta: +12.50, color: "#22c55e" },
  { label: "หุ้นไทย",        current: 23.7, target: 43, delta: +12.50, color: "#84cc16" },
  { label: "Emergency Fund", current: 23.7, target: 43, delta: +12.50, color: "#f59e0b" },
  { label: "Cash",           current: 23.7, target: 43, delta: -12.50, color: "#f97316" },
  { label: "ทอง",            current: 23.7, target: 43, delta: +12.50, color: "#ec4899" },
  { label: "Crypto",         current: 23.7, target: 43, delta: +12.50, color: "#dc2626" },
  { label: "ประกันภัย",      current: 23.7, target: 43, delta: +12.50, color: "#8b5cf6" },
]

export default function GapAnalysis() {
  return (
    <div className="bg-card border border-border rounded-xl shadow-xs flex flex-col px-6 pt-2 pb-6 w-full">
      <div className="flex items-center py-4 w-full">
        <p className="flex-1 text-sm font-semibold text-foreground">
          Gap Analysis (เป้าหมาย vs. ความเป็นจริง)
        </p>
      </div>

      <div className="flex flex-col gap-3 p-[10px]">
        {gapItems.map((item) => {
          const positive = item.delta >= 0
          const barPct = Math.min(Math.round((item.current / item.target) * 100), 100)
          return (
            <div key={item.label} className="flex flex-col gap-1">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-medium text-foreground">{item.label}</p>
                <div className="flex items-center gap-3 shrink-0">
                  <p className="text-sm text-muted-foreground whitespace-nowrap">
                    {item.current}% / เป้า {item.target}%
                  </p>
                  <span
                    className={cn(
                      "text-xs font-medium px-2.5 py-0.5 rounded-lg whitespace-nowrap",
                      positive ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
                    )}
                  >
                    {positive ? "+" : ""}{item.delta.toFixed(2)}%
                  </span>
                </div>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${barPct}%`, backgroundColor: item.color }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
