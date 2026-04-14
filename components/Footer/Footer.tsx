"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import styles from "./Footer.module.css"

// Иконки социальных сетей
const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
)

const VKIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.745-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.372 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.305-.491.745-.491h1.744c.525 0 .643.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z" />
  </svg>
)

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

// Компонент для иконки Max(использует изображение)
const MaxIcon = () => (
  <svg viewBox="0 0 720 720" fill="currentColor" className="h-4 w-4 rounded-sm" >
    <path d="M350.4,9.6C141.8,20.5,4.1,184.1,12.8,390.4c3.8,90.3,40.1,168,48.7,253.7,2.2,22.2-4.2,49.6,21.4,59.3,31.5,11.9,79.8-8.1,106.2-26.4,9-6.1,17.6-13.2,24.2-22,27.3,18.1,53.2,35.6,85.7,43.4,143.1,34.3,299.9-44.2,369.6-170.3C799.6,291.2,622.5-4.6,350.4,9.6h0ZM269.4,504c-11.3,8.8-22.2,20.8-34.7,27.7-18.1,9.7-23.7-.4-30.5-16.4-21.4-50.9-24-137.6-11.5-190.9,16.8-72.5,72.9-136.3,150-143.1,78-6.9,150.4,32.7,183.1,104.2,72.4,159.1-112.9,316.2-256.4,218.6h0Z" />
  </svg>
)

const socialLinks = [
  { Icon: TelegramIcon, href: "https://t.me/username", label: "Telegram" },
  { Icon: WhatsAppIcon, href: "https://wa.me/12125551234", label: "WhatsApp" },
  { Icon: VKIcon, href: "https://vk.com/username", label: "VK" },
  { Icon: MaxIcon, href: "#", label: "Max" },
  { Icon: Mail, href: "mailto:hello@ilyaoblog.com", label: "Email" },
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
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.Icon />
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
