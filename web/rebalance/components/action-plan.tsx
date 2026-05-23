import { AlertCircle, FileText } from "lucide-react"
import { cn } from "@/lib/utils"

const alerts = [
  "หุ้นต่างประเทศยังขาดเป้า 19%",
  "Crypto กำไร +261% — พิจารณาล็อกกำไรบางส่วน",
  "กอง กำไร +84% — สูงกว่าเป้าหมาย",
]

type ActionRow = {
  action: "Buy" | "Sell"
  category: string
  amount: string
  positive: boolean
  result: string
}

const actions: ActionRow[] = [
  { action: "Buy",  category: "หุ้นต่างประเทศ", amount: "+10,000.00", positive: true,  result: "→ 43%" },
  { action: "Buy",  category: "PVD, สหกรณ์",    amount: "+10,000.00", positive: true,  result: "→ 43%" },
  { action: "Buy",  category: "หุ้นไทย",        amount: "+10,000.00", positive: true,  result: "→ 43%" },
  { action: "Sell", category: "Emergency Fund", amount: "-10,000.00", positive: false, result: "→ 12%" },
  { action: "Sell", category: "Cash",           amount: "-10,000.00", positive: false, result: "→ 12%" },
  { action: "Sell", category: "ทอง",            amount: "-10,000.00", positive: false, result: "→ 12%" },
  { action: "Sell", category: "Crypto",         amount: "-10,000.00", positive: false, result: "→ 12%" },
  { action: "Sell", category: "ประกันภัย",      amount: "-10,000.00", positive: false, result: "→ 12%" },
]

export default function ActionPlan() {
  return (
    <div className="bg-card border border-border rounded-xl shadow-xs flex flex-col pb-6 px-6 pt-2 w-full">
      <div className="flex items-center py-4 w-full">
        <p className="flex-1 text-sm font-semibold text-foreground">Action Plan</p>
        <button className="flex items-center gap-2 text-sm text-muted-foreground border border-border rounded-lg px-3 py-1.5 hover:bg-accent/60 transition-colors">
          <FileText className="size-4" />
          บันทึกรายการซื้อ-ขาย
        </button>
      </div>

      <div className="flex flex-col gap-[10px] p-[10px]">
        {/* Alert Banner */}
        <div className="bg-blue-50 border border-blue-600 rounded-lg px-4 py-3 w-full flex flex-col gap-0.5">
          <div className="flex gap-3 items-center">
            <AlertCircle className="size-4 text-blue-600 shrink-0" />
            <p className="text-sm font-medium text-blue-600">สรุปแผนรวม</p>
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
                <th className="text-left px-4 py-2 font-bold text-slate-700">Action</th>
                <th className="text-left px-4 py-2 font-bold text-slate-700">หมวดหมู่</th>
                <th className="text-right px-4 py-2 font-bold text-slate-700">จำนวนเงิน</th>
                <th className="text-right px-4 py-2 font-bold text-slate-700">ผลลัพธ์</th>
              </tr>
            </thead>
            <tbody>
              {actions.map((row, i) => (
                <tr key={i} className="border-b border-border last:border-b-0 bg-background hover:bg-muted/20 transition-colors">
                  <td className="px-4 py-2">
                    <span
                      className={cn(
                        "text-xs font-medium px-2.5 py-0.5 rounded-md",
                        row.action === "Buy"
                          ? "bg-green-50 text-green-600"
                          : "bg-red-50 text-red-600"
                      )}
                    >
                      {row.action}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-foreground">{row.category}</td>
                  <td className={cn("px-4 py-2 text-right font-medium", row.positive ? "text-green-600" : "text-destructive")}>
                    {row.amount}
                  </td>
                  <td className="px-4 py-2 text-right text-muted-foreground">{row.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-muted-foreground text-center">A list of your target.</p>
      </div>
    </div>
  )
}
