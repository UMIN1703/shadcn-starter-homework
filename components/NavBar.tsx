'use client'

import { useState } from 'react'

const tabs = ['Dashboard', 'Rebalance', 'Transaction'] as const

export default function NavBar() {
  const [active, setActive] = useState<string>('Dashboard')

  return (
    <nav className="bg-white flex items-center justify-center px-6 py-2"
      style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
      <div className="flex items-center gap-1 p-1 rounded-xl">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`h-9 px-4 py-2 rounded-lg text-sm font-medium text-[#0a0a0a] transition-colors ${
              active === tab
                ? 'bg-[#f5f5f5] shadow-sm'
                : 'hover:bg-[#f5f5f5]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </nav>
  )
}
