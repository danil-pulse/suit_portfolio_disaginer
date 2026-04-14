"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function FeaturedWork() {
  const { t } = useLanguage()

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
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
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
    <section id="work" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-sm tracking-widest uppercase text-muted-foreground mb-2">
              {t.featuredWork.subtitle}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
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

        {/* Tetris-style Bento Grid */}
        <div className="grid grid-cols-12 gap-4 lg:gap-6 auto-rows-[minmax(140px,1fr)]">
          {/* Large card - spans 8 cols, 3 rows */}
          <Link
            href={featuredWorks[0].href}
            className="group relative overflow-hidden rounded-xl bg-muted col-span-12 md:col-span-8 row-span-3"
          >
            <Image
              src={featuredWorks[0].image}
              alt={featuredWorks[0].title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
              <div className="flex flex-wrap gap-2 mb-3">
                {featuredWorks[0].tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs tracking-wide uppercase bg-white/10 backdrop-blur-sm text-white rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-serif text-2xl lg:text-3xl text-white group-hover:text-white/90 transition-colors">
                {featuredWorks[0].title}
              </h3>
              <p className="mt-2 text-white/70 text-sm max-w-md">
                {featuredWorks[0].description}
              </p>
            </div>
          </Link>

          {/* Tall card - spans 4 cols, 2 rows */}
          <Link
            href={featuredWorks[1].href}
            className="group relative overflow-hidden rounded-xl bg-muted col-span-12 md:col-span-4 row-span-2"
          >
            <Image
              src={featuredWorks[1].image}
              alt={featuredWorks[1].title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
              <div className="flex flex-wrap gap-2 mb-2">
                {featuredWorks[1].tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs tracking-wide uppercase bg-white/10 backdrop-blur-sm text-white rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-serif text-xl lg:text-2xl text-white group-hover:text-white/90 transition-colors">
                {featuredWorks[1].title}
              </h3>
            </div>
          </Link>

          {/* Small card - spans 4 cols, 1 row */}
          <Link
            href={featuredWorks[2].href}
            className="group relative overflow-hidden rounded-xl bg-muted col-span-6 md:col-span-4 row-span-1"
          >
            <Image
              src={featuredWorks[2].image}
              alt={featuredWorks[2].title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="font-serif text-lg text-white group-hover:text-white/90 transition-colors">
                {featuredWorks[2].title}
              </h3>
            </div>
          </Link>

          {/* Medium card - spans 6 cols, 2 rows */}
          <Link
            href={featuredWorks[3].href}
            className="group relative overflow-hidden rounded-xl bg-muted col-span-12 md:col-span-6 row-span-2"
          >
            <Image
              src={featuredWorks[3].image}
              alt={featuredWorks[3].title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex flex-wrap gap-2 mb-2">
                {featuredWorks[3].tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs tracking-wide uppercase bg-white/10 backdrop-blur-sm text-white rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-serif text-xl lg:text-2xl text-white group-hover:text-white/90 transition-colors">
                {featuredWorks[3].title}
              </h3>
              <p className="mt-2 text-white/70 text-sm max-w-md hidden sm:block">
                {featuredWorks[3].description}
              </p>
            </div>
          </Link>

          {/* Small wide card - spans 6 cols, 1 row */}
          <Link
            href={featuredWorks[4].href}
            className="group relative overflow-hidden rounded-xl bg-muted col-span-6 md:col-span-3 row-span-1"
          >
            <Image
              src={featuredWorks[4].image}
              alt={featuredWorks[4].title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="font-serif text-base lg:text-lg text-white group-hover:text-white/90 transition-colors">
                {featuredWorks[4].title}
              </h3>
            </div>
          </Link>

          {/* Medium tall card - spans 3 cols, 2 rows */}
          <Link
            href={featuredWorks[5].href}
            className="group relative overflow-hidden rounded-xl bg-muted col-span-6 md:col-span-3 row-span-2"
          >
            <Image
              src={featuredWorks[5].image}
              alt={featuredWorks[5].title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5">
              <div className="flex flex-wrap gap-1 mb-2">
                {featuredWorks[5].tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs tracking-wide uppercase bg-white/10 backdrop-blur-sm text-white rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-serif text-lg lg:text-xl text-white group-hover:text-white/90 transition-colors">
                {featuredWorks[5].title}
              </h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
