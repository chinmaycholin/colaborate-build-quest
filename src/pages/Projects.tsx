import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Search, ExternalLink, Calendar, Users } from "lucide-react";

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "AI-Powered Analytics Platform",
      client: "TechCorp Inc",
      year: "2024",
      image: "/placeholder.svg",
      tags: ["AI", "Analytics", "Cloud"],
      description:
        "Built a comprehensive analytics platform using machine learning to provide real-time insights and predictive analytics for enterprise clients.",
      results: [
        "40% improvement in data processing speed",
        "Reduced operational costs by 30%",
        "Increased user engagement by 65%",
      ],
      technologies: ["Python", "TensorFlow", "AWS", "React"],
      link: "/case-studies",
    },
    {
      title: "E-Commerce Mobile App",
      client: "ShopFlow",
      year: "2024",
      image: "/placeholder.svg",
      tags: ["Mobile", "E-Commerce", "Design"],
      description:
        "Developed a feature-rich mobile application for iOS and Android with seamless shopping experience and integrated payment systems.",
      results: [
        "500K+ downloads in first month",
        "4.8 star rating on app stores",
        "80% increase in mobile sales",
      ],
      technologies: ["React Native", "Node.js", "MongoDB", "Stripe"],
      link: "/case-studies",
    },
    {
      title: "Healthcare Management System",
      client: "MediCare Solutions",
      year: "2023",
      image: "/placeholder.svg",
      tags: ["Healthcare", "Cloud", "Security"],
      description:
        "Created a HIPAA-compliant healthcare management system with patient records, appointment scheduling, and telemedicine capabilities.",
      results: [
        "Managed 100K+ patient records",
        "99.99% uptime reliability",
        "Reduced administrative time by 45%",
      ],
      technologies: ["Angular", "Spring Boot", "PostgreSQL", "Azure"],
      link: "/case-studies",
    },
    {
      title: "Smart City IoT Platform",
      client: "Urban Tech",
      year: "2023",
      image: "/placeholder.svg",
      tags: ["IoT", "Analytics", "Cloud"],
      description:
        "Developed an IoT platform for smart city infrastructure monitoring, connecting thousands of sensors for real-time data collection and analysis.",
      results: [
        "10K+ IoT devices connected",
        "Real-time monitoring dashboard",
        "25% reduction in energy consumption",
      ],
      technologies: ["Node.js", "MQTT", "InfluxDB", "Grafana"],
      link: "/case-studies",
    },
    {
      title: "Financial Trading Platform",
      client: "TradeWise",
      year: "2023",
      image: "/placeholder.svg",
      tags: ["Finance", "Security", "AI"],
      description:
        "Built a high-performance trading platform with AI-powered market analysis and automated trading strategies.",
      results: [
        "Sub-millisecond latency",
        "99.999% transaction accuracy",
        "Processing 1M+ trades daily",
      ],
      technologies: ["Java", "Kafka", "Redis", "Docker"],
      link: "/case-studies",
    },
    {
      title: "Education Learning Portal",
      client: "EduTech Global",
      year: "2024",
      image: "/placeholder.svg",
      tags: ["Education", "Mobile", "Cloud"],
      description:
        "Created an interactive learning platform with video lectures, assessments, and AI-powered personalized learning paths.",
      results: [
        "1M+ active students",
        "85% course completion rate",
        "Available in 15 languages",
      ],
      technologies: ["Vue.js", "Laravel", "MySQL", "AWS"],
      link: "/case-studies",
    },
  ];

  const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      searchQuery === "" ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTags =
      selectedTags.length === 0 || selectedTags.some((tag) => project.tags.includes(tag));
    return matchesSearch && matchesTags;
  });

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">Our Projects</Badge>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Transforming Ideas into Reality
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our portfolio of successful projects across industries, 
              showcasing innovation and technical excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 border-b">
        <div className="container">
          <div className="space-y-4">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <Badge
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
              {selectedTags.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedTags([])}
                  className="h-auto py-1"
                >
                  Clear filters
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-xl transition-all group cursor-pointer"
                  onClick={() => setSelectedProject(index)}
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4" />
                      {project.year}
                      <span className="mx-2">•</span>
                      <Users className="h-4 w-4" />
                      {project.client}
                    </div>
                    <h3 className="font-heading text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <Badge key={idx} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Project Details Dialog */}
      <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject !== null && (
            <>
              <DialogHeader>
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg overflow-hidden mb-4">
                  <img
                    src={projects[selectedProject].image}
                    alt={projects[selectedProject].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <DialogTitle className="font-heading text-2xl">
                  {projects[selectedProject].title}
                </DialogTitle>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  {projects[selectedProject].client}
                  <span className="mx-2">•</span>
                  <Calendar className="h-4 w-4" />
                  {projects[selectedProject].year}
                </div>
              </DialogHeader>
              <div className="space-y-6">
                <div>
                  <p className="text-muted-foreground">{projects[selectedProject].description}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Key Results</h4>
                  <ul className="space-y-2">
                    {projects[selectedProject].results.map((result, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[selectedProject].technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <Button className="w-full" asChild>
                    <a href={projects[selectedProject].link} className="flex items-center justify-center gap-2">
                      View Full Case Study
                      <ExternalLink className="h-4 w-4" />
                    </a>
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

export default Projects;
