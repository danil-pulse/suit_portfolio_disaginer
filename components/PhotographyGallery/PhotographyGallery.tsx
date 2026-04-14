"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "@/lib/language-context"
import styles from "./PhotographyGallery.module.css"

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
    <section id="photography" className={styles["photography-gallery"]}>
      <div className={styles["photography-gallery__container"]}>
        <div className={styles["photography-gallery__header"]}>
          <div>
            <p className={styles["photography-gallery__subtitle"]}>
              {t.photography.subtitle}
            </p>
            <h2 className={styles["photography-gallery__title"]}>
              {t.photography.title}
            </h2>
          </div>
          <p className={styles["photography-gallery__description"]}>
            {t.photography.description}
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveCategory}>
          <TabsList className={styles["photography-gallery__filters"]}>
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className={`${styles["photography-gallery__filter-button"]} ${
                  activeCategory === category.id ? styles["photography-gallery__filter-button--active"] : ""
                }`}
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeCategory} className="mt-0">
            <div className={styles["photography-gallery__grid"]}>
              {filteredPhotos.map((photo) => (
                <button
                  key={photo.id}
                  onClick={() => setSelectedPhoto(photo)}
                  className={styles["photography-gallery__photo-card"]}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className={styles["photography-gallery__photo-image"]}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className={styles["photography-gallery__photo-overlay"]} />
                  <div className={styles["photography-gallery__photo-content"]}>
                    <p className={styles["photography-gallery__photo-title"]}>{photo.title}</p>
                    <p className={styles["photography-gallery__photo-description"]}>{photo.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className={styles["photography-gallery__lightbox"]}>
          {selectedPhoto && (
            <div className={styles["photography-gallery__lightbox-wrapper"]}>
              <div className={styles["photography-gallery__lightbox-image-container"]}>
                <Image
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  fill
                  className={styles["photography-gallery__lightbox-image"]}
                  sizes="100vw"
                />
              </div>
              <div className={styles["photography-gallery__lightbox-content"]}>
                <p className={styles["photography-gallery__lightbox-title"]}>{selectedPhoto.title}</p>
                <p className={styles["photography-gallery__lightbox-description"]}>{selectedPhoto.description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
