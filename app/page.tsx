import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { FeaturedWork } from "@/components/FeaturedWork"
import { PhotographyGallery } from "@/components/PhotographyGallery"
import { DesignPortfolio } from "@/components/DesignPortfolio"
import { About } from "@/components/About"
import { Testimonials } from "@/components/Testimonials"
import { ContactBooking } from "@/components/ContactBooking"
import { Footer } from "@/components/Footer"

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
