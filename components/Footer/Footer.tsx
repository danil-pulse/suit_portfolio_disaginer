"use client"

import Link from "next/link"
import { Instagram, Linkedin, Mail } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import styles from "./Footer.module.css"

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
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__grid}>
          {/* Brand */}
          <div className={styles["footer__brand-section"]}>
            <Link href="/" className={styles["footer__brand-link"]}>
              <span className={styles["footer__brand-title"]}>{t.header.title}</span>
            </Link>
            <p className={styles["footer__brand-description"]}>
              {t.footer.description}
            </p>
            <div className={styles["footer__social-links"]}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={styles["footer__social-link"]}
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Work Links */}
          <div className={styles["footer__links-section"]}>
            <p className={styles["footer__links-title"]}>
              {t.footer.work}
            </p>
            <ul className={styles["footer__links-list"]}>
              {footerLinks.work.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={styles.footer__link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info Links */}
          <div className={styles["footer__links-section"]}>
            <p className={styles["footer__links-title"]}>
              {t.footer.information}
            </p>
            <ul className={styles["footer__links-list"]}>
              {footerLinks.info.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={styles.footer__link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className={styles["footer__newsletter-section"]}>
            <p className={styles["footer__newsletter-title"]}>
              {t.footer.stayUpdated}
            </p>
            <p className={styles["footer__newsletter-description"]}>
              {t.footer.subscribeText}
            </p>
            <form className={styles["footer__newsletter-form"]}>
              <input
                type="email"
                placeholder="your@email.com"
                className={styles["footer__newsletter-input"]}
              />
              <button type="submit" className={styles["footer__newsletter-button"]}>
                {t.footer.subscribe}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.footer__bottom}>
          <p className={styles.footer__copyright}>
            &copy; {new Date().getFullYear()} {t.header.title}. {t.footer.allRights}
          </p>
          <div className={styles["footer__legal-links"]}>
            {footerLinks.legal.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={styles["footer__legal-link"]}
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
