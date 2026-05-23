"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const tabs = [
  { label: "Dashboard",   href: "/dashboard" },
  { label: "Rebalance",   href: "/rebalance" },
  { label: "Transaction", href: "/transaction" },
] as const

export default function NavBar() {
  const pathname = usePathname()

  return (
    <nav className="bg-background w-full flex flex-col items-center px-6 py-2 drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1)]">
      <div className="flex items-center gap-1 px-1 py-1 rounded-xl">
        {tabs.map((tab) => (
          <Link
            key={tab.href}
            href={tab.href}
            className={cn(
              "h-9 px-4 py-2 rounded-lg text-sm font-medium text-foreground transition-colors",
              pathname === tab.href
                ? "bg-accent drop-shadow-[0px_1px_1px_rgba(0,0,0,0.1)]"
                : "hover:bg-accent/60"
            )}
          >
            {tab.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
