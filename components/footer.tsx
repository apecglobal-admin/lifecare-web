import Image from "next/image"
import Link from "next/link"
import { Facebook, MessageCircle, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-life-care-IkBSc0AM0Tbtvf7sl5RzwzrsTzYZiP.png"
                  alt="Life Care Logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto brightness-0 invert"
                />
                <div>
                  <div className="font-playfair text-lg font-bold">Life Care</div>
                  <div className="text-xs opacity-80">Chăm sóc sức khỏe & sắc đẹp</div>
                </div>
              </div>
              <p className="text-sm opacity-80 leading-relaxed">
                Cùng hợp sức Hội viên đem lại lợi ích thiết thực cho sức khỏe cộng đồng.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="font-semibold mb-4">Liên kết nhanh</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="opacity-80 hover:opacity-100 transition-opacity">
                    Trang chủ
                  </Link>
                </li>
                <li>
                  <Link href="/dich-vu" className="opacity-80 hover:opacity-100 transition-opacity">
                    Dịch vụ
                  </Link>
                </li>
                <li>
                  <Link href="/goi-dich-vu" className="opacity-80 hover:opacity-100 transition-opacity">
                    Gói dịch vụ
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="opacity-80 hover:opacity-100 transition-opacity">
                    Giới thiệu
                  </Link>
                </li>
                <li>
                  <Link href="/lien-he" className="opacity-80 hover:opacity-100 transition-opacity">
                    Liên hệ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4">Liên hệ</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2 opacity-80">
                  <Phone className="h-4 w-4" />
                  <span>1900.3165</span>
                </li>
                <li className="flex items-center gap-2 opacity-80">
                  <Mail className="h-4 w-4" />
                  <span>lifecare@apecglobal.vn</span>
                </li>
              </ul>
              <div className="flex gap-3 mt-4">
                <a
                  href="#"
                  className="p-2 bg-background/10 rounded-full hover:bg-background/20 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-background/10 rounded-full hover:bg-background/20 transition-colors"
                  aria-label="Zalo"
                >
                  <MessageCircle className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-background/20 text-center text-sm opacity-80">
            <p>© 2025 Life Care. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
