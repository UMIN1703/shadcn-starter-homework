# shadcn-starter-homework

Dashboard webpage สร้างจาก Figma Design System โดยใช้ Next.js 14 + Tailwind CSS รองรับ Responsive Layout ทั้ง Mobile, Tablet และ Desktop

---

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS v3**
- **Google Fonts** — Inter, Noto Sans Thai

---

## Project Structure

```
web/
├── app/
│   ├── globals.css       # Tailwind base + font-family
│   ├── layout.tsx        # Root layout + font loader
│   └── page.tsx          # Dashboard page หลัก
├── components/
│   ├── NavBar.tsx        # Navigation bar (Dashboard / Rebalance / Transaction)
│   └── StatCard.tsx      # Reusable stat card + Badge + Trending icon
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Components

### `NavBar`
- Navigation bar แสดง 3 tabs: Dashboard, Rebalance, Transaction
- มี active state จัดการด้วย `useState`
- จัด align center เสมอทุก breakpoint

### `StatCard`
- Reusable card แสดง label + value
- รองรับ `valueColor` (สีตัวเลข เช่น เขียว/แดง)
- รองรับ `badge` พร้อม trending-up icon สำหรับแสดงเปอร์เซ็นต์การเปลี่ยนแปลง

---

## Responsive Layout

| Breakpoint | Padding | Card Grid |
|---|---|---|
| Mobile (`< md`) | `px-24` | 1 column |
| Tablet (`md`) | `px-24` | 2 columns |
| Desktop (`lg+`) | `px-48` | 4 columns |

---

## Design Reference

Figma: [AI Design System — Assignment](https://www.figma.com/design/cEtekFZ9YsQrMd8eeXvPCe/-AI-Design-System----Assignment?node-id=23-1841)

---

## Getting Started

```bash
npm install
npm run dev
```

เปิด [http://localhost:3000](http://localhost:3000) ใน browser
