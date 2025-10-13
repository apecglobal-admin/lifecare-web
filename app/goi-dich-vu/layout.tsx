import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gói dịch vụ ưu đãi - Life Care",
  description:
    "Khám phá các gói dịch vụ chăm sóc sức khỏe và sắc đẹp ưu đãi tại Life Care. Tiết kiệm hơn với các gói dịch vụ đặc biệt dành cho hội viên.",
}

export default function PackagesLayout({ children }: { children: React.ReactNode }) {
  return children
}
