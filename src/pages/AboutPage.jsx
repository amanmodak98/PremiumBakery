import BrandStory from '../sections/BrandStory'
import QualitySection from '../sections/QualitySection'

export default function AboutPage() {
  return (
    <main>
      <section className="pt-24 pb-12 bg-amber-950 text-center">
        <h1 className="text-5xl font-bold text-amber-200 mb-4">About PremiumBakery</h1>
        <p className="text-amber-300 text-lg max-w-2xl mx-auto">
          Our story, our craft, and our commitment to excellence
        </p>
      </section>
      <BrandStory />
      <QualitySection />
    </main>
  )
}
