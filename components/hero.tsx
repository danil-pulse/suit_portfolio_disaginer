"use client"

import { ArrowDown } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="hero-section">
      {/* Background Pattern */}
      <div className="hero-background-pattern" />
      
      <div className="relative z-10 mx-auto max-w-7xl container-padding text-center">
        <p className="hero-subtitle animate-fade-in-up">
          {t.hero.welcome}
        </p>
        
        <h1 className="hero-title animate-fade-in-up animate-delay-100">
          {t.hero.headline}
          <br className="hidden sm:block" />
          <span className="text-accent">{t.hero.headlineHighlight}</span>{t.hero.headlineEnd}
        </h1>
        
        <p className="hero-description animate-fade-in-up animate-delay-200">
          {t.hero.description}
        </p>
        
        <div className="hero-cta-group animate-fade-in-up animate-delay-300">
          <Link href="#work" className="hero-cta-primary hover-lift">
            {t.hero.viewWork}
          </Link>
          <Link href="#about" className="hero-cta-secondary hover-lift">
            {t.hero.learnMore}
          </Link>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="hero-scroll-indicator">
        <Link
          href="#work"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowDown className="h-5 w-5 md:h-6 md:w-6" />
          <span className="sr-only">{t.hero.scrollToWork}</span>
        </Link>
      </div>
    </section>
  )
}
