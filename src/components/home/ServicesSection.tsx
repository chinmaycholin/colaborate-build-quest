import { Code, Cloud, Brain, Shield, Smartphone, BarChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored solutions built with cutting-edge technologies to meet your unique business needs.",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable and secure cloud infrastructure to power your digital transformation.",
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Intelligent automation and data-driven insights to enhance your operations.",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and data.",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that engage your users.",
    },
    {
      icon: BarChart,
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive IT solutions powered by artificial intelligence to drive your business forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50"
            >
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-accent transition-colors"
                >
                  Learn more →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
