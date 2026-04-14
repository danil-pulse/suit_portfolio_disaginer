"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import styles from "./DesignPortfolio.module.css"

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
    <section id="design" className={styles["design-portfolio"]}>
      <div className={styles["design-portfolio__container"]}>
        <div className={styles["design-portfolio__header"]}>
          <div>
            <p className={styles["design-portfolio__subtitle"]}>
              {t.designPortfolio.subtitle}
            </p>
            <h2 className={styles["design-portfolio__title"]}>
              {t.designPortfolio.title}
            </h2>
          </div>
          <p className={styles["design-portfolio__description"]}>
            {t.designPortfolio.description}
          </p>
        </div>

        <div className={styles["design-portfolio__grid"]}>
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={styles["design-portfolio__project-card"]}
            >
              <div className={styles["design-portfolio__image-container"]}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={styles["design-portfolio__project-image"]}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className={styles["design-portfolio__project-arrow"]}>
                  <div className={styles["design-portfolio__arrow-icon"]}>
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
              <div className={styles["design-portfolio__project-content"]}>
                <div className={styles["design-portfolio__project-meta"]}>
                  <span className={styles["design-portfolio__project-category"]}>
                    {project.category}
                  </span>
                  <span className={styles["design-portfolio__project-separator"]}>·</span>
                  <span className={styles["design-portfolio__project-year"]}>{project.year}</span>
                </div>
                <h3 className={styles["design-portfolio__project-title"]}>
                  {project.title}
                </h3>
                <p className={styles["design-portfolio__project-description"]}>
                  {project.description}
                </p>
                <div className={styles["design-portfolio__project-tags"]}>
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
        <DialogContent className={styles["design-portfolio__modal"]}>
          {selectedProject && (
            <>
              <div className={styles["design-portfolio__modal-image-container"]}>
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className={styles["design-portfolio__modal-image"]}
                  sizes="100vw"
                />
              </div>
              <div className={styles["design-portfolio__modal-content"]}>
                <DialogHeader className={styles["design-portfolio__modal-header"]}>
                  <div className={styles["design-portfolio__modal-meta"]}>
                    <span className={styles["design-portfolio__modal-category"]}>
                      {selectedProject.category}
                    </span>
                    <span className={styles["design-portfolio__modal-separator"]}>·</span>
                    <span className={styles["design-portfolio__modal-year"]}>{selectedProject.year}</span>
                  </div>
                  <DialogTitle className={styles["design-portfolio__modal-title"]}>
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>
                
                <div className={styles["design-portfolio__modal-details"]}>
                  <div>
                    <p className={styles["design-portfolio__detail-label"]}>
                      {t.designPortfolio.client}
                    </p>
                    <p className={styles["design-portfolio__detail-value"]}>{selectedProject.client}</p>
                  </div>
                  
                  <div>
                    <p className={styles["design-portfolio__detail-label"]}>
                      {t.designPortfolio.aboutProject}
                    </p>
                    <p className={styles["design-portfolio__detail-text"]}>
                      {selectedProject.description}
                    </p>
                  </div>
                  
                  <div>
                    <p className={styles["design-portfolio__detail-label"]}>
                      {t.designPortfolio.services}
                    </p>
                    <div className={styles["design-portfolio__modal-tags"]}>
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
