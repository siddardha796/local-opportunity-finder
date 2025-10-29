import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BarChart3 } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary-hover">
            <BarChart3 className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">OpportunityScout</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Home
          </Link>
          <Link
            to="/neighborhoods"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/neighborhoods") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Neighborhoods
          </Link>
          <Link
            to="/dashboard"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/dashboard") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Dashboard
          </Link>
          <Button size="sm" className="bg-accent hover:bg-accent-hover">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
