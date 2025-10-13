import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, DollarSign, MapPin, Building2 } from "lucide-react"
import Image from "next/image"
import { getServiceImage } from "@/lib/service-images"

interface ServiceCardProps {
  service: {
    name: string
    description: string
    price: string
    duration: string
    category: string
    branch?: string
    floor?: string
    promotion?: string
  }
}

export function ServiceCard({ service }: ServiceCardProps) {
  const parsePriceValue = (price: string) => {
    const numeric = Number.parseInt(price.replace(/\D/g, ""))
    return Number.isNaN(numeric) ? 0 : numeric
  }

  const formatCurrency = (value: number) => value.toLocaleString("vi-VN")

  const formatPrice = (price: string) => formatCurrency(parsePriceValue(price))

  const promotionText = service.promotion?.trim()
  const hasStandardPromotion = !!promotionText && promotionText.toLowerCase() === "có"

  const comboPattern = /combo\s*(\d+)\s*[-–]\s*(\d+)\s*[-–]\s*(\d+)/i
  const comboPromotionMatch = promotionText ? promotionText.match(comboPattern) : null
  const comboPromotionValues = comboPromotionMatch
    ? [comboPromotionMatch[1], comboPromotionMatch[2], comboPromotionMatch[3]].map((value) => Number.parseInt(value, 10))
    : null

  const basePromotionItems =
    promotionText && !hasStandardPromotion
      ? promotionText
          .split(/(?:\s+-\s+|\n|;|\|)/)
          .map((item) => item.trim())
          .filter((item) => item.length > 0)
      : []

  const filteredPromotionItems = comboPromotionMatch
    ? basePromotionItems.filter((item) => !comboPattern.test(item))
    : basePromotionItems

  const basePriceValue = parsePriceValue(service.price)

  // Discount prices for combo promotions
  const discountPrices: Record<number, number> = { 4: 175000, 8: 150000, 12: 125000 }

  const comboPricingItems =
    comboPromotionValues && basePriceValue > 0
      ? comboPromotionValues.map((count) => {
          const discountedPrice = discountPrices[count]
          const pricePerSession = discountedPrice || basePriceValue
          const totalPrice = pricePerSession * count
          const label = discountedPrice
            ? `Combo ${count} lần (${formatCurrency(pricePerSession)}/lần)`
            : `Combo ${count} lần`
          return {
            label,
            priceText: `${formatCurrency(totalPrice)} VNĐ`,
          }
        })
      : []

  const hasPromotionDetails = filteredPromotionItems.length > 0 || comboPricingItems.length > 0
  const promotionBadgeLabel = hasPromotionDetails ? "Đặc biệt" : hasStandardPromotion ? "Chuẩn" : "Thông tin"

  return (
    <Card className="overflow-hidden card-hover bg-white">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={getServiceImage(service.name, service.category) || "/placeholder.svg"}
          alt={service.name}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="rounded-full bg-white/90 backdrop-blur-sm">
            {service.category}
          </Badge>
        </div>
        {promotionText && (
          <div className="absolute top-4 right-4">
            <Badge className="rounded-full bg-red-500 text-white">Khuyến mãi</Badge>
          </div>
        )}
      </div>

      <div className="p-4 space-y-5">
        <h3 className="font-playfair text-xl font-bold text-foreground text-balance">{service.name}</h3>

        {service.description && (
          <p className="text-sm text-muted-foreground">{service.description}</p>
        )}

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <DollarSign className="h-4 w-4 text-primary" />
            <span className="font-semibold text-primary">{formatPrice(service.price)} VNĐ</span>
          </div>
          {service.duration && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{service.duration}</span>
            </div>
          )}
          {service.branch && service.branch !== "Both" && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{service.branch === "Teco" ? "Chi nhánh Teco" : "Chi nhánh 81-83"}</span>
            </div>
          )}
          {service.floor && service.floor !== "" && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Building2 className="h-4 w-4" />
              <span>{service.floor}</span>
            </div>
          )}
        </div>

        <div className="rounded-lg border border-dashed border-primary/30 bg-primary/5 p-3 text-sm">
          <div className="flex items-center justify-between text-primary">
            <span className="font-semibold">Ưu đãi hấp dẫn</span>
            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
              {promotionBadgeLabel}
            </span>
          </div>

          {hasPromotionDetails ? (
            <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
              {comboPricingItems.map((item, index) => (
                <li key={`combo-${index}`}>
                  • {item.label}: <span className="font-medium text-primary">{item.priceText}</span>
                </li>
              ))}
              {filteredPromotionItems.map((item, index) => (
                <li key={`detail-${index}`}>• {item}</li>
              ))}
            </ul>
          ) : hasStandardPromotion ? (
            <p className="mt-2 text-xs text-muted-foreground">
              Ưu đãi đang áp dụng theo chương trình chuẩn của Life Care.
            </p>
          ) : (
            <p className="mt-2 text-xs text-muted-foreground">
              Hiện chưa có ưu đãi đặc biệt. Vui lòng liên hệ để biết thêm chi tiết.
            </p>
          )}


        </div>

        <Button asChild className="w-full btn-primary" size="lg">
          <a href="/#contact">Đặt lịch ngay</a>
        </Button>
      </div>
    </Card>
  )
}
