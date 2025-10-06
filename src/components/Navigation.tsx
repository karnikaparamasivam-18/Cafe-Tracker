import { Link, useLocation } from "react-router-dom";
import { Coffee, Map, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-card/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-primary">
            <Coffee className="h-6 w-6" />
            CafeTracker
          </Link>
          
          <div className="flex items-center gap-6">
            <Link 
              to="/discover" 
              className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
                isActive("/discover") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <Map className="h-4 w-4" />
              Discover
            </Link>
            <Link 
              to="/my-cafes" 
              className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
                isActive("/my-cafes") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <Heart className="h-4 w-4" />
              My Cafes
            </Link>
            <Button variant="default" size="sm">Sign In</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
