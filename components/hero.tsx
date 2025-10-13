import { Button } from "@/components/ui/button"
import { Sparkles, Heart, Users } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden health-gradient">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-life-care-IkBSc0AM0Tbtvf7sl5RzwzrsTzYZiP.png"
              alt="Life Care Logo"
              className="h-32 w-auto animate-fade-in"
            />
          </div>

          {/* Main heading */}
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance animate-fade-in-up">
            Câu Lạc Bộ Bảo Vệ Sức Khỏe Cộng Đồng <span className="text-primary">LIFE CARE</span>
          </h1>

          {/* Slogan */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance animate-fade-in-up animation-delay-200">
            "Cùng hợp sức Hội viên đem lại lợi ích thiết thực cho sức khỏe cộng đồng."
          </p>

          {/* Core values */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up animation-delay-400">
            {[
              { icon: Users, text: "Kết nối" },
              { icon: Heart, text: "Chia sẻ" },
              { icon: Sparkles, text: "Hợp sức" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm"
              >
                <item.icon className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
            <Button asChild size="lg" className="btn-primary text-lg px-8">
              <a href="#services">Khám phá dịch vụ</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full text-lg px-8 bg-transparent">
              <a href="/lien-he">Đặt lịch ngay</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
