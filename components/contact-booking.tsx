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
      <section id="contact" className="py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6">
            <CheckCircle className="h-8 w-8" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            {t.contact.thankYou}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.contact.thankYouMessage}
          </p>
          <Button 
            className="mt-8"
            onClick={() => setIsSubmitted(false)}
          >
            {t.contact.sendAnother}
          </Button>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div>
            <p className="text-sm tracking-widest uppercase text-muted-foreground mb-2">
              {t.contact.subtitle}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              {t.contact.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              {t.contact.description}
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-secondary text-foreground">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t.contact.email}</p>
                  <a href="mailto:hello@ilyaoblog.com" className="text-foreground hover:text-accent transition-colors">
                    hello@ilyaoblog.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-secondary text-foreground">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t.contact.phone}</p>
                  <a href="tel:+12125551234" className="text-foreground hover:text-accent transition-colors">
                    +1 (212) 555-1234
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-secondary text-foreground">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t.contact.studio}</p>
                  <p className="text-foreground whitespace-pre-line">
                    {t.contact.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10 pt-10 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">{t.contact.followAlong}</p>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="p-3 rounded-lg bg-secondary text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="p-3 rounded-lg bg-secondary text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card border border-border rounded-2xl p-6 lg:p-8">
            <Tabs defaultValue="inquiry" className="w-full">
              <TabsList className="w-full grid grid-cols-2 mb-8">
                <TabsTrigger value="inquiry">{t.contact.generalInquiry}</TabsTrigger>
                <TabsTrigger value="booking">{t.contact.bookSession}</TabsTrigger>
              </TabsList>

              <TabsContent value="inquiry">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <FieldGroup className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                <form onSubmit={handleSubmit} className="space-y-6">
                  <FieldGroup className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field>
                      <FieldLabel htmlFor="bookingFirstName">{t.contact.firstName}</FieldLabel>
                      <Input id="bookingFirstName" placeholder="John" required />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="bookingLastName">{t.contact.lastName}</FieldLabel>
                      <Input id="bookingLastName" placeholder="Doe" required />
                    </Field>
                  </FieldGroup>

                  <FieldGroup className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

                  <FieldGroup className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

                  <p className="text-xs text-center text-muted-foreground">
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
