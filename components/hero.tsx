"use client"

import { ArrowDown } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 lg:pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {t.hero.welcome}
        </p>
        
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-balance leading-tight tracking-tight text-foreground animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
          {t.hero.headline}
          <br className="hidden sm:block" />
          <span className="text-accent">{t.hero.headlineHighlight}</span>{t.hero.headlineEnd}
        </h1>
        
        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          {t.hero.description}
        </p>
        
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500">
          <Link
            href="#work"
            className="inline-flex items-center justify-center h-12 px-8 text-sm font-medium tracking-wide uppercase bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            {t.hero.viewWork}
          </Link>
          <Link
            href="#about"
            className="inline-flex items-center justify-center h-12 px-8 text-sm font-medium tracking-wide uppercase border border-border text-foreground rounded-md hover:bg-secondary transition-colors"
          >
            {t.hero.learnMore}
          </Link>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Link href="#work" className="text-muted-foreground hover:text-foreground transition-colors">
          <ArrowDown className="h-6 w-6" />
          <span className="sr-only">{t.hero.scrollToWork}</span>
        </Link>
      </div>
    </section>
  )
}
