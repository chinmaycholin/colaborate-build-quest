import Layout from "@/components/layout/Layout";
import { Users, Target, Eye, Award, TrendingUp, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We push boundaries with cutting-edge AI and technology solutions.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with clients to understand and exceed their expectations.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We deliver high-quality solutions that drive real business results.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "We create solutions that make a difference worldwide.",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "/placeholder.svg",
      bio: "Visionary leader with 15+ years in AI and technology innovation.",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "/placeholder.svg",
      bio: "Technical genius specializing in AI architecture and scalable systems.",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      image: "/placeholder.svg",
      bio: "Award-winning designer creating intuitive user experiences.",
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      image: "/placeholder.svg",
      bio: "Full-stack expert with passion for clean, efficient code.",
    },
  ];

  const timeline = [
    { year: "2015", event: "Company Founded", description: "Started with a vision to transform IT services" },
    { year: "2017", event: "AI Integration", description: "Pioneered AI-powered development solutions" },
    { year: "2020", event: "Global Expansion", description: "Expanded services to 20+ countries" },
    { year: "2023", event: "Innovation Award", description: "Recognized as top AI services provider" },
  ];

  const achievements = [
    { icon: Award, title: "50+ Awards", description: "Industry recognition" },
    { icon: Users, title: "200+ Clients", description: "Satisfied customers" },
    { icon: TrendingUp, title: "95% Success", description: "Project completion rate" },
    { icon: Globe, title: "20+ Countries", description: "Global presence" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">About Us</Badge>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Building the Future with AI
            </h1>
            <p className="text-lg text-muted-foreground">
              At MasterSolis Infotech, we combine cutting-edge AI technology with expert development 
              to deliver innovative solutions that transform businesses worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <Target className="h-12 w-12 text-primary mb-4" />
              <h2 className="font-heading text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                To empower businesses with intelligent, scalable technology solutions that drive 
                growth and innovation. We leverage AI to solve complex challenges and create 
                meaningful impact for our clients.
              </p>
            </Card>
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <Eye className="h-12 w-12 text-accent mb-4" />
              <h2 className="font-heading text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground">
                To be the world's most trusted AI-powered IT services partner, recognized for 
                excellence, innovation, and transformative solutions that shape the digital future.
              </p>
            </Card>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <value.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="font-heading text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                    {item.year}
                  </div>
                  {index !== timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2" />
                  )}
                </div>
                <Card className="flex-1 p-6 mb-4">
                  <h3 className="font-heading text-xl font-semibold mb-2">{item.event}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">Our Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
                <achievement.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-2xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-muted-foreground">{achievement.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
