import { Cafe } from "@/types/cafe";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Clock, Heart } from "lucide-react";
import { Link } from "react-router-dom";

interface CafeCardProps {
  cafe: Cafe;
  showDistance?: boolean;
}

const CafeCard = ({ cafe, showDistance = true }: CafeCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
      <Link to={`/cafe/${cafe.id}`}>
        <div className="relative aspect-[16/10] overflow-hidden">
          <img 
            src={cafe.photos[0]} 
            alt={cafe.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute right-3 top-3">
            <Button 
              size="icon" 
              variant="secondary" 
              className="h-9 w-9 rounded-full bg-card/90 backdrop-blur-sm hover:bg-card"
              onClick={(e) => {
                e.preventDefault();
                // Handle favorite toggle
              }}
            >
              <Heart className="h-4 w-4" />
            </Button>
          </div>
          {cafe.isOpen !== undefined && (
            <Badge 
              className="absolute bottom-3 left-3" 
              variant={cafe.isOpen ? "default" : "secondary"}
            >
              {cafe.isOpen ? "Open Now" : "Closed"}
            </Badge>
          )}
        </div>
      </Link>
      
      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            <Link to={`/cafe/${cafe.id}`} className="hover:text-primary transition-colors">
              <h3 className="font-semibold text-lg leading-tight">{cafe.name}</h3>
            </Link>
            <div className="flex items-center gap-1 text-sm font-medium">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span>{cafe.rating}</span>
            </div>
          </div>
          
          <div className="space-y-1 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5" />
              <span className="line-clamp-1">{cafe.address}</span>
            </div>
            
            {showDistance && cafe.distance && (
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-primary">{cafe.distance} mi away</span>
              </div>
            )}
            
            {cafe.hours && (
              <div className="flex items-center gap-2">
                <Clock className="h-3.5 w-3.5" />
                <span>{cafe.hours}</span>
              </div>
            )}
          </div>
          
          <div className="pt-1">
            <Badge variant="outline" className="text-xs">
              {cafe.category}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CafeCard;
