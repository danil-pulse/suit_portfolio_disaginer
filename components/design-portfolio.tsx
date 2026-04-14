"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function DesignPortfolio() {
  const { t } = useLanguage()
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
    <section id="design" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-sm tracking-widest uppercase text-muted-foreground mb-2">
              {t.designPortfolio.subtitle}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
              {t.designPortfolio.title}
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-pretty">
            {t.designPortfolio.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group text-left bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-primary text-primary-foreground p-2 rounded-full">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs tracking-widest uppercase text-muted-foreground">
                    {project.category}
                  </span>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-xs text-muted-foreground">{project.year}</span>
                </div>
                <h3 className="font-serif text-2xl text-foreground group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-muted-foreground text-sm line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
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
        <DialogContent className="max-w-3xl w-full p-0 overflow-hidden">
          {selectedProject && (
            <>
              <div className="relative aspect-[16/9] w-full bg-muted">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
              <div className="p-8">
                <DialogHeader className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs tracking-widest uppercase text-accent">
                      {selectedProject.category}
                    </span>
                    <span className="text-muted-foreground">·</span>
                    <span className="text-xs text-muted-foreground">{selectedProject.year}</span>
                  </div>
                  <DialogTitle className="font-serif text-3xl text-foreground">
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">
                      {t.designPortfolio.client}
                    </p>
                    <p className="text-foreground">{selectedProject.client}</p>
                  </div>
                  
                  <div>
                    <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">
                      {t.designPortfolio.aboutProject}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-xs tracking-widest uppercase text-muted-foreground mb-3">
                      {t.designPortfolio.services}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
