"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Card } from "@/components/ui/card"

const faqs = [
  {
    question: "Life Care cung cấp những dịch vụ gì?",
    answer: "Life Care cung cấp đa dạng các dịch vụ chăm sóc sức khỏe và sắc đẹp bao gồm: khám sức khỏe tổng quát, xét nghiệm, chăm sóc da, massage trị liệu, tư vấn dinh dưỡng và nhiều dịch vụ khác. Chúng tôi có các gói combo ưu đãi phù hợp với nhu cầu của từng khách hàng."
  },
  {
    question: "Làm thế nào để đặt lịch hẹn?",
    answer: "Bạn có thể đặt lịch hẹn qua 3 cách: (1) Gọi hotline 1900.3165, (2) Điền form đặt lịch trên website tại trang Liên hệ, hoặc (3) Nhắn tin qua Facebook/Zalo của chúng tôi. Đội ngũ tư vấn sẽ liên hệ xác nhận lịch hẹn trong vòng 24h."
  },
  {
    question: "Chi phí dịch vụ như thế nào?",
    answer: "Chi phí dịch vụ phụ thuộc vào loại dịch vụ bạn lựa chọn. Chúng tôi có nhiều gói dịch vụ với mức giá linh hoạt từ vài trăm nghìn đến vài triệu đồng. Đặc biệt, các gói combo sẽ được giảm giá đáng kể so với đăng ký từng dịch vụ riêng lẻ. Vui lòng xem chi tiết tại mục Dịch vụ và Gói dịch vụ."
  },
  {
    question: "Có chính sách hoàn tiền không?",
    answer: "Có, chúng tôi có chính sách hoàn tiền trong trường hợp bạn hủy lịch hẹn trước 24h. Đối với các gói dịch vụ đã sử dụng một phần, chúng tôi sẽ hoàn tiền theo tỷ lệ dịch vụ chưa sử dụng. Vui lòng liên hệ bộ phận chăm sóc khách hàng để biết thêm chi tiết."
  },
  {
    question: "Tôi có thể mang theo người thân không?",
    answer: "Hoàn toàn được! Chúng tôi khuyến khích bạn đến cùng người thân để cùng trải nghiệm dịch vụ. Chúng tôi có các gói gia đình và gói nhóm với mức giá ưu đãi đặc biệt. Không gian của chúng tôi được thiết kế thoải mái để phục vụ nhiều khách hàng cùng lúc."
  },
  {
    question: "Đội ngũ nhân viên có chuyên môn không?",
    answer: "Tất cả nhân viên của Life Care đều được đào tạo chuyên nghiệp và có chứng chỉ hành nghề. Đội ngũ bác sĩ, điều dưỡng và chuyên viên của chúng tôi có nhiều năm kinh nghiệm trong lĩnh vực chăm sóc sức khỏe và làm đẹp. Chúng tôi cam kết mang đến dịch vụ chất lượng cao nhất."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Câu hỏi thường gặp
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Giải đáp những thắc mắc phổ biến về dịch vụ của chúng tôi
            </p>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          {/* FAQ items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left p-6 flex items-start justify-between gap-4 group"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                      {faq.question}
                    </h3>
                    {openIndex === index && (
                      <p className="mt-3 text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Không tìm thấy câu trả lời bạn cần?
            </p>
            <a
              href="/lien-he"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              Liên hệ với chúng tôi →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}