"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Facebook, MessageCircle } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Liên hệ & Đặt lịch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hãy để chúng tôi chăm sóc sức khỏe của bạn. Đặt lịch ngay hôm nay!
            </p>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact info */}
            <div className="space-y-6">
              <Card className="p-8 bg-white shadow-lg">
                <h3 className="font-playfair text-2xl font-bold text-foreground mb-6">Thông tin liên hệ</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Địa chỉ</div>
                      <div className="text-muted-foreground">81 - 83 Vành Đai Trong, An Lạc, Tp Hồ Chí Minh</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Hotline</div>
                      <div className="text-muted-foreground">1900.3165</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Email</div>
                      <div className="text-muted-foreground">lifecare@apecglobal.vn</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Giờ làm việc</div>
                      <div className="text-muted-foreground">Thứ 2 - Chủ nhật: 8:00 - 21:00</div>
                    </div>
                  </div>
                </div>

                {/* Social links */}
                <div className="mt-8 pt-6 border-t">
                  <div className="font-semibold text-foreground mb-4">Kết nối với chúng tôi</div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="icon" className="rounded-full bg-transparent" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <Facebook className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full bg-transparent" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Zalo">
                        <MessageCircle className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            {/* Booking form / Map */}
            <div className="space-y-6">
              <Card className="p-8 bg-white shadow-lg">
                <h3 className="font-playfair text-2xl font-bold text-foreground mb-6">Đặt lịch hẹn</h3>
                <p className="text-muted-foreground mb-6">
                  Vui lòng điền thông tin vào form bên dưới để đặt lịch hẹn. Chúng tôi sẽ liên hệ lại với bạn trong thời
                  gian sớm nhất.
                </p>
                <Button asChild size="lg" className="w-full rounded-full">
                  <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer">
                    Mở form đặt lịch
                  </a>
                </Button>
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  Hoặc gọi trực tiếp cho chúng tôi để được tư vấn
                </p>
              </Card>

              {/* Map placeholder */}
              <Card className="p-4 bg-white shadow-lg overflow-hidden">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-12 w-12 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Bản đồ sẽ được cập nhật</p>
                    <p className="text-xs mt-1">Google Maps embed sẽ được thêm vào đây</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
