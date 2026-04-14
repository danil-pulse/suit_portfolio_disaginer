"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "@/lib/language-context"

export function PhotographyGallery() {
  const { t } = useLanguage()
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
    <section id="photography" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-sm tracking-widest uppercase text-muted-foreground mb-2">
              {t.photography.subtitle}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
              {t.photography.title}
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-pretty">
            {t.photography.description}
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveCategory}>
          <TabsList className="w-full flex flex-wrap justify-start gap-2 h-auto bg-transparent p-0 mb-8">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-6 py-2 text-sm tracking-wide uppercase border border-border transition-all"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeCategory} className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {filteredPhotos.map((photo, index) => (
                <button
                  key={photo.id}
                  onClick={() => setSelectedPhoto(photo)}
                  className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-muted cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white font-serif text-xl">{photo.title}</p>
                    <p className="text-white/70 text-sm mt-1">{photo.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-5xl w-full p-0 bg-black border-0 overflow-hidden">
          {selectedPhoto && (
            <div className="relative">
              <div className="relative aspect-[3/2] w-full">
                <Image
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-serif text-2xl">{selectedPhoto.title}</p>
                <p className="text-white/70 mt-1">{selectedPhoto.description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
