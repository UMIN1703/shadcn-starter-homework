import NavBar from "@/web/dashboard/components/nav-bar"
import TransactionForm from "@/web/transaction/components/transaction-form"
import HistoryLog from "@/web/transaction/components/history-log"

export default function TransactionPage() {
  return (
    <div className="w-full min-h-screen bg-slate-100">
      <NavBar />

      <div className="px-24 py-8 lg:px-48">
        <div className="flex flex-col gap-6 lg:px-2">

          {/* Section Title */}
          <div className="flex flex-col gap-2 px-4 lg:px-0 w-full">
            <h2 className="m-0 text-2xl font-semibold leading-8 text-primary">
              บันทึกรายการซื้อขาย
            </h2>
            <p className="text-sm text-muted-foreground leading-5">
              จดรายการธุรกรรมย้อนหลัง
            </p>
          </div>

          {/* Transaction Form */}
          <TransactionForm />

          {/* History Log */}
          <HistoryLog />

        </div>
      </div>
    </div>
  )
}
