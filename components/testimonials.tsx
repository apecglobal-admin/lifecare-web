import { Star } from "lucide-react"
import { Card } from "@/components/ui/card"

export function Testimonials() {
  const testimonials = [
    {
      name: "Chị Minh Anh",
      role: "Hội viên Life Care",
      content:
        "Tôi đã sử dụng combo 12 lần massage và cảm thấy rất hài lòng. Đội ngũ nhân viên chuyên nghiệp, tận tâm. Giá cả hợp lý, không gian thoải mái.",
      rating: 5,
      avatar: "MA",
    },
    {
      name: "Anh Tuấn Kiệt",
      role: "Khách hàng thân thiết",
      content:
        "Dịch vụ trị liệu rất tốt, sau vài buổi tôi cảm thấy cơ thể nhẹ nhàng hơn nhiều. Các combo ưu đãi giúp tiết kiệm chi phí đáng kể.",
      rating: 5,
      avatar: "TK",
    },
    {
      name: "Chị Hương Giang",
      role: "Hội viên mới",
      content:
        "Lần đầu đến Life Care, tôi được tư vấn rất kỹ càng. Không gian sạch sẽ, dịch vụ chu đáo. Chắc chắn sẽ quay lại và giới thiệu cho bạn bè.",
      rating: 5,
      avatar: "HG",
    },
  ]

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
              Khách hàng nói gì về chúng tôi
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hàng trăm khách hàng đã tin tưởng và hài lòng với dịch vụ của Life Care
            </p>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                {/* Rating stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-primary">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}