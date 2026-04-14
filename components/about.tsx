"use client"

import Image from "next/image"
import { Award, Camera, Palette, Users } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

export function About() {
  const { t } = useLanguage()
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>()
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation<HTMLDivElement>()

  const stats = [
    { icon: Camera, value: "150+", label: t.about.stats.photographyProjects },
    { icon: Palette, value: "80+", label: t.about.stats.designProjects },
    { icon: Users, value: "200+", label: t.about.stats.happyClients },
    { icon: Award, value: "15", label: t.about.stats.awardsReceived },
  ]

  const services = [
    {
      title: t.about.services.portraitPhotography.title,
      description: t.about.services.portraitPhotography.description,
    },
    {
      title: t.about.services.eventCoverage.title,
      description: t.about.services.eventCoverage.description,
    },
    {
      title: t.about.services.brandIdentity.title,
      description: t.about.services.brandIdentity.description,
    },
    {
      title: t.about.services.webDesign.title,
      description: t.about.services.webDesign.description,
    },
    {
      title: t.about.services.editorialDesign.title,
      description: t.about.services.editorialDesign.description,
    },
    {
      title: t.about.services.packagingDesign.title,
      description: t.about.services.packagingDesign.description,
    },
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding bg-secondary/30"
    >
      <div className="mx-auto max-w-7xl container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div
            className={cn(
              "relative transition-all duration-700",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            )}
          >
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                alt={t.header.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating Stats Card */}
            <div className="floating-card -bottom-4 -right-4 md:-bottom-6 md:-right-6 lg:-right-12">
              <p className="text-3xl md:text-4xl font-serif text-foreground">10+</p>
              <p className="text-xs md:text-sm text-muted-foreground">{t.about.yearsExperience}</p>
            </div>
          </div>

          {/* Content */}
          <div
            className={cn(
              "transition-all duration-700",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="section-header">
              <p className="section-subtitle">
                {t.about.subtitle}
              </p>
              <h2 className="section-title mb-4 md:mb-6">
                {t.about.title}
              </h2>
            </div>
            <div className="space-y-3 md:space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
              <p>{t.about.bio1}</p>
              <p>{t.about.bio2}</p>
              <p>{t.about.bio3}</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-10">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={cn(
                    "stat-item transition-all duration-500",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )}
                  style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                >
                  <div className="stat-icon">
                    <stat.icon className="h-4 w-4 md:h-5 md:w-5" />
                  </div>
                  <div>
                    <p className="stat-value">{stat.value}</p>
                    <p className="stat-label">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services */}
        <div ref={servicesRef} className="mt-16 md:mt-24">
          <div
            className={cn(
              "text-center mb-8 md:mb-12 transition-all duration-700",
              servicesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <p className="section-subtitle mb-1 md:mb-2">
              {t.about.servicesTitle}
            </p>
            <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground">
              {t.about.servicesSubtitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={cn(
                  "service-card hover-lift transition-all duration-500",
                  servicesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <h4 className="service-card-title">
                  {service.title}
                </h4>
                <p className="service-card-description">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
