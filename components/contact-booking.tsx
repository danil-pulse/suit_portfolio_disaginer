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
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
]

export function ContactBooking() {
  const [date, setDate] = useState<Date>()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { t } = useLanguage()
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>()

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
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section id="contact" className="section-padding">
        <div className="mx-auto max-w-3xl container-padding text-center animate-scale-in">
          <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-accent/10 text-accent mb-4 md:mb-6">
            <CheckCircle className="h-6 w-6 md:h-8 md:w-8" />
          </div>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground mb-3 md:mb-4">
            {t.contact.thankYou}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            {t.contact.thankYouMessage}
          </p>
          <Button 
            className="mt-6 md:mt-8 hover-lift"
            onClick={() => setIsSubmitted(false)}
          >
            {t.contact.sendAnother}
          </Button>
        </div>
      </section>
    )
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding"
    >
      <div className="mx-auto max-w-7xl container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20">
          {/* Contact Info */}
          <div
            className={cn(
              "transition-all duration-700",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            )}
          >
            <div className="section-header">
              <p className="section-subtitle">
                {t.contact.subtitle}
              </p>
              <h2 className="section-title mb-4 md:mb-6">
                {t.contact.title}
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8 md:mb-10 text-sm md:text-base">
              {t.contact.description}
            </p>

            <div className="space-y-4 md:space-y-6">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Mail className="h-4 w-4 md:h-5 md:w-5" />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-muted-foreground">{t.contact.email}</p>
                  <a href="mailto:hello@ilyaoblog.com" className="text-foreground hover:text-accent transition-colors text-sm md:text-base">
                    hello@ilyaoblog.com
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Phone className="h-4 w-4 md:h-5 md:w-5" />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-muted-foreground">{t.contact.phone}</p>
                  <a href="tel:+12125551234" className="text-foreground hover:text-accent transition-colors text-sm md:text-base">
                    +1 (212) 555-1234
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <MapPin className="h-4 w-4 md:h-5 md:w-5" />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-muted-foreground">{t.contact.studio}</p>
                  <p className="text-foreground whitespace-pre-line text-sm md:text-base">
                    {t.contact.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 md:mt-10 pt-8 md:pt-10 border-t border-border">
              <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">{t.contact.followAlong}</p>
              <div className="flex items-center gap-3 md:gap-4">
                <a
                  href="#"
                  className="contact-social-link"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4 md:h-5 md:w-5" />
                </a>
                <a
                  href="#"
                  className="contact-social-link"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div
            className={cn(
              "contact-form-container transition-all duration-700",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}
            style={{ transitionDelay: "200ms" }}
          >
            <Tabs defaultValue="inquiry" className="w-full">
              <TabsList className="w-full grid grid-cols-2 mb-6 md:mb-8">
                <TabsTrigger value="inquiry" className="text-xs md:text-sm">{t.contact.generalInquiry}</TabsTrigger>
                <TabsTrigger value="booking" className="text-xs md:text-sm">{t.contact.bookSession}</TabsTrigger>
              </TabsList>

              <TabsContent value="inquiry">
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <FieldGroup className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    <Field>
                      <FieldLabel htmlFor="firstName" className="text-xs md:text-sm">{t.contact.firstName}</FieldLabel>
                      <Input id="firstName" placeholder="John" required className="text-sm md:text-base" />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="lastName" className="text-xs md:text-sm">{t.contact.lastName}</FieldLabel>
                      <Input id="lastName" placeholder="Doe" required className="text-sm md:text-base" />
                    </Field>
                  </FieldGroup>

                  <Field>
                    <FieldLabel htmlFor="email" className="text-xs md:text-sm">{t.contact.emailLabel}</FieldLabel>
                    <Input id="email" type="email" placeholder="john@example.com" required className="text-sm md:text-base" />
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="service" className="text-xs md:text-sm">{t.contact.serviceInterested}</FieldLabel>
                    <Select>
                      <SelectTrigger className="text-sm md:text-base">
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
                    <FieldLabel htmlFor="message" className="text-xs md:text-sm">{t.contact.message}</FieldLabel>
                    <Textarea
                      id="message"
                      placeholder={t.contact.messagePlaceholder}
                      rows={4}
                      required
                      className="text-sm md:text-base resize-none"
                    />
                  </Field>

                  <Button type="submit" className="w-full hover-lift" size="lg" disabled={isLoading}>
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
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <FieldGroup className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    <Field>
                      <FieldLabel htmlFor="bookingFirstName" className="text-xs md:text-sm">{t.contact.firstName}</FieldLabel>
                      <Input id="bookingFirstName" placeholder="John" required className="text-sm md:text-base" />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="bookingLastName" className="text-xs md:text-sm">{t.contact.lastName}</FieldLabel>
                      <Input id="bookingLastName" placeholder="Doe" required className="text-sm md:text-base" />
                    </Field>
                  </FieldGroup>

                  <FieldGroup className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    <Field>
                      <FieldLabel htmlFor="bookingEmail" className="text-xs md:text-sm">{t.contact.emailLabel}</FieldLabel>
                      <Input id="bookingEmail" type="email" placeholder="john@example.com" required className="text-sm md:text-base" />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="bookingPhone" className="text-xs md:text-sm">{t.contact.phoneLabel}</FieldLabel>
                      <Input id="bookingPhone" type="tel" placeholder="+1 (555) 000-0000" className="text-sm md:text-base" />
                    </Field>
                  </FieldGroup>

                  <Field>
                    <FieldLabel htmlFor="bookingService" className="text-xs md:text-sm">{t.contact.serviceType}</FieldLabel>
                    <Select>
                      <SelectTrigger className="text-sm md:text-base">
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

                  <FieldGroup className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    <Field>
                      <FieldLabel className="text-xs md:text-sm">{t.contact.preferredDate}</FieldLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal text-sm md:text-base",
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
                      <FieldLabel htmlFor="timeSlot" className="text-xs md:text-sm">{t.contact.preferredTime}</FieldLabel>
                      <Select>
                        <SelectTrigger className="text-sm md:text-base">
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
                    <FieldLabel htmlFor="bookingDetails" className="text-xs md:text-sm">{t.contact.projectDetails}</FieldLabel>
                    <Textarea
                      id="bookingDetails"
                      placeholder={t.contact.projectDetailsPlaceholder}
                      rows={3}
                      required
                      className="text-sm md:text-base resize-none"
                    />
                  </Field>

                  <Button type="submit" className="w-full hover-lift" size="lg" disabled={isLoading}>
                    {isLoading ? (
                      t.contact.requesting
                    ) : (
                      <>
                        {t.contact.requestBooking}
                        <CalendarIcon className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>

                  <p className="text-[10px] md:text-xs text-center text-muted-foreground">
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
