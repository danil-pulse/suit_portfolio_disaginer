"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

export function DesignPortfolio() {
  const { t } = useLanguage()
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>()
  const [selectedProject, setSelectedProject] = useState<{
    id: number
    title: string
    category: string
    description: string
    tags: string[]
    image: string
    year: string
    client: string
  } | null>(null)

  const projects = [
    {
      id: 1,
      title: t.designProjects.bloomWellness.title,
      category: t.designProjects.bloomWellness.category,
      description: t.designProjects.bloomWellness.description,
      tags: [t.tags.branding, t.tags.logoDesign, t.tags.guidelines],
      image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80",
      year: "2025",
      client: t.designProjects.bloomWellness.client,
    },
    {
      id: 2,
      title: t.designProjects.artisanCoffee.title,
      category: t.designProjects.artisanCoffee.category,
      description: t.designProjects.artisanCoffee.description,
      tags: [t.tags.packaging, t.tags.print, t.tags.sustainable],
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&q=80",
      year: "2024",
      client: t.designProjects.artisanCoffee.client,
    },
    {
      id: 3,
      title: t.designProjects.techForward.title,
      category: t.designProjects.techForward.category,
      description: t.designProjects.techForward.description,
      tags: [t.tags.web, t.tags.uiux, t.tags.development],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      year: "2025",
      client: t.designProjects.techForward.client,
    },
    {
      id: 4,
      title: t.designProjects.urbanMagazine.title,
      category: t.designProjects.urbanMagazine.category,
      description: t.designProjects.urbanMagazine.description,
      tags: [t.tags.editorial, t.tags.layout, t.tags.typography],
      image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&q=80",
      year: "2024",
      client: t.designProjects.urbanMagazine.client,
    },
    {
      id: 5,
      title: t.designProjects.ecoApparel.title,
      category: t.designProjects.ecoApparel.category,
      description: t.designProjects.ecoApparel.description,
      tags: [t.tags.branding, t.tags.sustainable, t.tags.fashion],
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
      year: "2025",
      client: t.designProjects.ecoApparel.client,
    },
    {
      id: 6,
      title: t.designProjects.festivalPosters.title,
      category: t.designProjects.festivalPosters.category,
      description: t.designProjects.festivalPosters.description,
      tags: [t.tags.print, t.tags.illustration, t.tags.events],
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80",
      year: "2024",
      client: t.designProjects.festivalPosters.client,
    },
  ]

  return (
    <section
      id="design"
      ref={sectionRef}
      className="section-padding"
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
              {t.designPortfolio.subtitle}
            </p>
            <h2 className="section-title">
              {t.designPortfolio.title}
            </h2>
          </div>
          <p className="section-description">
            {t.designPortfolio.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={cn(
                "design-card hover-lift transition-all duration-500",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="design-card-image-container">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="design-card-image"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-3 right-3 md:top-4 md:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-primary text-primary-foreground p-1.5 md:p-2 rounded-full">
                    <ArrowUpRight className="h-3 w-3 md:h-4 md:w-4" />
                  </div>
                </div>
              </div>
              <div className="design-card-content">
                <div className="design-card-meta">
                  <span className="design-card-category">
                    {project.category}
                  </span>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-xs text-muted-foreground">{project.year}</span>
                </div>
                <h3 className="design-card-title">
                  {project.title}
                </h3>
                <p className="design-card-description">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 md:gap-2 mt-3 md:mt-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-[10px] md:text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Project Detail Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl w-[95vw] md:w-full p-0 overflow-hidden">
          {selectedProject && (
            <div className="animate-scale-in">
              <div className="relative aspect-[16/9] w-full bg-muted overflow-hidden">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
              <div className="p-4 md:p-6 lg:p-8">
                <DialogHeader className="mb-4 md:mb-6">
                  <div className="flex items-center gap-2 md:gap-3 mb-2">
                    <span className="text-xs tracking-widest uppercase text-accent">
                      {selectedProject.category}
                    </span>
                    <span className="text-muted-foreground">·</span>
                    <span className="text-xs text-muted-foreground">{selectedProject.year}</span>
                  </div>
                  <DialogTitle className="font-serif text-2xl md:text-3xl text-foreground">
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1.5 md:mb-2">
                      {t.designPortfolio.client}
                    </p>
                    <p className="text-foreground text-sm md:text-base">{selectedProject.client}</p>
                  </div>
                  
                  <div>
                    <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1.5 md:mb-2">
                      {t.designPortfolio.aboutProject}
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      {selectedProject.description}
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2 md:mb-3">
                      {t.designPortfolio.services}
                    </p>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {selectedProject.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
