"use client"

import Image from "next/image"
import { Award, Camera, Palette, Users } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function About() {
  const { t } = useLanguage()

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
    <section id="about" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
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
            <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-card border border-border rounded-xl p-6 shadow-lg">
              <p className="text-4xl font-serif text-foreground">10+</p>
              <p className="text-sm text-muted-foreground">{t.about.yearsExperience}</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm tracking-widest uppercase text-muted-foreground mb-2">
              {t.about.subtitle}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              {t.about.title}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{t.about.bio1}</p>
              <p>{t.about.bio2}</p>
              <p>{t.about.bio3}</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10 text-accent">
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-2xl font-serif text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <p className="text-sm tracking-widest uppercase text-muted-foreground mb-2">
              {t.about.servicesTitle}
            </p>
            <h3 className="font-serif text-3xl md:text-4xl text-foreground">
              {t.about.servicesSubtitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group p-6 bg-card border border-border rounded-xl hover:shadow-lg hover:border-accent/30 transition-all duration-300"
              >
                <h4 className="font-serif text-xl text-foreground group-hover:text-accent transition-colors">
                  {service.title}
                </h4>
                <p className="mt-2 text-sm text-muted-foreground">
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
