import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Code2,
  Sparkles,
  Cloud,
  Smartphone,
  Database,
  Shield,
  Star,
  ArrowRight,
} from "lucide-react";

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      icon: Sparkles,
      title: "AI Development",
      shortDesc: "Intelligent solutions powered by cutting-edge AI technology.",
      fullDesc:
        "Our AI development services leverage machine learning, natural language processing, and computer vision to create intelligent applications that learn, adapt, and improve over time. From chatbots to predictive analytics, we build AI solutions that transform your business.",
      features: [
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
        "AI Chatbots",
      ],
      pricing: "Starting at $15,000",
    },
    {
      icon: Code2,
      title: "Custom Software",
      shortDesc: "Tailored applications built to solve your unique challenges.",
      fullDesc:
        "We design and develop custom software solutions that perfectly align with your business processes. Our agile approach ensures rapid development, continuous feedback, and solutions that scale with your growth.",
      features: [
        "Web Applications",
        "Enterprise Software",
        "API Development",
        "System Integration",
        "Legacy Modernization",
      ],
      pricing: "Starting at $10,000",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      shortDesc: "Scalable cloud infrastructure and migration services.",
      fullDesc:
        "Transform your infrastructure with our comprehensive cloud services. We help you migrate to the cloud, optimize costs, and build scalable architectures using AWS, Azure, and Google Cloud Platform.",
      features: [
        "Cloud Migration",
        "Infrastructure Setup",
        "DevOps & CI/CD",
        "Cloud Optimization",
        "Serverless Architecture",
      ],
      pricing: "Starting at $8,000",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      shortDesc: "Native and cross-platform mobile applications.",
      fullDesc:
        "Create exceptional mobile experiences with our expert mobile development team. We build high-performance native and cross-platform apps that engage users and drive results.",
      features: [
        "iOS Development",
        "Android Development",
        "React Native",
        "Flutter Apps",
        "Mobile UI/UX",
      ],
      pricing: "Starting at $12,000",
    },
    {
      icon: Database,
      title: "Data Analytics",
      shortDesc: "Transform data into actionable business insights.",
      fullDesc:
        "Unlock the power of your data with our analytics services. We help you collect, analyze, and visualize data to make informed decisions and drive business growth.",
      features: [
        "Business Intelligence",
        "Data Visualization",
        "Big Data Processing",
        "Real-time Analytics",
        "Data Warehousing",
      ],
      pricing: "Starting at $9,000",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      shortDesc: "Protect your digital assets with enterprise security.",
      fullDesc:
        "Safeguard your business with our comprehensive cybersecurity services. We provide security audits, penetration testing, and ongoing protection against evolving threats.",
      features: [
        "Security Audits",
        "Penetration Testing",
        "Compliance Management",
        "Threat Detection",
        "Security Training",
      ],
      pricing: "Starting at $7,000",
    },
  ];

  const testimonials = [
    {
      name: "John Smith",
      company: "TechCorp Inc",
      text: "MasterSolis transformed our business with their AI solutions. Highly recommended!",
      rating: 5,
      service: "AI Development",
    },
    {
      name: "Lisa Wang",
      company: "DataFlow Systems",
      text: "Exceptional cloud migration service. Our infrastructure is now faster and more cost-effective.",
      rating: 5,
      service: "Cloud Solutions",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">Our Services</Badge>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AI-Powered Solutions for Modern Businesses
            </h1>
            <p className="text-lg text-muted-foreground">
              Transform your business with our comprehensive suite of technology services, 
              powered by artificial intelligence and delivered by expert teams.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all group cursor-pointer"
                onClick={() => setSelectedService(index)}
              >
                <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">{service.shortDesc}</p>
                <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  <Badge variant="secondary" className="mt-2">
                    {testimonial.service}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Dialog */}
      <Dialog open={selectedService !== null} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedService !== null && (
            <>
              <DialogHeader>
                <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  {(() => {
                    const ServiceIcon = services[selectedService].icon;
                    return <ServiceIcon className="h-7 w-7 text-primary" />;
                  })()}
                </div>
                <DialogTitle className="font-heading text-2xl">
                  {services[selectedService].title}
                </DialogTitle>
                <DialogDescription className="text-base">
                  {services[selectedService].fullDesc}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {services[selectedService].features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground mb-4">
                    <span className="font-semibold text-foreground">Pricing:</span>{" "}
                    {services[selectedService].pricing}
                  </p>
                  <Button className="w-full" asChild>
                    <a href="/contact">Get Started</a>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Services;
