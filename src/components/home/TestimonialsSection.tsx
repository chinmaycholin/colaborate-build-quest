import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "MasterSolis transformed our infrastructure with their AI-powered solutions. The results exceeded our expectations, and their team was exceptional throughout the process.",
      rating: 5,
      initials: "SJ",
    },
    {
      name: "Michael Chen",
      role: "CEO, InnovateLabs",
      content: "Working with MasterSolis was a game-changer for our business. Their expertise in cloud solutions and AI integration helped us scale rapidly.",
      rating: 5,
      initials: "MC",
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager, DataFlow",
      content: "The custom software development by MasterSolis was exactly what we needed. Professional, efficient, and innovative approach to problem-solving.",
      rating: 5,
      initials: "ER",
    },
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Trusted by leading companies worldwide for innovative IT solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3 pt-4 border-t">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
