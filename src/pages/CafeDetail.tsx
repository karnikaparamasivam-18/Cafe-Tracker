import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { mockCafes } from "@/data/mockCafes";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Star, MapPin, Clock, Heart, ArrowLeft, Share2 } from "lucide-react";
import CafeMap from "@/components/CafeMap";

const CafeDetail = () => {
  const { id } = useParams();
  const cafe = mockCafes.find(c => c.id === id);
  
  if (!cafe) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Cafe not found</h1>
          <Link to="/discover">
            <Button>Back to Discover</Button>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/discover" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to Discover
        </Link>
        
        {/* Hero Image */}
        <div className="relative aspect-[21/9] rounded-xl overflow-hidden mb-8 shadow-lg">
          <img 
            src={cafe.photos[0]} 
            alt={cafe.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 flex gap-2">
            <Button size="icon" variant="secondary" className="rounded-full">
              <Share2 className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="secondary" className="rounded-full">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title & Info */}
            <div>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">{cafe.name}</h1>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{cafe.address}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xl font-semibold">
                  <Star className="h-6 w-6 fill-accent text-accent" />
                  <span>{cafe.rating}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">{cafe.category}</Badge>
                {cafe.isOpen !== undefined && (
                  <Badge variant={cafe.isOpen ? "default" : "secondary"}>
                    {cafe.isOpen ? "Open Now" : "Closed"}
                  </Badge>
                )}
                {cafe.hours && (
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{cafe.hours}</span>
                  </div>
                )}
              </div>
            </div>
            
            {/* Description */}
            {cafe.description && (
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold mb-3">About</h2>
                  <p className="text-muted-foreground leading-relaxed">{cafe.description}</p>
                </CardContent>
              </Card>
            )}
            
            {/* Map */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">Location</h2>
                <CafeMap cafes={[cafe]} center={[cafe.lat, cafe.lng]} zoom={15} height="300px" />
              </CardContent>
            </Card>
          </div>
          
          {/* Sidebar - Add to Tracker */}
          <div>
            <Card className="sticky top-24">
              <CardContent className="pt-6 space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Add to My Tracker</h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    Save this cafe and add your personal notes and rating
                  </p>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Your Rating</label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button 
                        key={star}
                        className="p-1 hover:scale-110 transition-transform"
                      >
                        <Star className="h-6 w-6 text-muted-foreground hover:text-accent hover:fill-accent transition-colors" />
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Your Notes</label>
                  <Textarea 
                    placeholder="What did you think? How was the coffee?"
                    rows={4}
                  />
                </div>
                
                <div className="space-y-2">
                  <Button className="w-full" size="lg">
                    Save to My Cafes
                  </Button>
                  <Button variant="outline" className="w-full">
                    Mark as Favorite
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CafeDetail;
