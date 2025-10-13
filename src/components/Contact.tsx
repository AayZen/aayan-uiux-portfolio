import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, Phone, Linkedin, Github, Dribbble, Figma, FileDown } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    // Create mailto link
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = `mailto:aayankumar312@gmail.com?subject=${subject}&body=${body}`;
    
    toast.success("Opening your email client...");
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/aayzen/",
      color: "hover:text-blue-500",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/aayan312",
      color: "hover:text-gray-400",
    },
    {
      name: "Dribbble",
      icon: Dribbble,
      url: "https://dribbble.com/AayZen",
      color: "hover:text-pink-500",
    },
    {
      name: "Figma",
      icon: Figma,
      url: "https://www.figma.com/@aayankumar",
      color: "hover:text-purple-500",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-primary opacity-10 blur-3xl rounded-full" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="space-y-4 mb-16 animate-fade-in text-center">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's collaborate on your next project. I'm always open to discussing new opportunities.
          </p>
          <div className="h-1 w-20 bg-gradient-primary rounded-full mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <a 
                href="mailto:aayankumar312@gmail.com"
                className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm border border-primary/10 rounded-xl hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold group-hover:text-primary transition-colors">aayankumar312@gmail.com</p>
                </div>
              </a>

              <a 
                href="tel:+917870705645"
                className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm border border-primary/10 rounded-xl hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-semibold group-hover:text-primary transition-colors">+91 78707 5645</p>
                </div>
              </a>

              <a 
                href="https://enhancv-pdfs.s3.amazonaws.com/9477d7ac10d225b961f8c23a155ae4d0-pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm border border-primary/10 rounded-xl hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FileDown className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Resume</p>
                  <p className="font-semibold group-hover:text-primary transition-colors">Download CV</p>
                </div>
              </a>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/10 flex items-center justify-center hover:border-primary/30 transition-all hover:scale-110 ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-card/50 backdrop-blur-sm border-primary/10 focus:border-primary transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-card/50 backdrop-blur-sm border-primary/10 focus:border-primary transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-card/50 backdrop-blur-sm border-primary/10 focus:border-primary transition-colors resize-none"
                />
              </div>

              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all hover:scale-105"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
