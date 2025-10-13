"use client"

import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { PackageCard } from "@/components/package-card"
import Link from "next/link"
import { serviceData } from "@/data/serviceData"
import { CTASection } from "@/components/cta-section"

interface ServicePackage {
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

const PACKAGES_PER_PAGE = 9

export default function PackagesPage() {
  const packages = useMemo<ServicePackage[]>(() => {
    return serviceData.filter(
      (item) => item.status === "active" && item.category.includes("Gói") && item.name,
    )
  }, [])
  const [currentPage, setCurrentPage] = useState(1)

  // Pagination logic
  const totalPages = Math.ceil(packages.length / PACKAGES_PER_PAGE)
  const startIndex = (currentPage - 1) * PACKAGES_PER_PAGE
  const endIndex = startIndex + PACKAGES_PER_PAGE
  const currentPackages = packages.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Generate page numbers with ellipsis
  const getPageNumbers = () => {
    const pages = []
    const showEllipsisStart = currentPage > 3
    const showEllipsisEnd = currentPage < totalPages - 2

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      pages.push(1)
      if (showEllipsisStart) pages.push("...")
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
        pages.push(i)
      }
      if (showEllipsisEnd) pages.push("...")
      pages.push(totalPages)
    }

    return pages
  }



  return (
    <div className="min-h-screen pt-20 pb-24 bg-background">
      {/* Header */}
      <div className="health-gradient py-20 mb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Quay lại trang chủ
            </Link>
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-foreground mb-4 text-balance">
              Gói dịch vụ ưu đãi
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Tiết kiệm hơn với các gói dịch vụ đặc biệt dành cho hội viên Life Care
            </p>
            <div className="w-24 h-1 bg-primary rounded-full mt-6" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">

          {/* Packages count */}
          <div className="mb-8">
            <p className="text-muted-foreground">
              Hiển thị {startIndex + 1}-{Math.min(endIndex, packages.length)} trong tổng số {packages.length} gói dịch
              vụ
            </p>
          </div>

          {/* Packages grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currentPackages.map((pkg) => (
              <PackageCard key={pkg.id} package={pkg} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="rounded-full"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              {getPageNumbers().map((page, index) =>
                page === "..." ? (
                  <span key={`ellipsis-${index}`} className="px-2">
                    ...
                  </span>
                ) : (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="icon"
                    onClick={() => handlePageChange(page as number)}
                    className="rounded-full"
                  >
                    {page}
                  </Button>
                ),
              )}

              <Button
                variant="outline"
                size="icon"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="rounded-full"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}

          {packages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Hiện chưa có gói dịch vụ nào.</p>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <CTASection />
    </div>
  )
}
