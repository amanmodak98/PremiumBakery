import ContactSection from '../sections/ContactSection'

export default function ContactPage() {
  return (
    <main>
      <section className="pt-24 pb-12 bg-amber-950 text-center">
        <h1 className="text-5xl font-bold text-amber-200 mb-4">Contact Us</h1>
        <p className="text-amber-300 text-lg max-w-2xl mx-auto">
          We'd love to hear from you — reach out for orders, events, and more
        </p>
      </section>
      <ContactSection />
    </main>
  )
}
