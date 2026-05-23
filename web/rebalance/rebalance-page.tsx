import NavBar from "@/web/dashboard/components/nav-bar"
import StatCard from "@/web/dashboard/components/stat-card"
import GapAnalysis from "@/web/rebalance/components/gap-analysis"
import ActionPlan from "@/web/rebalance/components/action-plan"

const cards = [
  {
    label: "Total Portfolio",
    value: "฿1,001,250.00",
    valueColor: "default" as const,
  },
  {
    label: "Risk Score",
    value: "6.2/10",
    valueColor: "default" as const,
  },
  {
    label: "Diversification",
    value: "ปานกลาง",
    valueColor: "warning" as const,
  },
]

export default function RebalancePage() {
  return (
    <div className="w-full min-h-screen bg-slate-100">
      <NavBar />

      <div className="px-24 py-8 lg:px-48">
        <div className="flex flex-col gap-6 lg:px-2">

          {/* Section Title */}
          <div className="flex flex-col gap-2 px-4 lg:px-0 w-full">
            <h2 className="m-0 text-2xl font-semibold leading-8 text-primary">
              คำแนะนำการปรับพอร์ต
            </h2>
            <p className="text-sm text-muted-foreground leading-5">
              เทียบสัดส่วนปัจจุบันกับเป้าหมายของคุณ
            </p>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6 w-full">
            {cards.map((card) => (
              <StatCard key={card.label} {...card} />
            ))}
          </div>

          {/* Gap Analysis */}
          <GapAnalysis />

          {/* Action Plan */}
          <ActionPlan />

        </div>
      </div>
    </div>
  )
}
