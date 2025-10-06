import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Calendar, StickyNote, Coffee } from "lucide-react";

const MyCafes = () => {
  // Mock data for saved cafes
  const savedCafes = [
    {
      id: "1",
      name: "Brew & Bloom",
      address: "123 Coffee Lane, Downtown",
      visitDate: "2025-01-15",
      rating: 5,
      notes: "Amazing latte art! The barista was super friendly. Will definitely come back.",
      isFavorite: true,
      photo: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800"
    },
    {
      id: "4",
      name: "Morning Glory Coffee",
      address: "321 Sunrise Blvd",
      visitDate: "2025-01-10",
      rating: 4,
      notes: "Great breakfast sandwich. Coffee was good but not exceptional.",
      isFavorite: false,
      photo: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800"
    }
  ];
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">My Cafes</h1>
          <p className="text-muted-foreground">Your personal cafe collection and notes</p>
        </div>
        
        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Coffee className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{savedCafes.length}</p>
                  <p className="text-sm text-muted-foreground">Cafes Visited</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-accent/10 text-accent">
                  <Star className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold">
                    {savedCafes.filter(c => c.isFavorite).length}
                  </p>
                  <p className="text-sm text-muted-foreground">Favorites</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <StickyNote className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold">
                    {savedCafes.filter(c => c.notes).length}
                  </p>
                  <p className="text-sm text-muted-foreground">With Notes</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Saved Cafes List */}
        {savedCafes.length > 0 ? (
          <div className="space-y-4">
            {savedCafes.map((cafe) => (
              <Card key={cafe.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-[200px,1fr] gap-0">
                    <div className="aspect-square md:aspect-auto relative overflow-hidden">
                      <img 
                        src={cafe.photo} 
                        alt={cafe.name}
                        className="w-full h-full object-cover"
                      />
                      {cafe.isFavorite && (
                        <Badge className="absolute top-3 left-3 bg-accent">
                          Favorite
                        </Badge>
                      )}
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <h3 className="text-xl font-semibold mb-1">{cafe.name}</h3>
                          <p className="text-sm text-muted-foreground">{cafe.address}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < cafe.rating
                                  ? "fill-accent text-accent"
                                  : "text-muted-foreground"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>Visited on {new Date(cafe.visitDate).toLocaleDateString()}</span>
                      </div>
                      
                      {cafe.notes && (
                        <div className="bg-muted/50 rounded-lg p-4 mb-4">
                          <p className="text-sm leading-relaxed">{cafe.notes}</p>
                        </div>
                      )}
                      
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Edit Notes</Button>
                        <Button variant="outline" size="sm">View Details</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="py-16 text-center">
              <Coffee className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-xl font-semibold mb-2">No cafes saved yet</h3>
              <p className="text-muted-foreground mb-6">
                Start exploring and save your favorite cafes to track them here
              </p>
              <Button>Discover Cafes</Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default MyCafes;
