"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import styles from "./LanguageSwitcher.module.css"

export function LanguageSwitcher({ className }: { className?: string }) {
  const { language, setLanguage } = useLanguage()

  return (
    <div className={cn(styles["language-switcher"], className)}>
      <Button
        variant="ghost"
        size="sm"
        className={cn(
          "px-2 py-1 h-auto text-sm font-medium",
          language === "en" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
        )}
        onClick={() => setLanguage("en")}
      >
        EN
      </Button>
      <span className={styles["language-switcher__separator"]}>/</span>
      <Button
        variant="ghost"
        size="sm"
        className={cn(
          "px-2 py-1 h-auto text-sm font-medium",
          language === "ru" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
        )}
        onClick={() => setLanguage("ru")}
      >
        RU
      </Button>
    </div>
  )
}
