import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-primary/10">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Aayan Kumar. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Designed & Built with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>by Aayan Kumar</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
