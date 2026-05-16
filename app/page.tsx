import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-muted">
      <Link
        href="/dashboard"
        className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
      >
        Go to Dashboard →
      </Link>
    </main>
  )
}
