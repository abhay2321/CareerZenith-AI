import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  BrainCircuit, 
  Briefcase, 
  LineChart, 
  Target, 
  Users, 
  Zap, 
  Shield,
  Globe,
  Award,
  Heart,
  Lightbulb,
  ArrowRight,
  FileText,
  GraduationCap,
  PenBox,
  Star
} from "lucide-react";
import Link from "next/link";
import { features } from "@/data/features";
import { howItWorks } from "@/data/howItWorks";

const About = () => {
  const values = [
    {
      icon: <BrainCircuit className="w-8 h-8 text-primary" />,
      title: "AI-Powered Innovation",
      description: "Cutting-edge artificial intelligence for personalized career guidance"
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "User-Centric Design",
      description: "Built around the needs and challenges of modern professionals"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Security First",
      description: "Enterprise-grade security and privacy protection for your data"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      title: "Continuous Improvement",
      description: "Always evolving with the latest technology and industry trends"
    }
  ];

  const technology = [
    {
      title: "Next.js 15 & React 19",
      description: "Latest frontend technologies for optimal performance and user experience",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Google Gemini AI",
      description: "Advanced AI models for intelligent career guidance and content generation",
      icon: <BrainCircuit className="w-6 h-6" />
    },
    {
      title: "Prisma & PostgreSQL",
      description: "Robust database architecture for reliable data management",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Clerk Authentication",
      description: "Secure and reliable user authentication and management",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const stats = [
    { number: "50+", label: "Industries Covered" },
    { number: "1000+", label: "AI-Generated Questions" },
    { number: "95%", label: "User Satisfaction Rate" },
    { number: "24/7", label: "AI Support Available" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="w-full pt-24 pb-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
              About CareerZenith
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              CareerZenith is your AI-powered career companion, revolutionizing how professionals approach career development. 
              We combine cutting-edge artificial intelligence with deep industry expertise to provide personalized guidance 
              that accelerates your professional growth and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard">
                <Button size="lg" className="w-full sm:w-auto">
                  Start Your Journey <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Explore Features
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To democratize career success by making professional development accessible, intelligent, and personalized 
                for every professional, regardless of their background or experience level.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that everyone deserves access to the tools, insights, and guidance needed to build a fulfilling 
                and successful career in today's rapidly evolving job market.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To become the world's leading AI-powered career development platform, setting new standards for how 
                professionals approach career growth and success.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We envision a future where AI and human expertise work together seamlessly to unlock every professional's 
                potential and accelerate their career trajectory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Platform Impact</h2>
            <p className="text-muted-foreground">
              Numbers that reflect our commitment to career development excellence
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center justify-center space-y-2">
                <h3 className="text-4xl font-bold text-primary">{stat.number}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground">
              The principles that guide everything we do at CareerZenith
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="w-full py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Technology Excellence</h2>
            <p className="text-muted-foreground">
              Built on cutting-edge technology to deliver exceptional user experiences
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {technology.map((tech, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  {tech.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{tech.title}</h3>
                  <p className="text-muted-foreground">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="w-full py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Platform Features</h2>
            <p className="text-muted-foreground">
              Comprehensive tools designed for your professional success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-colors duration-300"
              >
                <CardContent className="pt-6 text-center flex flex-col items-center">
                  <div className="flex flex-col items-center justify-center">
                    {feature.icon}
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-16 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">How CareerZenith Works</h2>
            <p className="text-muted-foreground">
              Four simple steps to accelerate your career growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {howItWorks.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-xl">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="w-full py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose CareerZenith?</h2>
            <p className="text-muted-foreground">
              Discover what makes us the preferred choice for career development
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">AI-Powered Personalization</h3>
              <p className="text-muted-foreground">
                Every recommendation and insight is tailored to your unique profile, goals, and industry.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <LineChart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Real-Time Market Intelligence</h3>
              <p className="text-muted-foreground">
                Stay ahead with live industry trends, salary data, and market insights.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Enterprise-Grade Security</h3>
              <p className="text-muted-foreground">
                Your career data is protected with industry-standard security and privacy measures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Career?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of professionals who are already accelerating their careers with CareerZenith
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Explore More Features
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;