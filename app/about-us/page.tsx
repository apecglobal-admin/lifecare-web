import { About } from "@/components/about"
import { CTASection } from "@/components/cta-section"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function AboutUsPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Header */}
      <div className="health-gradient py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Quay lại trang chủ
            </Link>
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-foreground mb-4">
              Giới thiệu Life Care
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Câu Lạc Bộ Bảo Vệ Sức Khỏe Cộng Đồng - Kết nối, Chia sẻ, Hợp sức
            </p>
            <div className="w-24 h-1 bg-primary rounded-full mt-6" />
          </div>
        </div>
      </div>
      
      <About />
      
      {/* CTA Section */}
      <CTASection />
    </main>
  )
}
