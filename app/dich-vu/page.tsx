"use client"

import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { ServiceCard } from "@/components/service-card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { serviceData } from "@/data/serviceData"
import { CTASection } from "@/components/cta-section"

interface Service {
  id: string
  name: string
  category: string
  duration: string
  price: string
  branch: string
  floor: string
  promotion: string
  description: string
  featured: string
  status: string
}

const ITEMS_PER_PAGE = 12

export default function ServicesPage() {
  const allServices = useMemo<Service[]>(() => {
    return serviceData.filter((service) => service.status === "active" && service.name && !service.category.includes("Gói"))
  }, [])
  const [selectedCategory, setSelectedCategory] = useState<string>("Tất cả")
  const [currentPage, setCurrentPage] = useState(1)

  const categories = useMemo<string[]>(() => {
    const uniqueCategories = Array.from(new Set(allServices.map((service) => service.category))).filter(Boolean)
    return ["Tất cả", ...uniqueCategories]
  }, [allServices])

  const filteredServices = useMemo(() => {
    return selectedCategory === "Tất cả"
      ? allServices
      : allServices.filter((service) => service.category === selectedCategory)
  }, [allServices, selectedCategory])

  const totalPages = Math.ceil(filteredServices.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentServices = filteredServices.slice(startIndex, endIndex)

  const goToPage = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header */}
      <div className="health-gradient py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Quay lại trang chủ
            </Link>
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-foreground mb-4">
              Danh sách dịch vụ
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Khám phá toàn bộ các dịch vụ chăm sóc sức khỏe và sắc đẹp chuyên nghiệp tại Life Care
            </p>
            <div className="w-24 h-1 bg-primary rounded-full mt-6" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Category filter */}
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Results count */}
          <div className="mb-6">
            <p className="text-sm text-muted-foreground">
              Hiển thị {startIndex + 1}-{Math.min(endIndex, filteredServices.length)} trong tổng số{" "}
              {filteredServices.length} dịch vụ
            </p>
          </div>

          {/* Services grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {currentServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {/* No results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Không tìm thấy dịch vụ nào trong danh mục này.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="rounded-full"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  if (page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1)) {
                    return (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        size="icon"
                        onClick={() => goToPage(page)}
                        className="rounded-full w-10 h-10"
                      >
                        {page}
                      </Button>
                    )
                  } else if (page === currentPage - 2 || page === currentPage + 2) {
                    return (
                      <span key={page} className="flex items-center px-2">
                        ...
                      </span>
                    )
                  }
                  return null
                })}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="rounded-full"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <CTASection />
    </div>
  )
}
