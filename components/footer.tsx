"use client"

import Link from "next/link"
import { Instagram, Linkedin, Mail } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@ilyaoblog.com", label: "Email" },
]

export function Footer() {
  const { t } = useLanguage()

  const footerLinks = {
    work: [
      { label: t.nav.photography, href: "#photography" },
      { label: t.nav.design, href: "#design" },
      { label: t.nav.work, href: "#work" },
    ],
    info: [
      { label: t.nav.about, href: "#about" },
      { label: t.about.servicesSubtitle, href: "#about" },
      { label: t.nav.contact, href: "#contact" },
    ],
    legal: [
      { label: t.footer.privacyPolicy, href: "#" },
      { label: t.footer.termsOfService, href: "#" },
    ],
  }

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="block mb-4">
              <span className="font-serif text-2xl">{t.header.title}</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              {t.footer.description}
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Work Links */}
          <div>
            <p className="text-xs tracking-widest uppercase text-primary-foreground/50 mb-4">
              {t.footer.work}
            </p>
            <ul className="space-y-3">
              {footerLinks.work.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info Links */}
          <div>
            <p className="text-xs tracking-widest uppercase text-primary-foreground/50 mb-4">
              {t.footer.information}
            </p>
            <ul className="space-y-3">
              {footerLinks.info.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <p className="text-xs tracking-widest uppercase text-primary-foreground/50 mb-4">
              {t.footer.stayUpdated}
            </p>
            <p className="text-sm text-primary-foreground/70 mb-4">
              {t.footer.subscribeText}
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2 text-sm bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground/50"
              />
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium bg-primary-foreground text-primary rounded-lg hover:bg-primary-foreground/90 transition-colors"
              >
                {t.footer.subscribe}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/50">
            &copy; {new Date().getFullYear()} {t.header.title}. {t.footer.allRights}
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
