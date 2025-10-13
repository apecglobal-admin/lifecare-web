import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Package, DollarSign, MapPin, Building2 } from "lucide-react"
import Image from "next/image"
import { getPackageImage } from "@/lib/service-images"

interface PackageCardProps {
  package: {
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

export function PackageCard({ package: pkg }: PackageCardProps) {
  const parsePriceValue = (price: string) => {
    const numeric = Number.parseInt(price.replace(/\D/g, ""))
    return Number.isNaN(numeric) ? 0 : numeric
  }

  const formatCurrency = (value: number) => value.toLocaleString("vi-VN")

  const formatPrice = (price: string) => formatCurrency(parsePriceValue(price))

  const promotionText = pkg.promotion?.trim()
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

  const basePriceValue = parsePriceValue(pkg.price)

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
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={getPackageImage(pkg.name) || "/placeholder.svg"}
          alt={pkg.name}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="mb-2 flex items-center gap-2">
            <Package className="h-5 w-5 text-white" />
            <Badge variant="secondary" className="rounded-full bg-white/90 backdrop-blur-sm">
              {pkg.category}
            </Badge>
          </div>
          <h3 className="font-playfair text-2xl font-bold text-white text-balance drop-shadow-lg">{pkg.name}</h3>
        </div>
        {promotionText && (
          <div className="absolute top-4 right-4">
            <Badge className="rounded-full bg-red-500 text-white">Khuyến mãi</Badge>
          </div>
        )}
      </div>

      <div className="p-4 space-y-5">
        {pkg.description && <p className="text-sm text-muted-foreground">{pkg.description}</p>}

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-primary" />
            <div className="text-3xl font-bold text-primary">{formatPrice(pkg.price)} VNĐ</div>
          </div>
          {pkg.duration && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{pkg.duration}</span>
            </div>
          )}
          {pkg.branch && pkg.branch !== "Both" && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{pkg.branch === "Teco" ? "Chi nhánh Teco" : "Chi nhánh 81-83"}</span>
            </div>
          )}
          {pkg.floor && pkg.floor !== "" && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Building2 className="h-4 w-4" />
              <span>{pkg.floor}</span>
            </div>
          )}
        </div>

        <div className="rounded-lg border border-dashed border-primary/30 bg-primary/5 p-3 text-sm">
          <div className="flex items-center justify-between text-primary">
            <span className="font-semibold">Ưu đãi tiết kiệm</span>
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
          <a href="/#contact">Đặt gói ngay</a>
        </Button>
      </div>
    </Card>
  )
}
