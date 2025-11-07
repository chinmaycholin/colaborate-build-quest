import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Transforming Ideas Into
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mt-2">
              Intelligent Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            AI-powered IT services that drive innovation, enhance efficiency, and deliver exceptional results for modern businesses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="group" asChild>
              <Link to="/contact">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
    </section>
  );
};

export default HeroSection;
