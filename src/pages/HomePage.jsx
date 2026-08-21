import HeroSection from '../sections/HeroSection'
import BrandStory from '../sections/BrandStory'
import ProductShowcase from '../sections/ProductShowcase'
import QualitySection from '../sections/QualitySection'
import TestimonialsSection from '../sections/TestimonialsSection'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <BrandStory />
      <ProductShowcase />
      <QualitySection />
      <TestimonialsSection />
    </main>
  )
}
