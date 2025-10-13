import { Card } from "@/components/ui/card"
import { Target, Briefcase, Shield } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main content */}
          <div className="space-y-12">
            {/* Overview */}
            <Card className="p-8 md:p-12 bg-white shadow-lg">
              <h3 className="font-playfair text-2xl md:text-3xl font-bold text-foreground mb-6">Tổng quan Life Care</h3>
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Câu Lạc Bộ Bảo Vệ Sức Khỏe Cộng Đồng LIFE CARE là một tổ chức phi lợi nhuận, hoạt động với sứ mệnh cao
                  cả: phục vụ sức khỏe cộng đồng và an sinh xã hội bằng phương pháp Đông – Tây y kết hợp.
                </p>
                <p>
                  Chúng tôi tin rằng sức khỏe là tài sản quý giá nhất của mỗi con người. Với tôn chỉ "Kết nối – Chia sẻ
                  – Hợp sức – Đồng hành – Phát triển", Life Care mang đến không gian chăm sóc toàn diện cho sức khỏe thể
                  chất và tinh thần của cộng đồng.
                </p>
              </div>
            </Card>

            {/* Key sections grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-8 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-foreground">Vai trò – Nhiệm vụ</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Tổ chức các hoạt động chăm sóc sức khỏe cộng đồng</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Tư vấn và hỗ trợ phương pháp điều trị Đông – Tây y kết hợp</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Xây dựng mạng lưới hội viên quan tâm đến sức khỏe</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Tổ chức các buổi chia sẻ kiến thức về chăm sóc sức khỏe</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 bg-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-foreground">Mô hình hoạt động</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Trung tâm chăm sóc sức khỏe với đội ngũ chuyên gia giàu kinh nghiệm</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Dịch vụ massage trị liệu, chăm sóc cơ thể và sắc đẹp</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Gói dịch vụ ưu đãi dành cho hội viên</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Không gian thư giãn, yên tĩnh, thân thiện với mọi lứa tuổi</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 bg-white shadow-lg hover:shadow-xl transition-shadow md:col-span-2">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-foreground">Quyền hạn của Câu lạc bộ</h3>
                </div>
                <ul className="grid md:grid-cols-2 gap-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Tổ chức các hoạt động chăm sóc sức khỏe theo quy định pháp luật</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Hợp tác với các cơ sở y tế, chuyên gia trong và ngoài nước</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Phát triển các chương trình chăm sóc sức khỏe cộng đồng</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Tổ chức đào tạo, nâng cao nhận thức về sức khỏe cho hội viên</span>
                  </li>
                </ul>
              </Card>
            </div>

            {/* Mission statement */}
            <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <div className="text-center max-w-3xl mx-auto">
                <h3 className="font-playfair text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Mục tiêu của chúng tôi
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Phục vụ sức khỏe cộng đồng và an sinh xã hội bằng phương pháp Đông – Tây y kết hợp, mang lại lợi ích
                  thiết thực cho sức khỏe của mọi người trong cộng đồng.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
