"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/lib/language-context"

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex flex-col">
            <span className="font-serif text-xl lg:text-2xl tracking-tight text-foreground">
              {t.header.title}
            </span>
            <span className="text-xs text-muted-foreground tracking-widest uppercase">
              {t.header.subtitle}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase"
              >
                {item.label}
              </Link>
            ))}
            <LanguageSwitcher />
            <Button asChild size="sm" className="ml-2">
              <Link href="#contact">{t.nav.bookNow}</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-sm">
                <div className="flex flex-col gap-8 mt-12">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-2xl font-serif text-foreground hover:text-accent transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Button asChild size="lg" className="mt-4">
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
