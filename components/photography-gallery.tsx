"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "@/lib/language-context"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

export function PhotographyGallery() {
  const { t } = useLanguage()
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>()
  const [selectedPhoto, setSelectedPhoto] = useState<{
    id: number
    src: string
    alt: string
    category: string
    title: string
    description: string
  } | null>(null)
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", label: t.photography.categories.all },
    { id: "portrait", label: t.photography.categories.portrait },
    { id: "landscape", label: t.photography.categories.landscape },
    { id: "editorial", label: t.photography.categories.editorial },
    { id: "events", label: t.photography.categories.events },
  ]

  const photos = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
      alt: t.photos.naturalLightPortrait.title,
      category: "portrait",
      title: t.photos.naturalLightPortrait.title,
      description: t.photos.naturalLightPortrait.description,
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      alt: t.photos.alpineDawn.title,
      category: "landscape",
      title: t.photos.alpineDawn.title,
      description: t.photos.alpineDawn.description,
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
      alt: t.photos.vogueFeature.title,
      category: "editorial",
      title: t.photos.vogueFeature.title,
      description: t.photos.vogueFeature.description,
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
      alt: t.photos.summerWedding.title,
      category: "events",
      title: t.photos.summerWedding.title,
      description: t.photos.summerWedding.description,
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      alt: t.photos.executivePortrait.title,
      category: "portrait",
      title: t.photos.executivePortrait.title,
      description: t.photos.executivePortrait.description,
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
      alt: t.photos.foggyMorning.title,
      category: "landscape",
      title: t.photos.foggyMorning.title,
      description: t.photos.foggyMorning.description,
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
      alt: t.photos.studioSession.title,
      category: "editorial",
      title: t.photos.studioSession.title,
      description: t.photos.studioSession.description,
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
      alt: t.photos.techSummit.title,
      category: "events",
      title: t.photos.techSummit.title,
      description: t.photos.techSummit.description,
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
      alt: t.photos.beautyEditorial.title,
      category: "portrait",
      title: t.photos.beautyEditorial.title,
      description: t.photos.beautyEditorial.description,
    },
  ]

  const filteredPhotos = activeCategory === "all" 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory)

  return (
    <section
      id="photography"
      ref={sectionRef}
      className="section-padding bg-secondary/30"
    >
      <div className="mx-auto max-w-7xl container-padding">
        <div
          className={cn(
            "flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6 mb-8 md:mb-12 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="section-header mb-0">
            <p className="section-subtitle">
              {t.photography.subtitle}
            </p>
            <h2 className="section-title">
              {t.photography.title}
            </h2>
          </div>
          <p className="section-description">
            {t.photography.description}
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveCategory}>
          <TabsList
            className={cn(
              "category-tabs transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: "100ms" }}
          >
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="category-tab"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeCategory} className="mt-0">
            <div className="photo-grid">
              {filteredPhotos.map((photo, index) => (
                <button
                  key={photo.id}
                  onClick={() => setSelectedPhoto(photo)}
                  className={cn(
                    "photo-card relative transition-all duration-500",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                  style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="photo-card-image"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="photo-card-overlay" />
                  <div className="photo-card-content">
                    <p className="photo-card-title">{photo.title}</p>
                    <p className="photo-card-description">{photo.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-5xl w-full p-0 bg-black border-0 overflow-hidden" aria-describedby={undefined}>
          <DialogTitle className="sr-only">{selectedPhoto?.title || "Photo"}</DialogTitle>
          {selectedPhoto && (
            <div className="relative animate-scale-in">
              <div className="relative aspect-[3/2] w-full">
                <Image
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-serif text-xl md:text-2xl">{selectedPhoto.title}</p>
                <p className="text-white/70 mt-1 text-sm md:text-base">{selectedPhoto.description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
