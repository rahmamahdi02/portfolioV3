import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, MapPin } from "lucide-react"

import { useState } from "react"

interface ExperienceCardProps {
  title: string
  company: string
  location: string
  duration: string
  description: string
  technologies: string[]
  type?: "work" | "project" | "education"
  companyLogo?: string
}

export function ExperienceCard({
  title,
  company,
  location,
  duration,
  description,
  technologies,
  type = "work",
  companyLogo,
}: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const shouldTruncate = description.length > 150
  const displayDescription = shouldTruncate && !isExpanded ? description.slice(0, 150) + "..." : description

  return (
    <Card className="group relative overflow-hidden border-border bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <div className="shrink-0 mt-1">
              <div className="w-12 h-12 rounded-lg bg-muted/50 border border-border/50 flex items-center justify-center overflow-hidden">
                {companyLogo ? (
                  <img
                    src={companyLogo || "/placeholder.svg"}
                    alt={`${company} logo`}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <img
                    src={`/abstract-geometric-shapes.png?key=7950t&height=48&width=48&query=${encodeURIComponent(company + " company logo")}`}
                    alt={`${company} logo`}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain opacity-60"
                  />
                )}
              </div>
            </div>

            <div className="space-y-1 flex-1">
              <CardTitle className="text-lg font-semibold text-card-foreground leading-tight">{title}</CardTitle>
              <CardDescription className="text-base font-medium text-primary">{company}</CardDescription>
            </div>
          </div>
          <Badge variant="secondary" className="shrink-0 bg-secondary/20 text-secondary-foreground border-secondary/30">
            {type}
          </Badge>
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
          <div className="flex items-center gap-1">
            <CalendarDays className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="mb-4">
          <p className="text-card-foreground/90 leading-relaxed text-pretty">{displayDescription}</p>
          {shouldTruncate && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-primary hover:text-primary/80 text-sm font-medium mt-2 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 rounded"
            >
              {isExpanded ? "Read less" : "Read more"}
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="outline"
              className="text-xs bg-accent/10 text-accent-foreground border-accent/30 hover:bg-accent/20 transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default ExperienceCard
