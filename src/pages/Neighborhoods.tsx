import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Users, TrendingUp, Building2, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";

interface Neighborhood {
  id: string;
  name: string;
  zone: string;
  population: string;
  averageIncome: string;
  topGaps: string[];
  opportunityScore: number;
  description: string;
}

const Neighborhoods = () => {
  const neighborhoods: Neighborhood[] = [
    {
      id: "1",
      name: "Banjara Hills",
      zone: "Central",
      population: "85,000",
      averageIncome: "High",
      topGaps: ["Specialty Clinics", "Organic Markets", "Co-working Spaces"],
      opportunityScore: 8.5,
      description: "Affluent residential area with growing demand for premium services"
    },
    {
      id: "2",
      name: "Gachibowli",
      zone: "West",
      population: "120,000",
      averageIncome: "Upper-Middle",
      topGaps: ["Childcare Centers", "Fitness Studios", "Quick Service Restaurants"],
      opportunityScore: 9.2,
      description: "IT hub with young professional demographic and high disposable income"
    },
    {
      id: "3",
      name: "Miyapur",
      zone: "West",
      population: "95,000",
      averageIncome: "Middle",
      topGaps: ["Pharmacies", "Educational Centers", "Home Services"],
      opportunityScore: 7.8,
      description: "Rapidly developing residential area near metro connectivity"
    },
    {
      id: "4",
      name: "Kondapur",
      zone: "West",
      population: "110,000",
      averageIncome: "Upper-Middle",
      topGaps: ["Pet Services", "Health & Wellness", "Family Entertainment"],
      opportunityScore: 8.7,
      description: "Mixed residential-commercial zone with growing families"
    },
    {
      id: "5",
      name: "Jubilee Hills",
      zone: "Central",
      population: "72,000",
      averageIncome: "High",
      topGaps: ["Luxury Retail", "Fine Dining", "Personal Services"],
      opportunityScore: 8.3,
      description: "Premium locality with demand for upscale offerings"
    },
    {
      id: "6",
      name: "Kukatpally",
      zone: "Northwest",
      population: "145,000",
      averageIncome: "Middle",
      topGaps: ["Urgent Care", "Skill Training", "Convenience Stores"],
      opportunityScore: 8.9,
      description: "High-density residential hub with diverse service needs"
    },
    {
      id: "7",
      name: "Madhapur",
      zone: "West",
      population: "98,000",
      averageIncome: "Upper-Middle",
      topGaps: ["Late-Night Dining", "Recreation Clubs", "Tech Repair"],
      opportunityScore: 9.0,
      description: "Tech corridor with 24/7 lifestyle demands"
    },
    {
      id: "8",
      name: "Secunderabad",
      zone: "North",
      population: "160,000",
      averageIncome: "Middle",
      topGaps: ["Senior Care", "Traditional Retail", "Community Spaces"],
      opportunityScore: 7.5,
      description: "Established area with aging population and heritage value"
    }
  ];

  const [selectedZone, setSelectedZone] = useState<string>("All");
  const zones = ["All", "Central", "West", "Northwest", "North"];

  const filteredNeighborhoods = selectedZone === "All" 
    ? neighborhoods 
    : neighborhoods.filter(n => n.zone === selectedZone);

  const getScoreColor = (score: number) => {
    if (score >= 9) return "bg-secondary text-secondary-foreground";
    if (score >= 8) return "bg-accent text-accent-foreground";
    return "bg-primary text-primary-foreground";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Hyderabad Neighborhoods</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Explore detailed profiles of Hyderabad's key neighborhoods to identify high-potential business opportunities 
            backed by demographic data and AI analysis.
          </p>
        </div>

        {/* Zone Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {zones.map((zone) => (
            <Button
              key={zone}
              variant={selectedZone === zone ? "default" : "outline"}
              onClick={() => setSelectedZone(zone)}
              className="transition-all"
            >
              {zone}
            </Button>
          ))}
        </div>

        {/* Neighborhoods Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredNeighborhoods.map((neighborhood) => (
            <Card key={neighborhood.id} className="p-6 hover:shadow-lg transition-all border-border/50 group">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                    {neighborhood.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{neighborhood.zone} Zone</span>
                  </div>
                </div>
                <Badge className={`${getScoreColor(neighborhood.opportunityScore)} font-semibold`}>
                  {neighborhood.opportunityScore}/10
                </Badge>
              </div>

              <p className="text-sm text-muted-foreground mb-4">
                {neighborhood.description}
              </p>

              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">Population:</span>
                  <span className="font-medium">{neighborhood.population}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <TrendingUp className="h-4 w-4 text-secondary" />
                  <span className="text-muted-foreground">Income Level:</span>
                  <span className="font-medium">{neighborhood.averageIncome}</span>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center gap-2 text-sm font-medium mb-2">
                  <Building2 className="h-4 w-4 text-accent" />
                  <span>Top Opportunities</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {neighborhood.topGaps.map((gap, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {gap}
                    </Badge>
                  ))}
                </div>
              </div>

              <Link to={`/dashboard?neighborhood=${neighborhood.id}`}>
                <Button className="w-full group-hover:shadow-md transition-all" variant="outline">
                  View Analysis
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Neighborhoods;
