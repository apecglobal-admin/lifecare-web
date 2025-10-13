"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, ArrowUp } from "lucide-react"

export function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* Call button */}
      <Button size="icon" className="h-14 w-14 rounded-full shadow-lg hover:scale-110 transition-transform" asChild>
        <a href="tel:" aria-label="Gọi điện">
          <Phone className="h-6 w-6" />
        </a>
      </Button>

      {/* Zalo button */}
      <Button
        size="icon"
        variant="secondary"
        className="h-14 w-14 rounded-full shadow-lg hover:scale-110 transition-transform"
        asChild
      >
        <a href="https://zalo.me/" target="_blank" rel="noopener noreferrer" aria-label="Chat Zalo">
          <MessageCircle className="h-6 w-6" />
        </a>
      </Button>

      {/* Scroll to top */}
      {showScrollTop && (
        <Button
          size="icon"
          variant="outline"
          className="h-14 w-14 rounded-full shadow-lg hover:scale-110 transition-transform animate-fade-in bg-transparent"
          onClick={scrollToTop}
          aria-label="Lên đầu trang"
        >
          <ArrowUp className="h-6 w-6" />
        </Button>
      )}
    </div>
  )
}
