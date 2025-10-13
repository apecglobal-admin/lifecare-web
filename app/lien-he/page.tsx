import type { Metadata } from "next"
import { Contact } from "@/components/contact"
import { CTASection } from "@/components/cta-section"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Liên hệ - Life Care",
  description: "Liên hệ với Life Care để được tư vấn và đặt lịch hẹn. Hotline: 1900.3165",
  alternates: {
    canonical: "/lien-he",
  },
  openGraph: {
    title: "Liên hệ Life Care",
    description: "Liên hệ với Life Care để được tư vấn và đặt lịch hẹn. Hotline: 1900.3165",
    url: "https://lifecare.apecglobal.vn/lien-he",
    siteName: "Life Care",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-life-care-IkBSc0AM0Tbtvf7sl5RzwzrsTzYZiP.png",
        width: 1200,
        height: 630,
        alt: "Life Care - Liên hệ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Liên hệ - Life Care",
    description: "Liên hệ với Life Care để được tư vấn và đặt lịch hẹn. Hotline: 1900.3165",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-life-care-IkBSc0AM0Tbtvf7sl5RzwzrsTzYZiP.png",
    ],
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="health-gradient py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-gray-800 mb-6 text-sm">
              <Link href="/" className="hover:text-white transition-colors">
                Trang chủ
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-gray-800 font-medium">Liên hệ</span>
            </div>

            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-gray-800 mb-6 text-balance">
              Liên hệ với chúng tôi
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Hãy liên hệ ngay để được tư vấn miễn phí!
            </p>
            <div className="w-24 h-1 bg-black mx-auto rounded-full mt-6" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* CTA Section */}
      <CTASection />
    </main>
  )
}