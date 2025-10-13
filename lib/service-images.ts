export function getServiceImage(serviceName: string, category?: string): string {
  const name = serviceName.toLowerCase()
  const cat = category?.toLowerCase() || ""

  // Massage services
  if (name.includes("massage") || name.includes("mát xa")) {
    return "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80"
  }

  // Foot spa services
  if (name.includes("foot") || name.includes("chân")) {
    return "https://images.unsplash.com/photo-1675159364615-38e1f6b62282?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }

  // Facial/beauty services
  if (name.includes("facial") || name.includes("mặt") || name.includes("beauty")) {
    return "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80"
  }

  // Body treatments
  if (name.includes("body") || name.includes("toàn thân")) {
    return "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80"
  }

  // Aromatherapy
  if (name.includes("aroma") || name.includes("thơm")) {
    return "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80"
  }

  // Hot stone
  if (name.includes("stone") || name.includes("đá nóng")) {
    return "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80"
  }

  // Waxing/hair removal
  if (name.includes("wax") || name.includes("tẩy lông")) {
    return "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=800&q=80"
  }

  // Manicure/pedicure
  if (name.includes("nail") || name.includes("móng")) {
    return "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80"
  }

  // VIP/luxury services
  if (name.includes("vip") || name.includes("luxury") || name.includes("cao cấp")) {
    return "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&q=80"
  }

  // Default spa image
  return "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80"
}

export function getPackageImage(packageName: string): string {
  const name = packageName.toLowerCase()

  // VIP/Premium packages
  if (name.includes("vip") || name.includes("premium") || name.includes("cao cấp")) {
    return "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&q=80"
  }

  // Combo/multiple services
  if (name.includes("combo") || name.includes("gói")) {
    return "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80"
  }

  // Relaxation packages
  if (name.includes("relax") || name.includes("thư giãn")) {
    return "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80"
  }

  // Beauty packages
  if (name.includes("beauty") || name.includes("làm đẹp")) {
    return "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80"
  }

  // Default package image
  return "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80"
}
