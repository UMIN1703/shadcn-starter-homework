"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const tabs = ["Dashboard", "Rebalance", "Transaction"] as const
type Tab = (typeof tabs)[number]

export default function NavBar() {
  const [active, setActive] = useState<Tab>("Dashboard")

  return (
    <nav className="bg-background shadow-xs flex items-center justify-center px-6 py-2">
      <div className="flex items-center gap-1 p-1 rounded-xl">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={cn(
              "h-9 px-4 py-2 rounded-lg text-sm font-medium text-foreground transition-colors",
              active === tab
                ? "bg-accent shadow-xs"
                : "hover:bg-accent/60"
            )}
          >
            {tab}
          </button>
        ))}
      </div>
    </nav>
  )
}
