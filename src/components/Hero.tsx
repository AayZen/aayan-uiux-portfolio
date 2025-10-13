import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import profileImage from "@/assets/profile.png";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background gradient blob */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-primary opacity-20 blur-3xl rounded-full animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-secondary opacity-20 blur-3xl rounded-full animate-float" style={{ animationDelay: "1.5s" }} />
      
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-muted-foreground text-lg">👋 Hello, I'm</p>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                Aayan Kumar
              </h1>
              <div className="flex items-center gap-3 text-2xl lg:text-3xl">
                <span className="text-muted-foreground">UI/UX Designer</span>
                <span className="text-primary">•</span>
                <span className="text-primary">Frontend Dev</span>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              I craft clean, modern, and human-centered digital experiences that blend design thinking with functionality. 
              Passionate about creating interactive experiences that resonate with users.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all hover:scale-105"
                onClick={() => scrollToSection("portfolio")}
              >
                View My Work
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary/20 hover:bg-primary/10 hover:border-primary transition-all"
                onClick={() => scrollToSection("contact")}
              >
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative animate-scale-in lg:order-last">
            <div className="relative w-full max-w-md mx-auto">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl opacity-20 blur-2xl" />
              
              {/* Image container */}
              <div className="relative rounded-3xl overflow-hidden border border-primary/20 shadow-card backdrop-blur-sm">
                <img 
                  src={profileImage} 
                  alt="Aayan Kumar - UI/UX Designer"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-card border border-primary/20 rounded-2xl p-6 shadow-card animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                  <div>
                    <p className="text-sm text-muted-foreground">Available for</p>
                    <p className="font-semibold">Freelance Work</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
};
