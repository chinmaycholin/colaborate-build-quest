import Layout from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Target, Star } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Revolutionizing E-Commerce with AI",
      client: "ShopFlow",
      industry: "E-Commerce",
      image: "/placeholder.svg",
      challenge:
        "ShopFlow needed to improve customer engagement and increase conversion rates in a highly competitive market.",
      solution:
        "We implemented an AI-powered recommendation engine and personalized shopping experience using machine learning algorithms.",
      results: [
        { metric: "Conversion Rate", value: "+45%", icon: TrendingUp },
        { metric: "Customer Engagement", value: "+80%", icon: Users },
        { metric: "Revenue Growth", value: "+60%", icon: Target },
        { metric: "Customer Satisfaction", value: "4.8/5", icon: Star },
      ],
      testimonial: {
        quote:
          "MasterSolis transformed our platform with cutting-edge AI technology. The results exceeded our expectations!",
        author: "Sarah Chen",
        role: "CEO, ShopFlow",
      },
      tags: ["AI", "E-Commerce", "Mobile"],
    },
    {
      title: "Healthcare Data Analytics Transformation",
      client: "MediCare Solutions",
      industry: "Healthcare",
      image: "/placeholder.svg",
      challenge:
        "Managing vast amounts of patient data securely while providing actionable insights to healthcare providers.",
      solution:
        "Developed a HIPAA-compliant analytics platform with real-time dashboards and predictive health monitoring.",
      results: [
        { metric: "Data Processing", value: "-50% Time", icon: TrendingUp },
        { metric: "Patient Records", value: "100K+", icon: Users },
        { metric: "Admin Efficiency", value: "+45%", icon: Target },
        { metric: "Uptime", value: "99.99%", icon: Star },
      ],
      testimonial: {
        quote:
          "The platform has revolutionized how we manage patient care. It's secure, efficient, and incredibly user-friendly.",
        author: "Dr. Michael Ross",
        role: "CTO, MediCare Solutions",
      },
      tags: ["Healthcare", "Analytics", "Cloud", "Security"],
    },
    {
      title: "Smart City IoT Infrastructure",
      client: "Urban Tech",
      industry: "Government",
      image: "/placeholder.svg",
      challenge:
        "Connecting thousands of IoT devices across the city to monitor and optimize urban infrastructure in real-time.",
      solution:
        "Built a scalable IoT platform with edge computing capabilities and real-time analytics for city management.",
      results: [
        { metric: "Energy Savings", value: "-25%", icon: TrendingUp },
        { metric: "Devices Connected", value: "10K+", icon: Users },
        { metric: "Response Time", value: "-60%", icon: Target },
        { metric: "Efficiency", value: "+70%", icon: Star },
      ],
      testimonial: {
        quote:
          "This platform has made our city smarter and more sustainable. The environmental and cost benefits are remarkable.",
        author: "James Wilson",
        role: "City Technology Officer",
      },
      tags: ["IoT", "Smart City", "Analytics"],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">Case Studies</Badge>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Success Stories That Inspire
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover how we've helped businesses transform their operations and achieve 
              remarkable results through innovative technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="container space-y-24">
          {caseStudies.map((study, index) => (
            <div key={index}>
              <Card className="overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-primary/20 to-accent/20">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-12">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.tags.map((tag, idx) => (
                        <Badge key={idx} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h2 className="font-heading text-3xl font-bold mb-2">{study.title}</h2>
                    <p className="text-primary font-medium mb-6">
                      {study.client} • {study.industry}
                    </p>
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold mb-2">The Challenge</h3>
                        <p className="text-muted-foreground">{study.challenge}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Our Solution</h3>
                        <p className="text-muted-foreground">{study.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Results */}
              <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {study.results.map((result, idx) => (
                  <Card key={idx} className="p-6 text-center">
                    <result.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                    <p className="text-2xl font-bold mb-1">{result.value}</p>
                    <p className="text-sm text-muted-foreground">{result.metric}</p>
                  </Card>
                ))}
              </div>

              {/* Testimonial */}
              <Card className="mt-8 p-8 bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="max-w-3xl mx-auto text-center">
                  <Star className="h-8 w-8 text-accent mx-auto mb-4 fill-accent" />
                  <blockquote className="text-lg mb-6">"{study.testimonial.quote}"</blockquote>
                  <div>
                    <p className="font-semibold">{study.testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{study.testimonial.role}</p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary to-accent text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl font-bold mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Let's discuss how we can help transform your business with innovative technology solutions.
            </p>
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="group"
            >
              <a href="/contact" className="flex items-center gap-2">
                Get Started
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;
