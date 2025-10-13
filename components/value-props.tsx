import { Shield, Heart, Sparkles, Users } from "lucide-react"

export function ValueProps() {
  const values = [
    {
      icon: Shield,
      title: "Chuyên nghiệp",
      description: "Đội ngũ chuyên gia giàu kinh nghiệm, được đào tạo bài bản",
    },
    {
      icon: Heart,
      title: "Tận tâm",
      description: "Chăm sóc chu đáo, lắng nghe và thấu hiểu nhu cầu của bạn",
    },
    {
      icon: Sparkles,
      title: "Ưu đãi hấp dẫn",
      description: "Combo tiết kiệm, khuyến mãi đặc biệt dành cho hội viên",
    },
    {
      icon: Users,
      title: "Cộng đồng",
      description: "Kết nối hội viên, chia sẻ kinh nghiệm chăm sóc sức khỏe",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tại sao chọn Life Care?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Chúng tôi cam kết mang đến trải nghiệm chăm sóc sức khỏe tốt nhất cho bạn
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}