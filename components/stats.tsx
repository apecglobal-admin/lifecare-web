import { Users, Award, Heart, Star } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Khách hàng tin tưởng",
    description: "Đã sử dụng dịch vụ"
  },
  {
    icon: Award,
    value: "8+",
    label: "Năm kinh nghiệm",
    description: "Trong lĩnh vực chăm sóc sức khỏe"
  },
  {
    icon: Heart,
    value: "50+",
    label: "Dịch vụ đa dạng",
    description: "Đáp ứng mọi nhu cầu"
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Đánh giá trung bình",
    description: "Từ khách hàng thực tế"
  }
]

export function Stats() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Con số ấn tượng
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Những thành tựu chúng tôi tự hào đạt được cùng sự tin tưởng của khách hàng
            </p>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          {/* Stats grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={index}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="font-semibold text-lg text-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}