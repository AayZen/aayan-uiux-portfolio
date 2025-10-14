import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles, Award, Users, Briefcase } from "lucide-react";
import profileImage from "@/assets/profile.png";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    { icon: Briefcase, label: "Projects", value: "15+" },
    { icon: Users, label: "Happy Clients", value: "10+" },
    { icon: Award, label: "Experience", value: "2+ Years" },
  ];

  const floatingBadges = [
    { text: "Figma", position: "top-20 -left-4", delay: "0s" },
    { text: "React", position: "top-40 -right-8", delay: "0.5s" },
    { text: "UI/UX", position: "bottom-32 -left-8", delay: "1s" },
    { text: "CSS", position: "bottom-20 -right-6", delay: "1.5s" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Available for Freelance</span>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground text-lg font-medium">👋 Hello, I'm</p>
              <h1 className="text-6xl lg:text-8xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-foreground via-primary to-pink-500 bg-clip-text text-transparent">
                  Aayan Kumar
                </span>
              </h1>
              <div className="flex flex-wrap items-center gap-3 text-xl lg:text-2xl">
                <span className="text-muted-foreground font-medium">UI/UX Designer</span>
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent font-semibold">Frontend Developer</span>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              I craft clean, modern, and human-centered digital experiences that blend 
              <span className="text-foreground font-medium"> design thinking</span> with 
              <span className="text-foreground font-medium"> functionality</span>. 
              Passionate about creating interactive experiences that resonate with users.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="space-y-2 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-pink-500/20 flex items-center justify-center border border-primary/20">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-pink-500 hover:opacity-90 text-white shadow-glow transition-all hover:scale-105 group"
                onClick={() => scrollToSection("portfolio")}
              >
                View My Work
                <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary/20 bg-background/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary transition-all hover:scale-105"
                onClick={() => scrollToSection("contact")}
              >
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative animate-scale-in lg:order-last">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Large gradient glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-pink-500 to-blue-500 rounded-3xl opacity-20 blur-3xl animate-pulse" />
              
              {/* Floating skill badges */}
              {floatingBadges.map((badge, index) => (
                <div
                  key={index}
                  className={`absolute ${badge.position} px-4 py-2 bg-card/80 backdrop-blur-md border border-primary/20 rounded-full text-sm font-medium shadow-lg animate-float hidden lg:block z-20`}
                  style={{ animationDelay: badge.delay }}
                >
                  {badge.text}
                </div>
              ))}

              {/* Image container with glassmorphism */}
              <div className="relative rounded-3xl overflow-hidden border border-primary/20 shadow-2xl backdrop-blur-sm bg-gradient-to-br from-card/50 to-card/30">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-pink-500/10" />
                <img 
                  src={profileImage} 
                  alt="Aayan Kumar - UI/UX Designer"
                  className="w-full h-auto object-cover relative z-10"
                />
              </div>

              {/* Enhanced floating badge */}
              <div className="absolute -bottom-8 -left-8 bg-gradient-to-br from-card to-card/80 backdrop-blur-xl border border-primary/20 rounded-2xl p-6 shadow-2xl animate-float lg:block hidden z-20">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-pink-500 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-card animate-pulse" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Currently</p>
                    <p className="font-bold text-lg">Open to Work</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => scrollToSection("about")}>
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-muted-foreground">Scroll</span>
            <ArrowDown className="w-6 h-6 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};
