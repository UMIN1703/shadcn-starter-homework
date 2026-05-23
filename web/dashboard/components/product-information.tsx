"use client"

import { useState } from "react"
import { AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

type Row = {
  id: string
  category: string
  cost: string
  value: string
  pl: string
  plPct: string
  positive: boolean
  children?: Omit<Row, "children">[]
}

const tableData: Row[] = [
  {
    id: "foreign",
    category: "หุ้นต่างประเทศ",
    cost: "฿250,000.00",
    value: "฿260,000.00",
    pl: "+10,000.00",
    plPct: "+10.00%",
    positive: true,
    children: [
      { id: "shcd", category: "SHCD", cost: "฿250,000.00", value: "฿250,000.00", pl: "+10,000.00", plPct: "+10.00%", positive: true },
      { id: "msft", category: "MSFT", cost: "฿250,000.00", value: "฿250,000.00", pl: "+10,000.00", plPct: "+10.00%", positive: true },
      { id: "voo",  category: "VOO",  cost: "฿250,000.00", value: "฿250,000.00", pl: "+10,000.00", plPct: "+10.00%", positive: true },
    ],
  },
  {
    id: "retirement",
    category: "Retirement",
    cost: "฿250,000.00",
    value: "฿260,000.00",
    pl: "+10,000.00",
    plPct: "+10.00%",
    positive: true,
    children: [
      { id: "pvd",    category: "PVD",    cost: "฿250,000.00", value: "฿250,000.00", pl: "+10,000.00", plPct: "+10.00%", positive: true },
      { id: "sakhon", category: "สหกรณ์", cost: "฿250,000.00", value: "฿250,000.00", pl: "+10,000.00", plPct: "+10.00%", positive: true },
    ],
  },
  {
    id: "thai",
    category: "หุ้นไทย",
    cost: "฿250,000.00",
    value: "฿260,000.00",
    pl: "+10,000.00",
    plPct: "+10.00%",
    positive: true,
    children: [
      { id: "advanc", category: "ADVANC", cost: "฿250,000.00", value: "฿250,000.00", pl: "+10,000.00", plPct: "+10.00%", positive: true },
      { id: "delta",  category: "DELTA",  cost: "฿250,000.00", value: "฿250,000.00", pl: "+10,000.00", plPct: "+10.00%", positive: true },
    ],
  },
  {
    id: "gold",
    category: "ทอง",
    cost: "฿250,000.00",
    value: "฿260,000.00",
    pl: "+10,000.00",
    plPct: "+10.00%",
    positive: true,
  },
  {
    id: "crypto",
    category: "Crypto",
    cost: "฿250,000.00",
    value: "฿260,000.00",
    pl: "+10,000.00",
    plPct: "+10.00%",
    positive: true,
  },
]

const alerts = [
  "หุ้นต่างประเทศยังขาดเป้า 19%",
  "Crypto กำไร +261% — พิจารณาล็อกกำไรบางส่วน",
  "กอง กำไร +84% — สูงกว่าเป้าหมาย",
]

export default function ProductInformation() {
  const [showDetails, setShowDetails] = useState(true)

  return (
    <div className="bg-card border border-border rounded-xl shadow-xs flex flex-col pb-6 px-6 pt-2 w-full">
      {/* Title + Toggle */}
      <div className="flex items-center py-4 w-full">
        <p className="flex-1 text-sm font-semibold text-foreground">Product Information</p>
        <button
          role="switch"
          aria-checked={showDetails}
          onClick={() => setShowDetails((v) => !v)}
          className="flex items-center gap-2 shrink-0"
        >
          <span
            className={cn(
              "relative inline-flex h-6 w-11 shrink-0 rounded-full transition-colors",
              showDetails ? "bg-primary" : "bg-muted"
            )}
          >
            <span
              className={cn(
                "absolute top-[2px] size-5 rounded-full bg-primary-foreground shadow transition-transform",
                showDetails ? "translate-x-[22px]" : "translate-x-[2px]"
              )}
            />
          </span>
          <span className="text-sm font-medium text-foreground whitespace-nowrap">
            ดูรายละเอียดสินทรัพย์
          </span>
        </button>
      </div>

      <div className="flex flex-col gap-[10px] w-full p-[10px]">

        {/* Alert Banner */}
        <div className="bg-blue-50 border border-blue-600 rounded-lg px-4 py-3 w-full flex flex-col gap-0.5">
          <div className="flex gap-3 items-center">
            <AlertCircle className="size-4 text-blue-600 shrink-0" />
            <p className="text-sm font-medium text-blue-600">ข้อสังเกต</p>
          </div>
          <div className="flex gap-3 items-start">
            <span className="size-4 shrink-0" />
            <ul className="list-disc text-sm font-light text-slate-700 leading-5 pl-[5px]">
              {alerts.map((a) => <li key={a}>{a}</li>)}
            </ul>
          </div>
        </div>

        {/* Table */}
        <div className="w-full overflow-hidden rounded-xl border border-border">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                <th className="text-left px-2 py-2 font-bold text-slate-700">หมวดหมู่</th>
                <th className="text-right px-2 py-2 font-bold text-slate-700">ต้นทุน</th>
                <th className="text-right px-2 py-2 font-bold text-slate-700">มูลค่าปัจจุบัน</th>
                <th className="text-right px-2 py-2 font-bold text-slate-700">P&amp;L</th>
                <th className="text-right px-2 py-2 font-bold text-slate-700">%</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <>
                  {/* Parent Row */}
                  <tr key={row.id} className="border-b border-border bg-muted/20">
                    <td className="px-2 py-2 font-bold text-foreground">{row.category}</td>
                    <td className="px-2 py-2 text-right font-bold text-foreground">{row.cost}</td>
                    <td className="px-2 py-2 text-right font-bold text-foreground">{row.value}</td>
                    <td className={cn("px-2 py-2 text-right font-bold", row.positive ? "text-green-600" : "text-destructive")}>
                      {row.pl}
                    </td>
                    <td className={cn("px-2 py-2 text-right font-bold", row.positive ? "text-green-600" : "text-destructive")}>
                      {row.plPct}
                    </td>
                  </tr>

                  {/* Sub Rows — shown when toggle is ON */}
                  {showDetails && row.children?.map((child) => (
                    <tr key={child.id} className="border-b border-border bg-background">
                      <td className="px-2 py-2 pl-6 font-normal text-muted-foreground">{child.category}</td>
                      <td className="px-2 py-2 text-right font-normal text-muted-foreground">{child.cost}</td>
                      <td className="px-2 py-2 text-right font-normal text-muted-foreground">{child.value}</td>
                      <td className={cn("px-2 py-2 text-right font-normal", child.positive ? "text-green-600" : "text-destructive")}>
                        {child.pl}
                      </td>
                      <td className={cn("px-2 py-2 text-right font-normal", child.positive ? "text-green-600" : "text-destructive")}>
                        {child.plPct}
                      </td>
                    </tr>
                  ))}
                </>
              ))}

              {/* Total Row */}
              <tr className="border-t-2 border-border">
                <td className="px-2 py-2 font-bold text-foreground">Total</td>
                <td className="px-2 py-2 text-right font-bold text-foreground">฿250,000.00</td>
                <td className="px-2 py-2 text-right font-bold text-foreground">฿250,000.00</td>
                <td colSpan={2} />
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <p className="text-sm text-muted-foreground text-center">A list of your asset.</p>

      </div>
    </div>
  )
}
