import GallerySection from '../sections/GallerySection'

export default function GalleryPage() {
  return (
    <main>
      <section className="pt-24 pb-12 bg-amber-950 text-center">
        <h1 className="text-5xl font-bold text-amber-200 mb-4">Gallery</h1>
        <p className="text-amber-300 text-lg max-w-2xl mx-auto">
          A glimpse into our artisan bakery — moments of craft and flavor
        </p>
      </section>
      <GallerySection />
    </main>
  )
}
