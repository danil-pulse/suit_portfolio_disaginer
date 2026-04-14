"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar as CalendarIcon, Mail, MapPin, Phone, Send, CheckCircle, MessageCircle } from "lucide-react"
import { format } from "date-fns"
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field"
import { useLanguage } from "@/lib/language-context"
import styles from "./ContactBooking.module.css"

// Иконки социальных сетей
const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
)

const VKIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.745-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.372 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.305-.491.745-.491h1.744c.525 0 .643.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z"/>
  </svg>
)

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

// Компонент для иконки Max (использует изображение)
const MaxIcon = () => (
  <Image 
    src="/images/max-logo.png" 
    alt="Max" 
    width={20} 
    height={20} 
    className="h-5 w-5 rounded-sm"
  />
)

type SendMethod = "telegram" | "email"

const timeSlots = [
  "9:00", "10:00", "11:00", "12:00",
  "13:00", "14:00", "15:00", "16:00", "17:00"
]

export function ContactBooking() {
  const [date, setDate] = useState<Date>()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [sendMethod, setSendMethod] = useState<SendMethod>("telegram")
  const [error, setError] = useState<string | null>(null)
  const { t } = useLanguage()

  const serviceTypes = [
    { value: "portrait", label: t.contact.serviceTypes.portrait },
    { value: "event", label: t.contact.serviceTypes.event },
    { value: "brand-identity", label: t.contact.serviceTypes.brandIdentity },
    { value: "web-design", label: t.contact.serviceTypes.webDesign },
    { value: "editorial", label: t.contact.serviceTypes.editorial },
    { value: "packaging", label: t.contact.serviceTypes.packaging },
    { value: "consultation", label: t.contact.serviceTypes.consultation },
    { value: "other", label: t.contact.serviceTypes.other },
  ]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      service: formData.get("service") as string,
      message: formData.get("message") as string,
      date: date ? format(date, "PPP") : undefined,
      time: formData.get("time") as string,
      sendMethod,
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        setError("Failed to send message. Please try again.")
      }
    } catch {
      setError("Network error. Please check your connection.")
    } finally {
      setIsLoading(false)
    }
  }

  // Социальные сети для блока "Следите за мной"
  const socialLinks = [
    { icon: TelegramIcon, href: "https://t.me/username", label: "Telegram" },
    { icon: WhatsAppIcon, href: "https://wa.me/12125551234", label: "WhatsApp" },
    { icon: VKIcon, href: "https://vk.com/username", label: "VK" },
    { icon: MaxIcon, href: "#", label: "Max" },
  ]

  if (isSubmitted) {
    return (
      <section id="contact" className={styles["contact-booking"]}>
        <div className={styles["contact-booking__success"]}>
          <div className={styles["contact-booking__success-icon"]}>
            <CheckCircle className="h-8 w-8" />
          </div>
          <h2 className={styles["contact-booking__success-title"]}>
            {t.contact.thankYou}
          </h2>
          <p className={styles["contact-booking__success-message"]}>
            {t.contact.thankYouMessage}
          </p>
          <Button 
            className={styles["contact-booking__success-button"]}
            onClick={() => setIsSubmitted(false)}
          >
            {t.contact.sendAnother}
          </Button>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className={styles["contact-booking"]}>
      <div className={styles["contact-booking__container"]}>
        <div className={styles["contact-booking__grid"]}>
          {/* Contact Info */}
          <div className={styles["contact-booking__info-section"]}>
            <p className={styles["contact-booking__subtitle"]}>
              {t.contact.subtitle}
            </p>
            <h2 className={styles["contact-booking__title"]}>
              {t.contact.title}
            </h2>
            <p className={styles["contact-booking__description"]}>
              {t.contact.description}
            </p>

            <div className={styles["contact-booking__contact-list"]}>
              <div className={styles["contact-booking__contact-item"]}>
                <div className={styles["contact-booking__contact-icon"]}>
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className={styles["contact-booking__contact-label"]}>{t.contact.email}</p>
                  <a href="mailto:hello@ilyaoblog.com" className={styles["contact-booking__contact-value"]}>
                    hello@ilyaoblog.com
                  </a>
                </div>
              </div>

              <div className={styles["contact-booking__contact-item"]}>
                <div className={styles["contact-booking__contact-icon"]}>
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className={styles["contact-booking__contact-label"]}>{t.contact.phone}</p>
                  <a href="tel:+12125551234" className={styles["contact-booking__contact-value"]}>
                    +1 (212) 555-1234
                  </a>
                </div>
              </div>

              <div className={styles["contact-booking__contact-item"]}>
                <div className={styles["contact-booking__contact-icon"]}>
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className={styles["contact-booking__contact-label"]}>{t.contact.studio}</p>
                  <p className={styles["contact-booking__contact-text"]}>
                    {t.contact.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className={styles["contact-booking__social-section"]}>
              <p className={styles["contact-booking__social-label"]}>{t.contact.followAlong}</p>
              <div className={styles["contact-booking__social-links"]}>
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className={styles["contact-booking__social-link"]}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className={styles["contact-booking__form-section"]}>
            <Tabs defaultValue="inquiry" className={styles["contact-booking__tabs"]}>
              <TabsList className={styles["contact-booking__tabs-list"]}>
                <TabsTrigger value="inquiry" className={styles["contact-booking__tab-trigger"]}>
                  {t.contact.generalInquiry}
                </TabsTrigger>
                <TabsTrigger value="booking" className={styles["contact-booking__tab-trigger"]}>
                  {t.contact.bookSession}
                </TabsTrigger>
              </TabsList>

              <TabsContent value="inquiry">
                <form onSubmit={handleSubmit} className={styles["contact-booking__form"]}>
                  <FieldGroup className={styles["contact-booking__field-row"]}>
                    <Field>
                      <FieldLabel htmlFor="firstName">{t.contact.firstName}</FieldLabel>
                      <Input id="firstName" name="firstName" placeholder="John" required className={styles["contact-booking__input"]} />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="lastName">{t.contact.lastName}</FieldLabel>
                      <Input id="lastName" name="lastName" placeholder="Doe" required className={styles["contact-booking__input"]} />
                    </Field>
                  </FieldGroup>

                  <Field>
                    <FieldLabel htmlFor="email">{t.contact.emailLabel}</FieldLabel>
                    <Input id="email" name="email" type="email" placeholder="john@example.com" required className={styles["contact-booking__input"]} />
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="service">{t.contact.serviceInterested}</FieldLabel>
                    <Select name="service">
                      <SelectTrigger className={styles["contact-booking__select"]}>
                        <SelectValue placeholder={t.contact.selectService} />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceTypes.map((service) => (
                          <SelectItem key={service.value} value={service.value}>
                            {service.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="message">{t.contact.message}</FieldLabel>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder={t.contact.messagePlaceholder}
                      rows={5}
                      required
                      className={styles["contact-booking__textarea"]}
                    />
                  </Field>

                  {/* Выбор метода отправки */}
                  <Field>
                    <FieldLabel>{t.contact.sendMethod}</FieldLabel>
                    <div className={styles["contact-booking__send-method"]}>
                      <button
                        type="button"
                        onClick={() => setSendMethod("telegram")}
                        className={`${styles["contact-booking__method-button"]} ${sendMethod === "telegram" ? styles["contact-booking__method-button--active"] : ""}`}
                      >
                        <MessageCircle className="h-4 w-4" />
                        {t.contact.sendViaTelegram}
                      </button>
                      <button
                        type="button"
                        onClick={() => setSendMethod("email")}
                        className={`${styles["contact-booking__method-button"]} ${sendMethod === "email" ? styles["contact-booking__method-button--active"] : ""}`}
                      >
                        <Mail className="h-4 w-4" />
                        {t.contact.sendViaEmail}
                      </button>
                    </div>
                  </Field>

                  {error && (
                    <p className={styles["contact-booking__error"]}>{error}</p>
                  )}

                  <Button type="submit" className={styles["contact-booking__submit-button"]} size="lg" disabled={isLoading}>
                    {isLoading ? (
                      t.contact.sending
                    ) : (
                      <>
                        {t.contact.sendMessage}
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="booking">
                <form onSubmit={handleSubmit} className={styles["contact-booking__form"]}>
                  <FieldGroup className={styles["contact-booking__field-row"]}>
                    <Field>
                      <FieldLabel htmlFor="bookingFirstName">{t.contact.firstName}</FieldLabel>
                      <Input id="bookingFirstName" name="firstName" placeholder="John" required className={styles["contact-booking__input"]} />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="bookingLastName">{t.contact.lastName}</FieldLabel>
                      <Input id="bookingLastName" name="lastName" placeholder="Doe" required className={styles["contact-booking__input"]} />
                    </Field>
                  </FieldGroup>

                  <FieldGroup className={styles["contact-booking__field-row"]}>
                    <Field>
                      <FieldLabel htmlFor="bookingEmail">{t.contact.emailLabel}</FieldLabel>
                      <Input id="bookingEmail" name="email" type="email" placeholder="john@example.com" required className={styles["contact-booking__input"]} />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="bookingPhone">{t.contact.phoneLabel}</FieldLabel>
                      <Input id="bookingPhone" name="phone" type="tel" placeholder="+1 (555) 000-0000" className={styles["contact-booking__input"]} />
                    </Field>
                  </FieldGroup>

                  <Field>
                    <FieldLabel htmlFor="bookingService">{t.contact.serviceType}</FieldLabel>
                    <Select name="service">
                      <SelectTrigger className={styles["contact-booking__select"]}>
                        <SelectValue placeholder={t.contact.selectService} />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceTypes.map((service) => (
                          <SelectItem key={service.value} value={service.value}>
                            {service.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </Field>

                  <FieldGroup className={styles["contact-booking__field-row"]}>
                    <Field>
                      <FieldLabel>{t.contact.preferredDate}</FieldLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={`${styles["contact-booking__date-button"]} ${!date ? styles["contact-booking__date-button--placeholder"] : ""}`}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : t.contact.pickDate}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                            disabled={(date) =>
                              date < new Date() || date.getDay() === 0 || date.getDay() === 6
                            }
                          />
                        </PopoverContent>
                      </Popover>
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="timeSlot">{t.contact.preferredTime}</FieldLabel>
                      <Select name="time">
                        <SelectTrigger className={styles["contact-booking__select"]}>
                          <SelectValue placeholder={t.contact.selectTime} />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </Field>
                  </FieldGroup>

                  <Field>
                    <FieldLabel htmlFor="bookingDetails">{t.contact.projectDetails}</FieldLabel>
                    <Textarea
                      id="bookingDetails"
                      name="message"
                      placeholder={t.contact.projectDetailsPlaceholder}
                      rows={4}
                      required
                      className={styles["contact-booking__textarea"]}
                    />
                  </Field>

                  {/* Выбор метода отправки */}
                  <Field>
                    <FieldLabel>{t.contact.sendMethod}</FieldLabel>
                    <div className={styles["contact-booking__send-method"]}>
                      <button
                        type="button"
                        onClick={() => setSendMethod("telegram")}
                        className={`${styles["contact-booking__method-button"]} ${sendMethod === "telegram" ? styles["contact-booking__method-button--active"] : ""}`}
                      >
                        <MessageCircle className="h-4 w-4" />
                        {t.contact.sendViaTelegram}
                      </button>
                      <button
                        type="button"
                        onClick={() => setSendMethod("email")}
                        className={`${styles["contact-booking__method-button"]} ${sendMethod === "email" ? styles["contact-booking__method-button--active"] : ""}`}
                      >
                        <Mail className="h-4 w-4" />
                        {t.contact.sendViaEmail}
                      </button>
                    </div>
                  </Field>

                  {error && (
                    <p className={styles["contact-booking__error"]}>{error}</p>
                  )}

                  <Button type="submit" className={styles["contact-booking__submit-button"]} size="lg" disabled={isLoading}>
                    {isLoading ? (
                      t.contact.requesting
                    ) : (
                      <>
                        {t.contact.requestBooking}
                        <CalendarIcon className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>

                  <p className={styles["contact-booking__submit-note"]}>
                    {t.contact.confirmNote}
                  </p>
                </form>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}
