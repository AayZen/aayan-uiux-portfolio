import { GraduationCap } from "lucide-react";

export const About = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Lovely Professional University",
      period: "2022 – 2026",
      icon: "🎓",
    },
    {
      degree: "12th Grade",
      institution: "DAV Public School, Hansraj Nagar, Rohtas, Bihar",
      period: "2021 – 2022",
      icon: "📚",
    },
    {
      degree: "10th Grade",
      institution: "Sun Beam Public School, Dehri on Sone, Bihar",
      period: "2020 – 2021",
      icon: "📖",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-primary opacity-10 blur-3xl rounded-full" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-primary rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div className="space-y-6 animate-slide-up">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate UI/UX Designer with a growing expertise in frontend development. 
              My approach is rooted in <span className="text-foreground font-semibold">empathy</span> and 
              <span className="text-foreground font-semibold"> problem-solving</span>, ensuring every design 
              decision serves both the user and business goals.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in the power of design to create meaningful connections between people and technology. 
              My work focuses on crafting <span className="text-primary font-semibold">intuitive interfaces</span> that 
              not only look beautiful but also deliver exceptional user experiences.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently pursuing my B.Tech in Computer Science, I'm continuously expanding my skill set 
              to bridge the gap between design and development, creating solutions that are both 
              aesthetically pleasing and technically sound.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="space-y-6 relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

              {education.map((edu, index) => (
                <div 
                  key={index} 
                  className="relative pl-12 pb-8 group"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                    {edu.icon}
                  </div>

                  <div className="space-y-2 bg-card/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6 hover:border-primary/30 transition-colors">
                    <p className="text-sm text-primary font-semibold">{edu.period}</p>
                    <h4 className="text-lg font-semibold">{edu.degree}</h4>
                    <p className="text-muted-foreground">{edu.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
