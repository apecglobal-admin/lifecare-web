import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://lifecare.apecglobal.vn"),
  title: "Câu Lạc Bộ Life Care - Chăm Sóc Sức Khỏe & Sắc Đẹp",
  description:
    "Cùng hợp sức Hội viên đem lại lợi ích thiết thực cho sức khỏe cộng đồng. Dịch vụ chăm sóc sức khỏe và sắc đẹp chuyên nghiệp với phương pháp Đông - Tây y kết hợp.",
  keywords: "life care, chăm sóc sức khỏe, spa, massage, foot massage, body care, beauty care",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Câu Lạc Bộ Life Care - Chăm Sóc Sức Khỏe & Sắc Đẹp",
    description:
      "Cùng hợp sức Hội viên đem lại lợi ích thiết thực cho sức khỏe cộng đồng. Dịch vụ chăm sóc sức khỏe và sắc đẹp chuyên nghiệp với phương pháp Đông - Tây y kết hợp.",
    url: "https://lifecare.apecglobal.vn/",
    siteName: "Life Care",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-life-care-IkBSc0AM0Tbtvf7sl5RzwzrsTzYZiP.png",
        width: 1200,
        height: 630,
        alt: "Life Care - Chăm sóc sức khỏe & sắc đẹp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Câu Lạc Bộ Life Care - Chăm Sóc Sức Khỏe & Sắc Đẹp",
    description:
      "Cùng hợp sức Hội viên đem lại lợi ích thiết thực cho sức khỏe cộng đồng. Dịch vụ chăm sóc sức khỏe và sắc đẹp chuyên nghiệp với phương pháp Đông - Tây y kết hợp.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-life-care-IkBSc0AM0Tbtvf7sl5RzwzrsTzYZiP.png",
    ],
  },
  icons: {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-life-care-IkBSc0AM0Tbtvf7sl5RzwzrsTzYZiP.png",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HealthAndBeautyBusiness",
              name: "Câu Lạc Bộ Bảo Vệ Sức Khỏe Cộng Đồng LIFE CARE",
              description: "Trung tâm chăm sóc sức khỏe & sắc đẹp",
              slogan: "Cùng hợp sức Hội viên đem lại lợi ích thiết thực cho sức khỏe cộng đồng",
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Footer />
        <FloatingButtons />
        <Analytics />
      </body>
    </html>
  )
}
