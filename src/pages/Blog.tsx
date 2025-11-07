import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Calendar, User, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ["All", "AI & ML", "Web Development", "Cloud", "Mobile", "Security"];

  const posts = [
    {
      title: "The Future of AI in Web Development",
      excerpt:
        "Explore how artificial intelligence is revolutionizing the way we build and maintain web applications...",
      author: "Sarah Johnson",
      date: "2024-01-15",
      readTime: "5 min read",
      image: "/placeholder.svg",
      category: "AI & ML",
      featured: true,
    },
    {
      title: "Building Scalable Cloud Infrastructure",
      excerpt:
        "Learn best practices for designing and implementing cloud architecture that grows with your business...",
      author: "Michael Chen",
      date: "2024-01-12",
      readTime: "8 min read",
      image: "/placeholder.svg",
      category: "Cloud",
      featured: false,
    },
    {
      title: "Mobile-First Design: A Complete Guide",
      excerpt:
        "Discover why mobile-first design is crucial and how to implement it effectively in your projects...",
      author: "Emily Rodriguez",
      date: "2024-01-10",
      readTime: "6 min read",
      image: "/placeholder.svg",
      category: "Mobile",
      featured: false,
    },
    {
      title: "Cybersecurity Best Practices for 2024",
      excerpt:
        "Stay ahead of threats with these essential security practices every development team should follow...",
      author: "David Kim",
      date: "2024-01-08",
      readTime: "7 min read",
      image: "/placeholder.svg",
      category: "Security",
      featured: false,
    },
    {
      title: "React Performance Optimization Techniques",
      excerpt:
        "Master advanced techniques to make your React applications faster and more efficient...",
      author: "Lisa Wang",
      date: "2024-01-05",
      readTime: "10 min read",
      image: "/placeholder.svg",
      category: "Web Development",
      featured: false,
    },
    {
      title: "Understanding Machine Learning Pipelines",
      excerpt:
        "A comprehensive guide to building robust ML pipelines for production environments...",
      author: "John Smith",
      date: "2024-01-03",
      readTime: "12 min read",
      image: "/placeholder.svg",
      category: "AI & ML",
      featured: false,
    },
  ];

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      !selectedCategory || selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = posts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">Blog</Badge>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Insights & Innovations
            </h1>
            <p className="text-lg text-muted-foreground">
              Stay updated with the latest trends, tutorials, and insights from our team of experts.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-8 border-b">
        <div className="container">
          <div className="space-y-4">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={() => setSelectedCategory(category === "All" ? null : category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && !searchQuery && !selectedCategory && (
        <section className="py-16">
          <div className="container">
            <h2 className="font-heading text-2xl font-bold mb-8">Featured Article</h2>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-primary/20 to-accent/20">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge className="w-fit mb-4">{featuredPost.category}</Badge>
                  <h3 className="font-heading text-3xl font-bold mb-4">
                    <Link to="/blog/post" className="hover:text-primary transition-colors">
                      {featuredPost.title}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <Button asChild className="w-fit group">
                    <Link to="/blog/post" className="flex items-center gap-2">
                      Read More
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container">
          <h2 className="font-heading text-2xl font-bold mb-8">
            {selectedCategory && selectedCategory !== "All"
              ? `${selectedCategory} Articles`
              : "Latest Articles"}
          </h2>
          {regularPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <Badge variant="secondary" className="mb-3">
                      {post.category}
                    </Badge>
                    <h3 className="font-heading text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      <Link to="/blog/post">{post.title}</Link>
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" asChild className="group/btn p-0 h-auto">
                      <Link to="/blog/post" className="flex items-center gap-2">
                        Read More
                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
