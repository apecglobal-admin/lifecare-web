import { Hero } from "@/components/hero"
import { ValueProps } from "@/components/value-props"
import { Services } from "@/components/services"
import { Packages } from "@/components/packages"
import { HowItWorks } from "@/components/how-it-works"
import { Testimonials } from "@/components/testimonials"
import { Stats } from "@/components/stats"
import { FAQ } from "@/components/faq"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ValueProps />
      <Services />
      <Packages />
      <HowItWorks />
      <Testimonials />
      <Stats />
      <FAQ />
      <CTASection />
    </main>
  )
}
