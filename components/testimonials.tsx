"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

const testimonialImages = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { t } = useLanguage()

  const testimonials = t.testimonialsData.map((item, index) => ({
    ...item,
    id: index + 1,
    image: testimonialImages[index],
  }))

  const next = () => {
    setCurrentIndex((current) => (current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm tracking-widest uppercase text-primary-foreground/60 mb-2">
            {t.testimonials.subtitle}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl">
            {t.testimonials.title}
          </h2>
        </div>

        <div className="relative min-h-[320px] flex flex-col">
          <div className="flex flex-col items-center text-center flex-1">
            <div className="mb-6 text-primary-foreground/30">
              <Quote className="h-10 w-10" />
            </div>
            
            <blockquote className="text-lg leading-relaxed text-pretty max-w-3xl mb-8 min-h-[120px] flex items-center">
              <span>&ldquo;{currentTestimonial.quote}&rdquo;</span>
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden">
                <Image
                  src={currentTestimonial.image}
                  alt={currentTestimonial.author}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div className="text-left">
                <p className="font-medium text-primary-foreground">
                  {currentTestimonial.author}
                </p>
                <p className="text-sm text-primary-foreground/60">
                  {currentTestimonial.role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex 
                      ? "bg-primary-foreground" 
                      : "bg-primary-foreground/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
