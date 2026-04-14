"use client"

import { ArrowDown } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import styles from "./Hero.module.css"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className={styles.hero}>
      {/* Background Pattern */}
      <div className={styles["hero__background-pattern"]} />
      
      <div className={styles.hero__content}>
        <p className={styles["hero__welcome-text"]}>
          {t.hero.welcome}
        </p>
        
        <h1 className={styles.hero__headline}>
          {t.hero.headline}
          <br className={styles["hero__headline-break"]} />
          <span className={styles["hero__headline-accent"]}>{t.hero.headlineHighlight}</span>
          {t.hero.headlineEnd}
        </h1>
        
        <p className={styles.hero__description}>
          {t.hero.description}
        </p>
        
        <div className={styles.hero__actions}>
          <Link href="#work" className={styles["hero__button-primary"]}>
            {t.hero.viewWork}
          </Link>
          <Link href="#about" className={styles["hero__button-secondary"]}>
            {t.hero.learnMore}
          </Link>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className={styles["hero__scroll-indicator"]}>
        <Link href="#work" className={styles["hero__scroll-link"]}>
          <ArrowDown className="h-6 w-6" />
          <span className="sr-only">{t.hero.scrollToWork}</span>
        </Link>
      </div>
    </section>
  )
}
