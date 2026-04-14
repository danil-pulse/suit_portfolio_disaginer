"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

const testimonialImages = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const { t } = useLanguage()
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>()

  const testimonials = t.testimonialsData.map((item, index) => ({
    ...item,
    id: index + 1,
    image: testimonialImages[index],
  }))

  const next = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((current) => (current + 1) % testimonials.length)
  }

  const prev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500)
    return () => clearTimeout(timer)
  }, [currentIndex])

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      next()
    }, 6000)
    return () => clearInterval(interval)
  }, [currentIndex])

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section
      ref={sectionRef}
      className="testimonial-section"
    >
      <div className="mx-auto max-w-4xl container-padding">
        <div
          className={cn(
            "text-center mb-8 md:mb-12 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <p className="text-xs md:text-sm tracking-widest uppercase text-primary-foreground/60 mb-2">
            {t.testimonials.subtitle}
          </p>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl">
            {t.testimonials.title}
          </h2>
        </div>

        <div
          className={cn(
            "relative min-h-[280px] md:min-h-[320px] flex flex-col transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="flex flex-col items-center text-center flex-1">
            <div className="mb-4 md:mb-6 text-primary-foreground/30">
              <Quote className="h-8 w-8 md:h-10 md:w-10" />
            </div>
            
            <blockquote
              className={cn(
                "testimonial-quote mb-6 md:mb-8 transition-all duration-500",
                isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
              )}
            >
              <span>&ldquo;{currentTestimonial.quote}&rdquo;</span>
            </blockquote>

            <div
              className={cn(
                "testimonial-author transition-all duration-500",
                isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              )}
            >
              <div className="testimonial-avatar">
                <Image
                  src={currentTestimonial.image}
                  alt={currentTestimonial.author}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div className="text-left">
                <p className="testimonial-name text-sm md:text-base">
                  {currentTestimonial.author}
                </p>
                <p className="testimonial-role text-xs md:text-sm">
                  {currentTestimonial.role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="testimonial-nav">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground h-9 w-9 md:h-10 md:w-10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
            </Button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true)
                      setCurrentIndex(index)
                    }
                  }}
                  className={cn(
                    "testimonial-dot transition-all duration-300",
                    index === currentIndex ? "active w-4" : "w-2"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground h-9 w-9 md:h-10 md:w-10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
