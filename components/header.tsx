"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#work", label: t.nav.work },
    { href: "#photography", label: t.nav.photography },
    { href: "#design", label: t.nav.design },
    { href: "#about", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
  ]

  return (
    <header
      className={cn(
        "header-nav animate-fade-in-down",
        isScrolled && "scrolled"
      )}
    >
      <div className="mx-auto max-w-7xl container-padding">
        <nav className="flex items-center justify-between h-14 md:h-16 lg:h-20">
          <Link href="/" className="flex flex-col group">
            <span className="font-serif text-lg md:text-xl lg:text-2xl tracking-tight text-foreground transition-colors group-hover:text-accent">
              {t.header.title}
            </span>
            <span className="text-[10px] md:text-xs text-muted-foreground tracking-widest uppercase">
              {t.header.subtitle}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="header-nav-link animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                {item.label}
              </Link>
            ))}
            <div className="animate-fade-in" style={{ animationDelay: "600ms" }}>
              <LanguageSwitcher />
            </div>
            <Button
              asChild
              size="sm"
              className="ml-2 animate-fade-in hover-lift"
              style={{ animationDelay: "700ms" }}
            >
              <Link href="#contact">{t.nav.bookNow}</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs sm:max-w-sm">
                <div className="flex flex-col gap-6 mt-8">
                  {navItems.map((item, index) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-xl sm:text-2xl font-serif text-foreground hover:text-accent transition-colors animate-fade-in-right"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Button
                    asChild
                    size="lg"
                    className="mt-4 animate-fade-in-up"
                    style={{ animationDelay: "500ms" }}
                  >
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
