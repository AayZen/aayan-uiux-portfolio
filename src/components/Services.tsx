import { Palette, Globe, Smartphone, Box, Zap } from "lucide-react";

export const Services = () => {
  const services = [
    {
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user interfaces that prioritize user experience and business goals.",
      icon: Palette,
      gradient: "from-primary to-pink-500",
    },
    {
      title: "Web Design",
      description: "Designing responsive and modern websites that work seamlessly across all devices and platforms.",
      icon: Globe,
      gradient: "from-blue-500 to-primary",
    },
    {
      title: "App Design",
      description: "Crafting beautiful mobile applications with focus on usability and delightful interactions.",
      icon: Smartphone,
      gradient: "from-purple-500 to-primary",
    },
    {
      title: "Prototyping",
      description: "Building interactive prototypes to validate ideas and test user flows before development.",
      icon: Box,
      gradient: "from-green-500 to-primary",
    },
    {
      title: "Logo Design",
      description: "Creating memorable brand identities that capture your essence and resonate with your audience.",
      icon: Zap,
      gradient: "from-yellow-500 to-primary",
    },
  ];

  return (
    <section id="services" className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-background to-card/30">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-primary opacity-10 blur-3xl rounded-full" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="space-y-4 mb-16 animate-fade-in text-center">
          <h2 className="text-4xl lg:text-5xl font-bold">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive design solutions tailored to your needs
          </p>
          <div className="h-1 w-20 bg-gradient-primary rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-card border border-primary/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 h-full hover:shadow-card hover:-translate-y-2">
                {/* Gradient icon background */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-4 mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Hover effect line */}
                <div className="mt-6 h-1 w-0 bg-gradient-primary rounded-full group-hover:w-full transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
