"use client"

import Link from "next/link"
import { Instagram, Linkedin, Mail } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@ilyaoblog.com", label: "Email" },
]

export function Footer() {
  const { t } = useLanguage()
  const { ref: footerRef, isVisible } = useScrollAnimation<HTMLElement>()

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
    <footer ref={footerRef} className="footer-section">
      <div className="mx-auto max-w-7xl container-padding py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-8">
          {/* Brand */}
          <div
            className={cn(
              "col-span-2 md:col-span-1 lg:col-span-1 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <Link href="/" className="block mb-3 md:mb-4">
              <span className="footer-brand">{t.header.title}</span>
            </Link>
            <p className="footer-description">
              {t.footer.description}
            </p>
            <div className="flex items-center gap-2 md:gap-3 mt-4 md:mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="footer-social-link"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Work Links */}
          <div
            className={cn(
              "transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: "100ms" }}
          >
            <p className="footer-heading">
              {t.footer.work}
            </p>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.work.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info Links */}
          <div
            className={cn(
              "transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: "200ms" }}
          >
            <p className="footer-heading">
              {t.footer.information}
            </p>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.info.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div
            className={cn(
              "col-span-2 md:col-span-1 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: "300ms" }}
          >
            <p className="footer-heading">
              {t.footer.stayUpdated}
            </p>
            <p className="text-xs md:text-sm text-primary-foreground/70 mb-3 md:mb-4">
              {t.footer.subscribeText}
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="footer-newsletter-input"
              />
              <button type="submit" className="footer-newsletter-button">
                {t.footer.subscribe}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={cn(
            "mt-12 md:mt-16 pt-6 md:pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
          style={{ transitionDelay: "400ms" }}
        >
          <p className="text-xs md:text-sm text-primary-foreground/50 text-center md:text-left">
            &copy; {new Date().getFullYear()} {t.header.title}. {t.footer.allRights}
          </p>
          <div className="flex items-center gap-4 md:gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs md:text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors"
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
