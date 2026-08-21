import ProductShowcase from '../sections/ProductShowcase'

export default function MenuPage() {
  return (
    <main>
      <section className="pt-24 pb-12 bg-amber-950 text-center">
        <h1 className="text-5xl font-bold text-amber-200 mb-4">Our Menu</h1>
        <p className="text-amber-300 text-lg max-w-2xl mx-auto">
          Handcrafted with love — explore our full selection of premium baked goods
        </p>
      </section>
      <ProductShowcase />
    </main>
  )
}
