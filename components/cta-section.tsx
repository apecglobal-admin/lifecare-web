import { Button } from "@/components/ui/button"
import { Phone, Calendar } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 health-gradient opacity-90" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-foreground mb-6">
            Sẵn sàng chăm sóc sức khỏe của bạn?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Đặt lịch ngay hôm nay để nhận tư vấn miễn phí và trải nghiệm dịch vụ chăm sóc sức khỏe chuyên nghiệp
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-primary text-lg px-8 py-6 shadow-lg hover:shadow-xl">
              <a href="/lien-he">
                <Calendar className="mr-2 h-5 w-5" />
                Đặt lịch ngay
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full text-lg px-8 py-6 bg-white hover:bg-white/90 border-2"
            >
              <a href="tel:19003165">
                <Phone className="mr-2 h-5 w-5" />
                Gọi 1900.3165
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>Tư vấn miễn phí</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>Đội ngũ chuyên nghiệp</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span>Ưu đãi hội viên</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}