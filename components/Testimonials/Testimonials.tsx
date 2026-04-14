"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import styles from "./Testimonials.module.css"

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
    <section className={styles.testimonials}>
      <div className={styles.testimonials__container}>
        <div className={styles.testimonials__header}>
          <p className={styles.testimonials__subtitle}>
            {t.testimonials.subtitle}
          </p>
          <h2 className={styles.testimonials__title}>
            {t.testimonials.title}
          </h2>
        </div>

        <div className={styles.testimonials__slider}>
          <div className={styles.testimonials__content}>
            <div className={styles["testimonials__quote-icon"]}>
              <Quote className="h-10 w-10" />
            </div>
            
            <blockquote className={styles.testimonials__quote}>
              <span>&ldquo;{currentTestimonial.quote}&rdquo;</span>
            </blockquote>

            <div className={styles["testimonials__author-info"]}>
              <div className={styles["testimonials__author-image"]}>
                <Image
                  src={currentTestimonial.image}
                  alt={currentTestimonial.author}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div className={styles["testimonials__author-details"]}>
                <p className={styles["testimonials__author-name"]}>
                  {currentTestimonial.author}
                </p>
                <p className={styles["testimonials__author-role"]}>
                  {currentTestimonial.role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className={styles.testimonials__navigation}>
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className={styles["testimonials__nav-button"]}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <div className={styles.testimonials__indicators}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`${styles.testimonials__indicator} ${
                    index === currentIndex ? styles["testimonials__indicator--active"] : ""
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className={styles["testimonials__nav-button"]}
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
