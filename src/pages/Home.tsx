import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Map, Heart, Star, Coffee } from "lucide-react";
import Navigation from "@/components/Navigation";
import heroImage from "@/assets/hero-cafe.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-primary-foreground">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Discover & Track Your Favorite Cafes
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90 leading-relaxed">
              Find nearby cafes, save your visits, and never forget a great cup of coffee again.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/discover">
                <Button size="lg" variant="secondary" className="text-base">
                  <Map className="mr-2 h-5 w-5" />
                  Discover Cafes
                </Button>
              </Link>
              <Link to="/my-cafes">
                <Button size="lg" variant="outline" className="text-base border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  <Heart className="mr-2 h-5 w-5" />
                  My Tracker
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your personal cafe companion with powerful discovery and tracking features
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-background border transition-all hover:shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <Map className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Find Nearby Cafes</h3>
              <p className="text-muted-foreground">
                Discover cafes around you with interactive maps and detailed filters
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-background border transition-all hover:shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                <Coffee className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Track Your Visits</h3>
              <p className="text-muted-foreground">
                Log your cafe visits, add ratings, notes, and photos all in one place
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-background border transition-all hover:shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Save Favorites</h3>
              <p className="text-muted-foreground">
                Build your personal collection of must-visit cafes and hidden gems
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary to-accent rounded-2xl p-12 text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Your Coffee Journey
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Join coffee lovers discovering amazing cafes every day
            </p>
            <Link to="/discover">
              <Button size="lg" variant="secondary" className="text-base">
                Get Started Free
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
