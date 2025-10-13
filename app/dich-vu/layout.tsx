import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Danh sách dịch vụ - Life Care",
  description: "Khám phá toàn bộ các dịch vụ chăm sóc sức khỏe và sắc đẹp chuyên nghiệp tại Life Care",
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children
}
