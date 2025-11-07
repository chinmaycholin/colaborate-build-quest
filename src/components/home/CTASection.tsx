import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary to-accent p-12 md:p-20">
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90">
              Let's discuss how our AI-powered solutions can help you achieve your goals. Get in touch with our team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" variant="secondary" className="group" asChild>
                <Link to="/contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/careers">View Careers</Link>
              </Button>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-foreground/10 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
