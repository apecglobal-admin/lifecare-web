import { Calendar, MessageSquare, Sparkles, HeartHandshake } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: Calendar,
      title: "Đặt lịch hẹn",
      description: "Chọn dịch vụ và thời gian phù hợp với bạn qua hotline hoặc form online",
    },
    {
      icon: MessageSquare,
      title: "Tư vấn chi tiết",
      description: "Chuyên gia sẽ tư vấn và đề xuất liệu trình phù hợp với nhu cầu của bạn",
    },
    {
      icon: Sparkles,
      title: "Trải nghiệm dịch vụ",
      description: "Thư giãn và tận hưởng dịch vụ chăm sóc chuyên nghiệp trong không gian thoải mái",
    },
    {
      icon: HeartHandshake,
      title: "Theo dõi & chăm sóc",
      description: "Nhận tư vấn sau dịch vụ và ưu đãi đặc biệt cho lần sử dụng tiếp theo",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
              Quy trình sử dụng dịch vụ
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Chỉ với 4 bước đơn giản, bạn đã có thể trải nghiệm dịch vụ chăm sóc sức khỏe chuyên nghiệp
            </p>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg shadow-lg z-10">
                  {index + 1}
                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl p-6 pt-8 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                    <step.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>

                {/* Connector line (hidden on mobile and last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/3 -right-4 w-8 h-0.5 bg-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}