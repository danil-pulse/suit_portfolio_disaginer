import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturedWork } from "@/components/featured-work"
import { PhotographyGallery } from "@/components/photography-gallery"
import { DesignPortfolio } from "@/components/design-portfolio"
import { About } from "@/components/about"
import { Testimonials } from "@/components/testimonials"
import { ContactBooking } from "@/components/contact-booking"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedWork />
        <PhotographyGallery />
        <DesignPortfolio />
        <About />
        <Testimonials />
        <ContactBooking />
      </main>
      <Footer />
    </>
  )
}
