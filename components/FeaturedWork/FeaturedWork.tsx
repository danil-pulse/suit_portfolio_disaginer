"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import styles from "./FeaturedWork.module.css"

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
    <section id="work" className={styles["featured-work"]}>
      <div className={styles["featured-work__container"]}>
        <div className={styles["featured-work__header"]}>
          <div>
            <p className={styles["featured-work__subtitle"]}>
              {t.featuredWork.subtitle}
            </p>
            <h2 className={styles["featured-work__title"]}>
              {t.featuredWork.title}
            </h2>
          </div>
          <div className={styles["featured-work__nav-links"]}>
            <Link href="#photography" className={styles["featured-work__nav-link"]}>
              {t.featuredWork.photography}
              <ArrowRight className={`h-4 w-4 ${styles["featured-work__nav-arrow"]}`} />
            </Link>
            <Link href="#design" className={styles["featured-work__nav-link"]}>
              {t.featuredWork.design}
              <ArrowRight className={`h-4 w-4 ${styles["featured-work__nav-arrow"]}`} />
            </Link>
          </div>
        </div>

        {/* Tetris-style Bento Grid */}
        <div className={styles["featured-work__grid"]}>
          {/* Large card - spans 8 cols, 3 rows */}
          <Link
            href={featuredWorks[0].href}
            className={`${styles["featured-work__card"]} ${styles["featured-work__card--large"]}`}
          >
            <Image
              src={featuredWorks[0].image}
              alt={featuredWorks[0].title}
              fill
              className={styles["featured-work__card-image"]}
              sizes="(max-width: 768px) 100vw, 66vw"
            />
            <div className={styles["featured-work__card-overlay"]} />
            <div className={`${styles["featured-work__card-content"]} ${styles["featured-work__card-content--large"]}`}>
              <div className={styles["featured-work__tags"]}>
                {featuredWorks[0].tags.map((tag) => (
                  <span key={tag} className={styles["featured-work__tag"]}>
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className={`${styles["featured-work__card-title"]} ${styles["featured-work__card-title--large"]}`}>
                {featuredWorks[0].title}
              </h3>
              <p className={styles["featured-work__card-description"]}>
                {featuredWorks[0].description}
              </p>
            </div>
          </Link>

          {/* Tall card - spans 4 cols, 2 rows */}
          <Link
            href={featuredWorks[1].href}
            className={`${styles["featured-work__card"]} ${styles["featured-work__card--tall"]}`}
          >
            <Image
              src={featuredWorks[1].image}
              alt={featuredWorks[1].title}
              fill
              className={styles["featured-work__card-image"]}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className={styles["featured-work__card-overlay"]} />
            <div className={styles["featured-work__card-content"]}>
              <div className={`${styles["featured-work__tags"]} ${styles["featured-work__tags--small"]}`}>
                {featuredWorks[1].tags.map((tag) => (
                  <span key={tag} className={`${styles["featured-work__tag"]} ${styles["featured-work__tag--small"]}`}>
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className={`${styles["featured-work__card-title"]} ${styles["featured-work__card-title--medium"]}`}>
                {featuredWorks[1].title}
              </h3>
            </div>
          </Link>

          {/* Small card - spans 4 cols, 1 row */}
          <Link
            href={featuredWorks[2].href}
            className={`${styles["featured-work__card"]} ${styles["featured-work__card--small"]}`}
          >
            <Image
              src={featuredWorks[2].image}
              alt={featuredWorks[2].title}
              fill
              className={styles["featured-work__card-image"]}
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className={`${styles["featured-work__card-overlay"]} ${styles["featured-work__card-overlay--dark"]}`} />
            <div className={`${styles["featured-work__card-content"]} ${styles["featured-work__card-content--small"]}`}>
              <h3 className={`${styles["featured-work__card-title"]} ${styles["featured-work__card-title--small"]}`}>
                {featuredWorks[2].title}
              </h3>
            </div>
          </Link>

          {/* Medium card - spans 6 cols, 2 rows */}
          <Link
            href={featuredWorks[3].href}
            className={`${styles["featured-work__card"]} ${styles["featured-work__card--medium"]}`}
          >
            <Image
              src={featuredWorks[3].image}
              alt={featuredWorks[3].title}
              fill
              className={styles["featured-work__card-image"]}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className={styles["featured-work__card-overlay"]} />
            <div className={styles["featured-work__card-content"]}>
              <div className={`${styles["featured-work__tags"]} ${styles["featured-work__tags--small"]}`}>
                {featuredWorks[3].tags.map((tag) => (
                  <span key={tag} className={`${styles["featured-work__tag"]} ${styles["featured-work__tag--small"]}`}>
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className={`${styles["featured-work__card-title"]} ${styles["featured-work__card-title--medium"]}`}>
                {featuredWorks[3].title}
              </h3>
              <p className={`${styles["featured-work__card-description"]} ${styles["featured-work__card-description--hidden"]}`}>
                {featuredWorks[3].description}
              </p>
            </div>
          </Link>

          {/* Small wide card - spans 3 cols, 1 row */}
          <Link
            href={featuredWorks[4].href}
            className={`${styles["featured-work__card"]} ${styles["featured-work__card--wide"]}`}
          >
            <Image
              src={featuredWorks[4].image}
              alt={featuredWorks[4].title}
              fill
              className={styles["featured-work__card-image"]}
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className={`${styles["featured-work__card-overlay"]} ${styles["featured-work__card-overlay--dark"]}`} />
            <div className={`${styles["featured-work__card-content"]} ${styles["featured-work__card-content--small"]}`}>
              <h3 className={`${styles["featured-work__card-title"]} ${styles["featured-work__card-title--base"]}`}>
                {featuredWorks[4].title}
              </h3>
            </div>
          </Link>

          {/* Medium tall card - spans 3 cols, 2 rows */}
          <Link
            href={featuredWorks[5].href}
            className={`${styles["featured-work__card"]} ${styles["featured-work__card--medium-tall"]}`}
          >
            <Image
              src={featuredWorks[5].image}
              alt={featuredWorks[5].title}
              fill
              className={styles["featured-work__card-image"]}
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className={styles["featured-work__card-overlay"]} />
            <div className={styles["featured-work__card-content"]}>
              <div className={`${styles["featured-work__tags"]} ${styles["featured-work__tags--small"]}`}>
                {featuredWorks[5].tags.slice(0, 2).map((tag) => (
                  <span key={tag} className={`${styles["featured-work__tag"]} ${styles["featured-work__tag--small"]}`}>
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className={`${styles["featured-work__card-title"]} ${styles["featured-work__card-title--small"]}`}>
                {featuredWorks[5].title}
              </h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
