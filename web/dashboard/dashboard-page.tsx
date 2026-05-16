import NavBar from "@/web/dashboard/components/nav-bar"
import StatCard from "@/web/dashboard/components/stat-card"

const cards = [
  {
    label: "Total Asset",
    value: "฿1,001,250.00",
    valueColor: "default" as const,
    badge: { text: "+12.5%", positive: true },
  },
  {
    label: "Total P&L",
    value: "+฿100,000.00",
    valueColor: "positive" as const,
  },
  {
    label: "Return %",
    value: "-1.20%",
    valueColor: "negative" as const,
  },
  {
    label: "Cash Flow/Month",
    value: "+฿100,000.00",
    valueColor: "default" as const,
  },
]

export default function DashboardPage() {
  return (
    <div className="w-full min-h-screen bg-slate-100">
      <NavBar />

      {/* Desktop: px-48 | Mobile/Tablet: px-24 */}
      <div className="px-24 py-8 lg:px-48">
        <div className="flex flex-col gap-6 lg:px-2">

          {/* Section Title */}
          <div className="flex flex-col gap-2 px-4 lg:px-0 w-full lg:w-[279px]">
            <h2 className="m-0 text-2xl font-semibold leading-8 text-primary">
              ภาพรวมพอร์ตของคุณ
            </h2>
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground leading-5">
              <span>วันที่ 16 พฤษภาคม 2569</span>
              <span>อัพเดตล่าสุด 12.12 น.</span>
            </div>
          </div>

          {/* Stat Cards — 1 col mobile / 2 col tablet / 4 col desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 w-full">
            {cards.map((card) => (
              <StatCard key={card.label} {...card} />
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}
