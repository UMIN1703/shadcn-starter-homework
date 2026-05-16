import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "shadcn-starter-homework",
  description: "Dashboard — shadcn/ui + Tailwind v4 + Figma MCP",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
