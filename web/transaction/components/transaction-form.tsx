"use client"

import { useState } from "react"
import { Calendar, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const categories = [
  "หุ้นต่างประเทศ",
  "หุ้นไทย",
  "PVD, สหกรณ์",
  "ทอง",
  "Crypto",
  "Emergency Fund",
  "Cash",
  "ประกันภัย",
]

export default function TransactionForm() {
  const [type, setType] = useState<"buy" | "sell">("buy")
  const [category, setCategory] = useState("")
  const [asset, setAsset] = useState("")
  const [date, setDate] = useState("")
  const [qty, setQty] = useState("")
  const [price, setPrice] = useState("")

  const total =
    qty && price
      ? (parseFloat(qty) * parseFloat(price)).toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
      : ""

  const reset = () => {
    setType("buy")
    setCategory("")
    setAsset("")
    setDate("")
    setQty("")
    setPrice("")
  }

  return (
    <div className="bg-card border border-border rounded-xl shadow-xs flex flex-col px-6 pt-2 pb-6 w-full">
      <div className="flex items-center py-4 w-full">
        <p className="flex-1 text-sm font-semibold text-foreground">บันทึกรายการซื้อ-ขาย</p>
      </div>

      <div className="bg-muted/30 rounded-xl p-4 flex flex-col gap-4">
        {/* Radio */}
        <div className="flex gap-6 items-center py-2">
          {(["buy", "sell"] as const).map((t) => (
            <label key={t} className="flex items-center gap-2 cursor-pointer">
              <div
                className={cn(
                  "size-4 rounded-full border flex items-center justify-center shadow-xs transition-colors",
                  type === t ? "border-foreground bg-background" : "border-border bg-background"
                )}
                onClick={() => setType(t)}
              >
                {type === t && <div className="size-2 rounded-full bg-foreground" />}
              </div>
              <span className="text-sm text-foreground">{t === "buy" ? "ซื้อ" : "ขาย"}</span>
            </label>
          ))}
        </div>

        {/* 6-col form grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {/* หมวดหมู่ */}
          <div className="flex flex-col gap-3">
            <label className="text-sm font-medium text-foreground">หมวดหมู่</label>
            <div className="relative">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full h-9 pl-3 pr-8 rounded-md border border-border bg-background text-sm shadow-xs appearance-none text-muted-foreground focus:outline-none"
              >
                <option value="" disabled>เลือกหมวดหมู่</option>
                {categories.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>

          {/* ชื่อสินทรัพย์ */}
          <div className="flex flex-col gap-3">
            <label className="text-sm font-medium text-foreground">ชื่อสินทรัพย์</label>
            <input
              type="text"
              placeholder="ระบุชื่อสินทรัพย์"
              value={asset}
              onChange={(e) => setAsset(e.target.value)}
              className="h-9 px-3 rounded-md border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground shadow-xs focus:outline-none"
            />
          </div>

          {/* วันที่ */}
          <div className="flex flex-col gap-3">
            <label className="text-sm font-medium text-foreground">วันที่</label>
            <div className="relative">
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full h-9 px-3 rounded-md border border-border bg-background text-sm text-foreground shadow-xs focus:outline-none"
              />
            </div>
          </div>

          {/* จำนวนหน่วย */}
          <div className="flex flex-col gap-3">
            <label className="text-sm font-medium text-foreground">จำนวนหน่วย</label>
            <input
              type="number"
              placeholder="ระบุจำนวนหน่วย"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              className="h-9 px-3 rounded-md border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground shadow-xs focus:outline-none"
            />
          </div>

          {/* ราคา/หน่วย */}
          <div className="flex flex-col gap-3">
            <label className="text-sm font-medium text-foreground">ราคา/หน่วย (บาท)</label>
            <input
              type="number"
              placeholder="ระบุราคาต่อหน่วย"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="h-9 px-3 rounded-md border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground shadow-xs focus:outline-none"
            />
          </div>

          {/* จำนวนรวม (auto-calculated, disabled) */}
          <div className="flex flex-col gap-3">
            <label className="text-sm font-medium text-foreground">จำนวนรวม</label>
            <input
              type="text"
              readOnly
              value={total}
              placeholder="จำนวนรวม"
              className="h-9 px-3 rounded-md border border-border bg-muted/60 text-sm text-muted-foreground shadow-xs cursor-not-allowed"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 items-center">
          <button
            onClick={() => {}}
            className="h-9 px-4 rounded-lg bg-primary text-primary-foreground text-sm font-medium shadow-xs hover:bg-primary/90 transition-colors"
          >
            บันทึกรายการ
          </button>
          <button
            onClick={reset}
            className="h-9 px-4 rounded-lg text-sm font-medium text-foreground hover:bg-accent/60 transition-colors"
          >
            ล้างค่า
          </button>
        </div>
      </div>
    </div>
  )
}
