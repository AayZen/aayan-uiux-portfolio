import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Portfolio = () => {
  const projects = [
    {
      title: "GeniXera",
      period: "07/2024 – 01/2025",
      description: "Web3 Social Media Platform featuring decentralized content sharing, tokenization, monetization features, and comprehensive creator dashboards.",
      tags: ["Web3", "Social Media", "Tokenization", "Dashboard"],
      link: "https://www.figma.com/design/cGQmfE7E4KVmV29KtUyaDV/GeniXera-App?node-id=70-161&t=SzTIvfBRID039EUr-1",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Medora",
      period: "08/2024 – 10/2024",
      description: "Healthcare application focused on secure health data management, streamlined patient experience, and intuitive medical interfaces.",
      tags: ["Healthcare", "Data Security", "Patient Experience", "Medical UI"],
      link: "https://www.figma.com/design/ZciAXOE4ZWqiIUbpV2BZch/Medora---Your-Health--Our-Priority?t=zKMfrb67FJc3IV8I-0",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "WANDERLUST",
      period: "11/2023 – 12/2023",
      description: "Travel website with AI assistant integration, eco-friendly travel focus, comprehensive wireframes, and interactive prototypes.",
      tags: ["Travel", "AI Assistant", "Eco-Friendly", "Prototyping"],
      link: "https://www.figma.com/design/igYY1RiHQJLkewQhTRrioA/WANDERLUST?node-id=0-1",
      gradient: "from-green-500 to-teal-500",
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-secondary opacity-10 blur-3xl rounded-full" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="space-y-4 mb-16 animate-fade-in text-center">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and design explorations
          </p>
          <div className="h-1 w-20 bg-gradient-primary rounded-full mx-auto" />
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-card">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Project number with gradient */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-transform`}>
                    {(index + 1).toString().padStart(2, '0')}
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-primary font-semibold">{project.period}</p>
                      </div>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all group-hover:shadow-glow self-start"
                        onClick={() => window.open(project.link, '_blank')}
                      >
                        View Design
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </Button>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
