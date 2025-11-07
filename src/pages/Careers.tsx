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
  MapPin,
  Clock,
  DollarSign,
  Users,
  Heart,
  Zap,
  Globe,
  GraduationCap,
} from "lucide-react";

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs",
    },
    {
      icon: Zap,
      title: "Flexible Work",
      description: "Remote work options and flexible hours",
    },
    {
      icon: Globe,
      title: "Global Team",
      description: "Work with talented people from around the world",
    },
    {
      icon: GraduationCap,
      title: "Learning & Growth",
      description: "Continuous learning opportunities and career development",
    },
  ];

  const jobs = [
    {
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      salary: "$120K - $180K",
      description:
        "We're looking for an experienced AI Engineer to join our team and help build cutting-edge AI solutions for our clients.",
      responsibilities: [
        "Design and implement AI/ML models and algorithms",
        "Collaborate with cross-functional teams to integrate AI solutions",
        "Optimize model performance and scalability",
        "Stay current with latest AI/ML research and technologies",
      ],
      requirements: [
        "5+ years of experience in AI/ML development",
        "Strong knowledge of Python, TensorFlow, and PyTorch",
        "Experience with cloud platforms (AWS, Azure, or GCP)",
        "Excellent problem-solving and communication skills",
      ],
    },
    {
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Remote / New York",
      type: "Full-time",
      salary: "$100K - $150K",
      description:
        "Join our development team to build scalable web applications using modern technologies and best practices.",
      responsibilities: [
        "Develop and maintain web applications using React and Node.js",
        "Write clean, maintainable, and well-documented code",
        "Participate in code reviews and technical discussions",
        "Collaborate with designers and product managers",
      ],
      requirements: [
        "3+ years of full stack development experience",
        "Proficiency in React, TypeScript, and Node.js",
        "Experience with SQL and NoSQL databases",
        "Strong understanding of RESTful APIs and web services",
      ],
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote / Los Angeles",
      type: "Full-time",
      salary: "$90K - $130K",
      description:
        "Create beautiful and intuitive user experiences for our cutting-edge technology products.",
      responsibilities: [
        "Design user interfaces for web and mobile applications",
        "Conduct user research and usability testing",
        "Create wireframes, prototypes, and high-fidelity mockups",
        "Collaborate with developers to ensure design implementation",
      ],
      requirements: [
        "4+ years of UX/UI design experience",
        "Proficiency in Figma, Sketch, or Adobe XD",
        "Strong portfolio demonstrating design skills",
        "Understanding of design systems and component libraries",
      ],
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote / Austin",
      type: "Full-time",
      salary: "$110K - $160K",
      description:
        "Help us build and maintain robust infrastructure and deployment pipelines for our applications.",
      responsibilities: [
        "Manage cloud infrastructure and deployment pipelines",
        "Implement monitoring and logging solutions",
        "Automate infrastructure provisioning and configuration",
        "Ensure system security and reliability",
      ],
      requirements: [
        "3+ years of DevOps experience",
        "Strong knowledge of AWS, Docker, and Kubernetes",
        "Experience with CI/CD tools (Jenkins, GitLab CI, etc.)",
        "Scripting skills in Python, Bash, or similar",
      ],
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote / Boston",
      type: "Full-time",
      salary: "$120K - $170K",
      description:
        "Lead product strategy and execution for our innovative technology solutions.",
      responsibilities: [
        "Define product vision and roadmap",
        "Gather and prioritize product requirements",
        "Work closely with engineering and design teams",
        "Analyze market trends and competitive landscape",
      ],
      requirements: [
        "5+ years of product management experience",
        "Experience with B2B SaaS products",
        "Strong analytical and communication skills",
        "Technical background or CS degree preferred",
      ],
    },
    {
      title: "Data Scientist",
      department: "Data",
      location: "Remote / Seattle",
      type: "Full-time",
      salary: "$115K - $165K",
      description:
        "Leverage data to drive insights and build predictive models for our AI-powered solutions.",
      responsibilities: [
        "Analyze large datasets to extract meaningful insights",
        "Build and deploy machine learning models",
        "Create data visualizations and reports",
        "Collaborate with engineering teams on data infrastructure",
      ],
      requirements: [
        "4+ years of data science experience",
        "Strong knowledge of Python, SQL, and statistical analysis",
        "Experience with ML frameworks and tools",
        "Excellent communication and presentation skills",
      ],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">Join Our Team</Badge>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Build the Future with Us
            </h1>
            <p className="text-lg text-muted-foreground">
              Join a team of passionate innovators working on cutting-edge AI and technology 
              solutions that make a real impact.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">Why Join Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <benefit.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">Open Positions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                <Badge variant="secondary" className="mb-3">
                  {job.department}
                </Badge>
                <h3 className="font-heading text-xl font-semibold mb-4">{job.title}</h3>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {job.type}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <DollarSign className="h-4 w-4" />
                    {job.salary}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                  {job.description}
                </p>
                <Button onClick={() => setSelectedJob(index)} className="w-full">
                  View Details
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Details Dialog */}
      <Dialog open={selectedJob !== null} onOpenChange={() => setSelectedJob(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedJob !== null && (
            <>
              <DialogHeader>
                <Badge variant="secondary" className="w-fit mb-2">
                  {jobs[selectedJob].department}
                </Badge>
                <DialogTitle className="font-heading text-2xl">
                  {jobs[selectedJob].title}
                </DialogTitle>
                <DialogDescription className="text-base space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {jobs[selectedJob].location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {jobs[selectedJob].type}
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4" />
                    {jobs[selectedJob].salary}
                  </div>
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6">
                <div>
                  <p className="text-muted-foreground">{jobs[selectedJob].description}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Responsibilities</h4>
                  <ul className="space-y-2">
                    {jobs[selectedJob].responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Requirements</h4>
                  <ul className="space-y-2">
                    {jobs[selectedJob].requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t">
                  <Button className="w-full" size="lg">
                    Apply Now
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

export default Careers;
