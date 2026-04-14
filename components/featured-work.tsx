"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

export function FeaturedWork() {
  const { t } = useLanguage()
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>()

  const featuredWorks = [
    {
      id: 1,
      title: t.projects.timelineMagazine.title,
      description: t.projects.timelineMagazine.description,
      tags: [t.tags.design, t.tags.photography, t.tags.editorial],
      image: "https://images.unsplash.com/photo-1542744094-24638afe58a7?w=800&q=80",
      href: "#design",
    },
    {
      id: 2,
      title: t.projects.siestaCampers.title,
      description: t.projects.siestaCampers.description,
      tags: [t.tags.photography, t.tags.branding],
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
      href: "#photography",
    },
    {
      id: 3,
      title: t.projects.architectStudio.title,
      description: t.projects.architectStudio.description,
      tags: [t.tags.design, t.tags.web, t.tags.branding],
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80",
      href: "#design",
    },
    {
      id: 4,
      title: t.projects.portraitSeries.title,
      description: t.projects.portraitSeries.description,
      tags: [t.tags.photography, t.tags.editorial],
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
      href: "#photography",
    },
    {
      id: 5,
      title: t.projects.urbanLandscapes.title,
      description: t.projects.urbanLandscapes.description,
      tags: [t.tags.photography, t.tags.architecture],
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
      href: "#photography",
    },
    {
      id: 6,
      title: t.projects.bloomCosmetics.title,
      description: t.projects.bloomCosmetics.description,
      tags: [t.tags.design, t.tags.packaging, t.tags.branding],
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
      href: "#design",
    },
  ]

  return (
    <section
      id="work"
      ref={sectionRef}
      className="section-padding"
    >
      <div className="mx-auto max-w-7xl container-padding">
        <div
          className={cn(
            "flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 md:mb-12 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="section-header mb-0">
            <p className="section-subtitle">
              {t.featuredWork.subtitle}
            </p>
            <h2 className="section-title">
              {t.featuredWork.title}
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#photography"
              className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.featuredWork.photography}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#design"
              className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.featuredWork.design}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Mobile navigation links */}
        <div className="flex md:hidden items-center gap-4 mb-6">
          <Link
            href="#photography"
            className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.featuredWork.photography}
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#design"
            className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.featuredWork.design}
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Tetris-style Bento Grid */}
        <div className="grid grid-cols-12 gap-3 md:gap-4 lg:gap-6 auto-rows-[minmax(120px,1fr)] md:auto-rows-[minmax(140px,1fr)]">
          {/* Large card - spans 8 cols, 3 rows */}
          <Link
            href={featuredWorks[0].href}
            className={cn(
              "portfolio-card col-span-12 md:col-span-8 row-span-2 md:row-span-3 relative transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: "100ms" }}
          >
            <Image
              src={featuredWorks[0].image}
              alt={featuredWorks[0].title}
              fill
              className="portfolio-card-image"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
            <div className="portfolio-card-overlay" />
            <div className="portfolio-card-content">
              <div className="flex flex-wrap gap-1.5 md:gap-2 mb-2 md:mb-3">
                {featuredWorks[0].tags.map((tag) => (
                  <span key={tag} className="portfolio-card-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="portfolio-card-title text-xl md:text-2xl lg:text-3xl">
                {featuredWorks[0].title}
              </h3>
              <p className="mt-1.5 md:mt-2 text-white/70 text-xs md:text-sm max-w-md line-clamp-2">
                {featuredWorks[0].description}
              </p>
            </div>
          </Link>

          {/* Tall card - spans 4 cols, 2 rows */}
          <Link
            href={featuredWorks[1].href}
            className={cn(
              "portfolio-card col-span-6 md:col-span-4 row-span-2 relative transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: "200ms" }}
          >
            <Image
              src={featuredWorks[1].image}
              alt={featuredWorks[1].title}
              fill
              className="portfolio-card-image"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="portfolio-card-overlay" />
            <div className="portfolio-card-content p-3 md:p-5 lg:p-6">
              <div className="flex flex-wrap gap-1 md:gap-2 mb-1.5 md:mb-2">
                {featuredWorks[1].tags.map((tag) => (
                  <span key={tag} className="portfolio-card-tag text-[10px] md:text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="portfolio-card-title text-base md:text-xl lg:text-2xl">
                {featuredWorks[1].title}
              </h3>
            </div>
          </Link>

          {/* Small card - spans 4 cols, 1 row */}
          <Link
            href={featuredWorks[2].href}
            className={cn(
              "portfolio-card col-span-6 md:col-span-4 row-span-1 relative transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: "300ms" }}
          >
            <Image
              src={featuredWorks[2].image}
              alt={featuredWorks[2].title}
              fill
              className="portfolio-card-image"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="portfolio-card-overlay" />
            <div className="portfolio-card-content p-3 md:p-4">
              <h3 className="portfolio-card-title text-sm md:text-lg">
                {featuredWorks[2].title}
              </h3>
            </div>
          </Link>

          {/* Medium card - spans 6 cols, 2 rows */}
          <Link
            href={featuredWorks[3].href}
            className={cn(
              "portfolio-card col-span-12 md:col-span-6 row-span-2 relative transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: "400ms" }}
          >
            <Image
              src={featuredWorks[3].image}
              alt={featuredWorks[3].title}
              fill
              className="portfolio-card-image"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="portfolio-card-overlay" />
            <div className="portfolio-card-content">
              <div className="flex flex-wrap gap-1.5 md:gap-2 mb-1.5 md:mb-2">
                {featuredWorks[3].tags.map((tag) => (
                  <span key={tag} className="portfolio-card-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="portfolio-card-title text-lg md:text-xl lg:text-2xl">
                {featuredWorks[3].title}
              </h3>
              <p className="mt-1.5 md:mt-2 text-white/70 text-xs md:text-sm max-w-md hidden sm:block line-clamp-2">
                {featuredWorks[3].description}
              </p>
            </div>
          </Link>

          {/* Small wide card - spans 6 cols, 1 row */}
          <Link
            href={featuredWorks[4].href}
            className={cn(
              "portfolio-card col-span-6 md:col-span-3 row-span-1 relative transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: "500ms" }}
          >
            <Image
              src={featuredWorks[4].image}
              alt={featuredWorks[4].title}
              fill
              className="portfolio-card-image"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="portfolio-card-overlay" />
            <div className="portfolio-card-content p-3 md:p-4">
              <h3 className="portfolio-card-title text-sm md:text-base lg:text-lg">
                {featuredWorks[4].title}
              </h3>
            </div>
          </Link>

          {/* Medium tall card - spans 3 cols, 2 rows */}
          <Link
            href={featuredWorks[5].href}
            className={cn(
              "portfolio-card col-span-6 md:col-span-3 row-span-2 relative transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: "600ms" }}
          >
            <Image
              src={featuredWorks[5].image}
              alt={featuredWorks[5].title}
              fill
              className="portfolio-card-image"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="portfolio-card-overlay" />
            <div className="portfolio-card-content p-3 md:p-4 lg:p-5">
              <div className="flex flex-wrap gap-1 mb-1.5 md:mb-2">
                {featuredWorks[5].tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="portfolio-card-tag text-[10px] md:text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="portfolio-card-title text-base md:text-lg lg:text-xl">
                {featuredWorks[5].title}
              </h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
