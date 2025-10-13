"use client"

import { useMemo } from "react"
import { Button } from "@/components/ui/button"
import { ServiceCard } from "@/components/service-card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { serviceData } from "@/data/serviceData"

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

export function Services() {
  const services = useMemo<Service[]>(() => {
    const activeServices = serviceData.filter((service) => service.status === "active" && service.name)
    const featuredServices = activeServices.filter((service) => service.featured === "true")

    return featuredServices.length >= 3 ? featuredServices : activeServices
  }, [])

  const displayedServices = services.slice(0, 3)

  if (services.length === 0) {
    return (
      <section id="services" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-muted-foreground">Chưa có dịch vụ nào</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Dịch vụ của chúng tôi
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Khám phá các dịch vụ chăm sóc sức khỏe và sắc đẹp chuyên nghiệp tại Life Care
            </p>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {displayedServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="rounded-full group">
              <Link href="/dich-vu">
                Xem thêm dịch vụ
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
