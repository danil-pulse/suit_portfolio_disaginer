"use client"

import Image from "next/image"
import { Award, Camera, Palette, Users } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import styles from "./About.module.css"

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
    <section id="about" className={styles.about}>
      <div className={styles.about__container}>
        <div className={styles["about__main-grid"]}>
          {/* Image */}
          <div className={styles["about__image-section"]}>
            <div className={styles["about__image-wrapper"]}>
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                alt={t.header.title}
                fill
                className={styles.about__image}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating Stats Card */}
            <div className={styles["about__floating-card"]}>
              <p className={styles["about__floating-value"]}>10+</p>
              <p className={styles["about__floating-label"]}>{t.about.yearsExperience}</p>
            </div>
          </div>

          {/* Content */}
          <div className={styles["about__content-section"]}>
            <p className={styles.about__subtitle}>
              {t.about.subtitle}
            </p>
            <h2 className={styles.about__title}>
              {t.about.title}
            </h2>
            <div className={styles.about__bio}>
              <p>{t.about.bio1}</p>
              <p>{t.about.bio2}</p>
              <p>{t.about.bio3}</p>
            </div>

            {/* Stats Grid */}
            <div className={styles["about__stats-grid"]}>
              {stats.map((stat) => (
                <div key={stat.label} className={styles["about__stat-item"]}>
                  <div className={styles["about__stat-icon"]}>
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className={styles["about__stat-value"]}>{stat.value}</p>
                    <p className={styles["about__stat-label"]}>{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services */}
        <div className={styles["about__services-section"]}>
          <div className={styles["about__services-header"]}>
            <p className={styles["about__services-subtitle"]}>
              {t.about.servicesTitle}
            </p>
            <h3 className={styles["about__services-title"]}>
              {t.about.servicesSubtitle}
            </h3>
          </div>

          <div className={styles["about__services-grid"]}>
            {services.map((service) => (
              <div key={service.title} className={styles["about__service-card"]}>
                <h4 className={styles["about__service-title"]}>
                  {service.title}
                </h4>
                <p className={styles["about__service-description"]}>
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
