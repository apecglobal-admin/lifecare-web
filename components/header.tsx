"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Giới thiệu", href: "/about-us" },
    { label: "Dịch vụ", href: "/dich-vu" },
    { label: "Gói dịch vụ", href: "/goi-dich-vu" },
    { label: "Liên hệ", href: "/lien-he" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-life-care-IkBSc0AM0Tbtvf7sl5RzwzrsTzYZiP.png"
              alt="Life Care Logo"
              width={50}
              height={50}
              className="h-12 w-auto"
            />
            <div className="hidden md:block">
              <div className="font-playfair text-xl font-bold text-foreground">Life Care</div>
              <div className="text-xs text-muted-foreground">Chăm sóc sức khỏe & sắc đẹp</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild size="lg" className="rounded-full">
              <a href="/lien-he">Đặt lịch ngay</a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild size="lg" className="rounded-full w-full">
              <a href="/lien-he" onClick={() => setIsMobileMenuOpen(false)}>
                Đặt lịch ngay
              </a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
