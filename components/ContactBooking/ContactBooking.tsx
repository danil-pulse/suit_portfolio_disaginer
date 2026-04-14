"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar as CalendarIcon, Mail, MapPin, Phone, Instagram, Linkedin, Send, CheckCircle } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field"
import { useLanguage } from "@/lib/language-context"
import styles from "./ContactBooking.module.css"

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
]

export function ContactBooking() {
  const [date, setDate] = useState<Date>()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsLoading(false)
    setIsSubmitted(true)
  }

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
                <a
                  href="#"
                  className={styles["contact-booking__social-link"]}
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className={styles["contact-booking__social-link"]}
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className={styles["contact-booking__form-section"]}>
            <Tabs defaultValue="inquiry" className={styles["contact-booking__tabs"]}>
              <TabsList className={styles["contact-booking__tabs-list"]}>
                <TabsTrigger value="inquiry">{t.contact.generalInquiry}</TabsTrigger>
                <TabsTrigger value="booking">{t.contact.bookSession}</TabsTrigger>
              </TabsList>

              <TabsContent value="inquiry">
                <form onSubmit={handleSubmit} className={styles["contact-booking__form"]}>
                  <FieldGroup className={styles["contact-booking__field-row"]}>
                    <Field>
                      <FieldLabel htmlFor="firstName">{t.contact.firstName}</FieldLabel>
                      <Input id="firstName" placeholder="John" required />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="lastName">{t.contact.lastName}</FieldLabel>
                      <Input id="lastName" placeholder="Doe" required />
                    </Field>
                  </FieldGroup>

                  <Field>
                    <FieldLabel htmlFor="email">{t.contact.emailLabel}</FieldLabel>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="service">{t.contact.serviceInterested}</FieldLabel>
                    <Select>
                      <SelectTrigger>
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
                      placeholder={t.contact.messagePlaceholder}
                      rows={5}
                      required
                    />
                  </Field>

                  <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
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
                      <Input id="bookingFirstName" placeholder="John" required />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="bookingLastName">{t.contact.lastName}</FieldLabel>
                      <Input id="bookingLastName" placeholder="Doe" required />
                    </Field>
                  </FieldGroup>

                  <FieldGroup className={styles["contact-booking__field-row"]}>
                    <Field>
                      <FieldLabel htmlFor="bookingEmail">{t.contact.emailLabel}</FieldLabel>
                      <Input id="bookingEmail" type="email" placeholder="john@example.com" required />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="bookingPhone">{t.contact.phoneLabel}</FieldLabel>
                      <Input id="bookingPhone" type="tel" placeholder="+1 (555) 000-0000" />
                    </Field>
                  </FieldGroup>

                  <Field>
                    <FieldLabel htmlFor="bookingService">{t.contact.serviceType}</FieldLabel>
                    <Select>
                      <SelectTrigger>
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
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !date && "text-muted-foreground"
                            )}
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
                      <Select>
                        <SelectTrigger>
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
                      placeholder={t.contact.projectDetailsPlaceholder}
                      rows={4}
                      required
                    />
                  </Field>

                  <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
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
