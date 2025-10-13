import { Palette, Users, Code, Cloud, Heart } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Design & Prototyping",
      icon: Palette,
      skills: ["Figma", "Adobe XD", "Canva", "Framer"],
      color: "from-primary to-pink-500",
    },
    {
      title: "UX Methods",
      icon: Users,
      skills: ["Wireframing", "User Flows", "Information Architecture", "Usability Testing"],
      color: "from-purple-500 to-primary",
    },
    {
      title: "Frontend",
      icon: Code,
      skills: ["HTML5", "CSS3", "JavaScript (Basic)"],
      color: "from-blue-500 to-primary",
    },
    {
      title: "Technologies",
      icon: Cloud,
      skills: ["AWS", "Docker", "Git", "Azure"],
      color: "from-green-500 to-primary",
    },
    {
      title: "Soft Skills",
      icon: Heart,
      skills: ["Problem-Solving", "Adaptability", "Collaboration"],
      color: "from-red-500 to-primary",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-secondary opacity-10 blur-3xl rounded-full" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="space-y-4 mb-16 animate-fade-in text-center">
          <h2 className="text-4xl lg:text-5xl font-bold">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A diverse toolkit for creating exceptional digital experiences
          </p>
          <div className="h-1 w-20 bg-gradient-primary rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 h-full hover:shadow-card hover:-translate-y-1">
                {/* Icon with gradient background */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} p-3 mb-6 group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-full h-full text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>

                {/* Skills list */}
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
