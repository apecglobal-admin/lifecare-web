"use client"

import Link from "next/link"
import { useMemo } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { PackageCard } from "./package-card"
import { serviceData } from "@/data/serviceData"

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

export function Packages() {
  const packages = useMemo<ServicePackage[]>(() => {
    const activePackages = serviceData.filter(
      (item) => item.status === "active" && item.category.includes("Gói") && item.name,
    )
    const featuredPackages = activePackages.filter((item) => item.featured === "true")

    return featuredPackages.length >= 3 ? featuredPackages : activePackages
  }, [])

  if (packages.length === 0) {
    return (
      <section id="packages" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-muted-foreground">Hiện chưa có gói dịch vụ nào.</p>
          </div>
        </div>
      </section>
    )
  }

  const displayedPackages = packages.slice(0, 3)

  return (
    <section id="packages" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Gói dịch vụ ưu đãi
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tiết kiệm hơn với các gói dịch vụ đặc biệt dành cho hội viên Life Care
            </p>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedPackages.map((pkg) => (
              <PackageCard key={pkg.id} package={pkg} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="rounded-full group bg-transparent">
              <Link href="/goi-dich-vu">
                Xem thêm gói dịch vụ
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
