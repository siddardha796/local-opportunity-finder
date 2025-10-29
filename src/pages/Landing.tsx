import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BarChart3, Map, TrendingUp, FileText, ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import heroImage from "@/assets/hero-hyderabad.jpg";

const Landing = () => {
  const features = [
    {
      icon: Map,
      title: "Neighborhood Intelligence",
      description: "Analyze demand patterns, demographics, and competition density across Hyderabad's neighborhoods"
    },
    {
      icon: TrendingUp,
      title: "Opportunity Scoring",
      description: "AI-powered analysis identifies high-potential business gaps based on real data signals"
    },
    {
      icon: BarChart3,
      title: "Visual Insights",
      description: "Interactive heatmaps and dashboards reveal untapped market opportunities at a glance"
    },
    {
      icon: FileText,
      title: "Actionable Reports",
      description: "Export detailed analyses with rationale, market sizing, and implementation steps"
    }
  ];

  const benefits = [
    "Identify underserved business categories",
    "Validate opportunities with data-driven insights",
    "Compare neighborhoods and competition",
    "Access demographic and economic indicators",
    "Generate comprehensive opportunity reports"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="container relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <div className="inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary mb-6">
                Powered by AI Analytics
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Discover Hidden Business Opportunities
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                Analyze Hyderabad's neighborhoods to identify missing services, validate demand, and launch successful ventures backed by real data.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/neighborhoods">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary-hover shadow-primary w-full sm:w-auto">
                    Explore Neighborhoods
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/dashboard">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    View Dashboard
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl rounded-full"></div>
              <img 
                src={heroImage} 
                alt="Hyderabad cityscape with data overlays" 
                className="relative rounded-2xl shadow-2xl border border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Intelligent Opportunity Discovery</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Leverage AI-powered analytics to uncover business gaps and validate market demand across Hyderabad
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-border/50 bg-card">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary-hover">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Data-Driven Business Planning</h2>
              <p className="text-muted-foreground mb-8">
                Make informed decisions with comprehensive neighborhood analysis that combines demographic data, 
                competition metrics, and AI-powered opportunity scoring.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-border/50">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                    <TrendingUp className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground">500+</div>
                    <div className="text-sm text-muted-foreground">Neighborhoods Analyzed</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                    <BarChart3 className="h-8 w-8 text-secondary" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground">25+</div>
                    <div className="text-sm text-muted-foreground">Business Categories</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Map className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground">Real-time</div>
                    <div className="text-sm text-muted-foreground">Data Analysis</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-accent">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Discover Your Next Business Opportunity?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Start exploring Hyderabad's neighborhoods and unlock data-driven insights for your next venture
          </p>
          <Link to="/neighborhoods">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 shadow-xl">
              Get Started Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-muted/30">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2025 OpportunityScout. Powered by AI analytics for Hyderabad's entrepreneurial ecosystem.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
