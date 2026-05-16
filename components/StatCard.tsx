interface BadgeProps {
  text: string
  positive: boolean
}

interface StatCardProps {
  label: string
  value: string
  valueColor?: string
  badge?: BadgeProps
}

function TrendingUpIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <polyline points="1,9 4,5.5 6.5,8 11,3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="8,3 11,3 11,6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Badge({ text, positive }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 h-[22px] px-2.5 py-0.5 rounded-lg text-xs font-medium whitespace-nowrap border ${
        positive
          ? 'bg-[#dcfce7] border-[#16a34a] text-[#16a34a]'
          : 'bg-[#fee2e2] border-[#dc2626] text-[#dc2626]'
      }`}
    >
      {positive && <TrendingUpIcon />}
      {text}
    </span>
  )
}

export default function StatCard({ label, value, valueColor = '#0a0a0a', badge }: StatCardProps) {
  return (
    <div className="bg-white border border-[#e5e5e5] rounded-xl p-4 flex flex-col gap-1.5"
      style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.08)' }}>
      <div className="flex items-center h-[22px] gap-1.5">
        <span className="flex-1 text-sm font-normal text-[#737373] leading-5">{label}</span>
        {badge && <Badge {...badge} />}
      </div>
      <p className="m-0 text-xl font-semibold leading-7" style={{ color: valueColor }}>
        {value}
      </p>
    </div>
  )
}
