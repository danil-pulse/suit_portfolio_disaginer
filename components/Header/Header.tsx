"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { LanguageSwitcher } from "@/components/LanguageSwitcher/LanguageSwitcher"
import { useLanguage } from "@/lib/language-context"
import styles from "./Header.module.css"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  const navItems = [
    { href: "#work", label: t.nav.work },
    { href: "#photography", label: t.nav.photography },
    { href: "#design", label: t.nav.design },
    { href: "#about", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
  ]

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <nav className={styles.header__nav}>
          <Link href="/" className={styles.header__brand}>
            <span className={styles["header__brand-title"]}>
              {t.header.title}
            </span>
            <span className={styles["header__brand-subtitle"]}>
              {t.header.subtitle}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className={styles["header__desktop-nav"]}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={styles["header__nav-link"]}
              >
                {item.label}
              </Link>
            ))}
            <LanguageSwitcher />
            <Button asChild size="sm" className={styles["header__book-button"]}>
              <Link href="#contact">{t.nav.bookNow}</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className={styles["header__mobile-nav"]}>
            <LanguageSwitcher />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-sm">
                <div className={styles["header__mobile-menu"]}>
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={styles["header__mobile-link"]}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Button asChild size="lg" className={styles["header__mobile-book-button"]}>
                    <Link href="#contact" onClick={() => setIsOpen(false)}>
                      {t.nav.bookNow}
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  )
}
