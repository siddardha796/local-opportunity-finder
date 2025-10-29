import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { TrendingUp, Building2, Users, DollarSign, Send, Download, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Dashboard = () => {
  const { toast } = useToast();
  const [userQuery, setUserQuery] = useState("");
  const [aiInsight, setAiInsight] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const opportunityData = [
    { category: "Health & Fitness", score: 92, color: "hsl(160, 65%, 45%)" },
    { category: "Childcare", score: 88, color: "hsl(30, 95%, 55%)" },
    { category: "Quick Dining", score: 85, color: "hsl(215, 85%, 25%)" },
    { category: "Pet Services", score: 82, color: "hsl(160, 65%, 45%)" },
    { category: "Co-working", score: 79, color: "hsl(30, 95%, 55%)" },
    { category: "Home Services", score: 76, color: "hsl(215, 85%, 25%)" },
  ];

  const metrics = [
    {
      icon: Building2,
      label: "Missing Services",
      value: "12",
      change: "+3 vs last month",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      label: "Avg Opportunity Score",
      value: "8.4/10",
      change: "+0.7 improvement",
      color: "text-secondary"
    },
    {
      icon: Users,
      label: "Target Demographics",
      value: "95K",
      change: "Young professionals",
      color: "text-accent"
    },
    {
      icon: DollarSign,
      label: "Est. Market Size",
      value: "₹2.4Cr",
      change: "Annual potential",
      color: "text-secondary"
    }
  ];

  const handleAnalyze = async () => {
    if (!userQuery.trim()) {
      toast({
        title: "Please enter a query",
        description: "Describe what business opportunity you'd like to analyze",
        variant: "destructive"
      });
      return;
    }

    setIsAnalyzing(true);
    try {
      const { data, error } = await supabase.functions.invoke('analyze-opportunity', {
        body: { query: userQuery }
      });

      if (error) throw error;
      
      setAiInsight(data.analysis);
      toast({
        title: "Analysis Complete",
        description: "AI has generated insights for your query"
      });
    } catch (error) {
      console.error('Analysis error:', error);
      toast({
        title: "Analysis Failed",
        description: "Please try again or contact support",
        variant: "destructive"
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleExport = () => {
    toast({
      title: "Report Generated",
      description: "Your opportunity analysis report is downloading"
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Opportunity Dashboard</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            AI-powered analysis of business gaps across Hyderabad neighborhoods with actionable insights and market sizing
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {metrics.map((metric, index) => (
            <Card key={index} className="p-6 border-border/50">
              <div className="flex items-center gap-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-${metric.color.split('-')[1]}/10`}>
                  <metric.icon className={`h-6 w-6 ${metric.color}`} />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                  <p className="text-2xl font-bold">{metric.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{metric.change}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2 mb-8">
          {/* Opportunity Chart */}
          <Card className="p-6 border-border/50">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Top Business Opportunities
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={opportunityData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis 
                  dataKey="category" 
                  angle={-45} 
                  textAnchor="end" 
                  height={100}
                  className="text-xs"
                />
                <YAxis className="text-xs" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '0.5rem'
                  }}
                />
                <Bar dataKey="score" radius={[8, 8, 0, 0]}>
                  {opportunityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </Card>

          {/* Quick Insights */}
          <Card className="p-6 border-border/50">
            <h3 className="text-lg font-semibold mb-4">Key Insights</h3>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                <div className="flex items-start gap-3">
                  <Badge className="bg-primary text-primary-foreground">High Demand</Badge>
                  <div className="flex-1">
                    <p className="font-medium mb-1">Health & Fitness Gap</p>
                    <p className="text-sm text-muted-foreground">
                      Only 2 gyms serving 95K population in Gachibowli. Estimated demand for 5-7 facilities.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 rounded-lg bg-secondary/5 border border-secondary/20">
                <div className="flex items-start gap-3">
                  <Badge className="bg-secondary text-secondary-foreground">Growing Need</Badge>
                  <div className="flex-1">
                    <p className="font-medium mb-1">Childcare Services</p>
                    <p className="text-sm text-muted-foreground">
                      40% population under 35 with young families. Childcare capacity at 60% of demand.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                <div className="flex items-start gap-3">
                  <Badge className="bg-accent text-accent-foreground">Quick Win</Badge>
                  <div className="flex-1">
                    <p className="font-medium mb-1">Quick Service Restaurants</p>
                    <p className="text-sm text-muted-foreground">
                      High foot traffic near IT parks, limited lunch options. Low entry barriers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* AI Analysis Section */}
        <Card className="p-6 border-border/50 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">AI-Powered Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Ask about specific opportunities, neighborhoods, or business categories
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <Textarea
              placeholder="E.g., 'What are the best opportunities for health & wellness businesses in tech corridors?' or 'Analyze demand for childcare in Kondapur'"
              value={userQuery}
              onChange={(e) => setUserQuery(e.target.value)}
              className="min-h-[100px] resize-none"
            />

            <div className="flex gap-2">
              <Button 
                onClick={handleAnalyze} 
                disabled={isAnalyzing}
                className="bg-primary hover:bg-primary-hover"
              >
                {isAnalyzing ? (
                  <>Analyzing...</>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Analyze
                  </>
                )}
              </Button>
              <Button onClick={handleExport} variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export Report
              </Button>
            </div>

            {aiInsight && (
              <div className="p-4 rounded-lg bg-card border border-border">
                <p className="text-sm font-medium mb-2 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-secondary" />
                  AI Analysis
                </p>
                <p className="text-sm text-muted-foreground whitespace-pre-wrap">{aiInsight}</p>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
