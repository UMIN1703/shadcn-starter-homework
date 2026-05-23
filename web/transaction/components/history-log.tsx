"use client"

import { useState } from "react"
import { Search, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

type TxRow = {
  date: string
  type: "Buy" | "Sell"
  category: string
  asset: string
  qty: string
  pricePerUnit: string
  total: string
}

const rows: TxRow[] = [
  { date: "05 พ.ค. 2568", type: "Buy",  category: "ทอง",            asset: "ทอง",  qty: "1,000.00", pricePerUnit: "100.0000", total: "10,000.00" },
  { date: "05 พ.ค. 2568", type: "Buy",  category: "Crypto",         asset: "BTC",  qty: "1,000.00", pricePerUnit: "100.0000", total: "10,000.00" },
  { date: "05 พ.ค. 2568", type: "Buy",  category: "หุ้นต่างประเทศ", asset: "VOO",  qty: "1,000.00", pricePerUnit: "100.0000", total: "10,000.00" },
  { date: "05 พ.ค. 2568", type: "Sell", category: "หุ้นไทย",        asset: "TISCO",qty: "1,000.00", pricePerUnit: "100.0000", total: "10,000.00" },
]

const tabs = ["ทั้งหมด", "ซื้อ", "ขาย"] as const
type Tab = (typeof tabs)[number]

export default function HistoryLog() {
  const [activeTab, setActiveTab] = useState<Tab>("ทั้งหมด")
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)
  const totalPages = 5

  const filtered = rows.filter((r) => {
    const matchTab =
      activeTab === "ทั้งหมด" ||
      (activeTab === "ซื้อ" && r.type === "Buy") ||
      (activeTab === "ขาย" && r.type === "Sell")
    const matchSearch =
      search === "" ||
      r.category.toLowerCase().includes(search.toLowerCase()) ||
      r.asset.toLowerCase().includes(search.toLowerCase())
    return matchTab && matchSearch
  })

  return (
    <div className="bg-card border border-border rounded-xl shadow-xs flex flex-col pb-6 px-6 pt-2 w-full">
      {/* Header */}
      <div className="flex items-center gap-4 py-4 w-full">
        <p className="flex-1 text-sm font-semibold text-foreground">History Log</p>
        <div className="flex items-center gap-4 shrink-0">
          {/* Month selector */}
          <div className="relative">
            <select className="h-9 pl-3 pr-8 rounded-md border border-border bg-background text-sm text-foreground shadow-xs appearance-none focus:outline-none">
              <option>พฤษภาคม 69</option>
              <option>เมษายน 69</option>
              <option>มีนาคม 69</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
          </div>
          {/* Search */}
          <div className="relative flex items-center h-9 border border-border rounded-md bg-background shadow-xs">
            <Search className="absolute left-3 size-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-full pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground bg-transparent focus:outline-none w-[200px]"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {/* Tabs */}
        <div className="flex flex-col gap-0">
          <div className="flex gap-0.5 items-center">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "h-9 px-4 rounded-tl-lg rounded-tr-lg text-sm font-medium text-primary-foreground shadow-xs transition-colors",
                  activeTab === tab ? "bg-slate-600" : "bg-slate-400 hover:bg-slate-500"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="w-full h-px bg-border" />
        </div>

        {/* Table */}
        <div className="w-full overflow-hidden rounded-xl border border-border">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-200 border-b border-border">
                <th className="text-left px-2 py-2.5 font-bold text-slate-700">วันที่บันทึก</th>
                <th className="text-center px-2 py-2.5 font-bold text-slate-700 w-[100px]">ประเภท</th>
                <th className="text-left px-2 py-2.5 font-bold text-slate-700">หมวดหมู่</th>
                <th className="text-left px-2 py-2.5 font-bold text-slate-700">สินทรัพย์</th>
                <th className="text-right px-2 py-2.5 font-bold text-slate-700">จำนวนหน่วย</th>
                <th className="text-right px-2 py-2.5 font-bold text-slate-700">จำนวน/หน่วย</th>
                <th className="text-right px-2 py-2.5 font-bold text-slate-700">จำนวนรวม (บาท)</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((row, i) => (
                <tr key={i} className="border-b border-border last:border-b-0 hover:bg-muted/20 transition-colors">
                  <td className="px-2 py-2 text-muted-foreground">{row.date}</td>
                  <td className="px-2 py-2 text-center">
                    <span
                      className={cn(
                        "text-xs font-medium px-2.5 py-0.5 rounded-lg",
                        row.type === "Buy"
                          ? "bg-green-50 text-green-600"
                          : "bg-red-50 text-red-600"
                      )}
                    >
                      {row.type}
                    </span>
                  </td>
                  <td className="px-2 py-2 text-muted-foreground">{row.category}</td>
                  <td className="px-2 py-2 text-muted-foreground">{row.asset}</td>
                  <td className="px-2 py-2 text-right text-muted-foreground">{row.qty}</td>
                  <td className="px-2 py-2 text-right text-muted-foreground">{row.pricePerUnit}</td>
                  <td className="px-2 py-2 text-right text-muted-foreground">{row.total}</td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={7} className="text-center py-8 text-muted-foreground text-sm">
                    ไม่พบรายการ
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">รายการทั้งหมด {rows.length} รายการ</p>
          <div className="flex items-center gap-2">
            {/* Page numbers */}
            <div className="flex items-center border border-border rounded-md shadow-xs overflow-hidden">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={cn(
                    "w-8 h-8 flex items-center justify-center text-sm font-medium border-r border-border last:border-r-0 transition-colors",
                    page === p
                      ? "bg-primary text-primary-foreground"
                      : "bg-background text-foreground hover:bg-accent/60"
                  )}
                >
                  {p}
                </button>
              ))}
            </div>
            {/* Prev / Next */}
            <div className="flex items-center border border-border rounded-md shadow-xs overflow-hidden">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="w-8 h-8 flex items-center justify-center border-r border-border bg-background hover:bg-accent/60 transition-colors"
              >
                <ChevronLeft className="size-4 text-foreground" />
              </button>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                className="w-8 h-8 flex items-center justify-center bg-background hover:bg-accent/60 transition-colors"
              >
                <ChevronRight className="size-4 text-foreground" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
