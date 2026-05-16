import NavBar from '@/components/NavBar'
import StatCard from '@/components/StatCard'

const cards = [
  {
    label: 'Total Asset',
    value: '฿1,001,250.00',
    badge: { text: '+12.5%', positive: true },
  },
  {
    label: 'Total P&L',
    value: '+฿100,000.00',
    valueColor: '#16a34a',
  },
  {
    label: 'Return %',
    value: '-1.20%',
    valueColor: '#dc2626',
  },
  {
    label: 'Cash Flow/Month',
    value: '+฿100,000.00',
  },
]

export default function DashboardPage() {
  return (
    <div className="w-full min-h-screen bg-[#f1f5f9]">
      <NavBar />

      {/* Desktop: side margins px-48. Mobile/tablet: no horizontal padding */}
      <div className="px-24 py-8 lg:px-48">
        <div className="flex flex-col gap-6 lg:px-2">

          {/* Section Title — small side padding on mobile for readability */}
          <div className="flex flex-col gap-2 px-4 lg:px-0 w-full lg:w-[279px]">
            <h2 className="m-0 text-2xl font-semibold leading-8 text-[#171717]">
              ภาพรวมพอร์ตของคุณ
            </h2>
            <div className="flex flex-wrap items-center gap-3 text-sm text-[#737373] leading-5">
              <span>วันที่ 16 พฤษภาคม 2569</span>
              <span>อัพเดตล่าสุด 12.12 น.</span>
            </div>
          </div>

          {/* Cards — edge to edge on mobile/tablet, 4 columns on desktop */}
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
