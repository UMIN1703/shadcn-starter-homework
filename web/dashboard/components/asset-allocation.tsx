import { cn } from "@/lib/utils"

const PIE_CHART = "https://www.figma.com/api/mcp/asset/021982cd-c1a0-4d76-a446-d0caba69b703"

const allocations = [
  { label: "หุ้นต่างประเทศ", percent: "24.12%", amount: "฿280,420.59", color: "#3b82f6" },
  { label: "PVD, สหกรณ์",    percent: "22.87%", amount: "฿280,420.59", color: "#f59e0b" },
  { label: "หุ้นไทย",        percent: "25.34%", amount: "฿280,420.59", color: "#0ea5e9" },
  { label: "Emergency Fund", percent: "21.76%", amount: "฿280,420.59", color: "#10b981" },
  { label: "Cash",           percent: "23.45%", amount: "฿280,420.59", color: "#f97316" },
  { label: "ทอง",            percent: "24.67%", amount: "฿280,420.59", color: "#eab308" },
  { label: "Crypto",         percent: "22.99%", amount: "฿280,420.59", color: "#6366f1" },
  { label: "ประกันภัย",      percent: "23.88%", amount: "฿280,420.59", color: "#ec4899" },
]

export default function AssetAllocation() {
  return (
    <div className="bg-card border border-border rounded-xl shadow-xs flex flex-col items-start justify-center px-6 py-4 w-full">
      {/* Title */}
      <div className="flex items-center py-4 w-full">
        <p className="flex-1 text-sm font-semibold text-foreground">Asset Allocation</p>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 items-center w-full p-[10px]">
        {/* Chart + Legend */}
        <div className="flex gap-12 items-center justify-center w-full">
          {/* Pie Chart */}
          <div className="flex items-center justify-center px-4 py-4 shrink-0">
            <img
              src={PIE_CHART}
              alt="Asset Allocation Chart"
              className="size-48 object-contain"
            />
          </div>

          {/* Legend */}
          <div className="flex flex-1 flex-col gap-2 min-w-0">
            {allocations.map((item) => (
              <div key={item.label} className="flex gap-4 items-center w-full">
                <div className="flex flex-1 gap-2 items-center min-w-0">
                  <span
                    className="shrink-0 size-[10px] rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <p className="flex-1 text-sm font-normal text-muted-foreground truncate">
                    {item.label}
                  </p>
                </div>
                <div className="flex gap-2 items-center text-sm text-right shrink-0">
                  <p className="font-normal text-muted-foreground whitespace-nowrap">
                    {item.percent}
                  </p>
                  <p className="font-semibold text-primary w-[120px] text-right">
                    {item.amount}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <p className="text-sm font-normal text-muted-foreground">
          A list of your recent invoices.
        </p>
      </div>
    </div>
  )
}
