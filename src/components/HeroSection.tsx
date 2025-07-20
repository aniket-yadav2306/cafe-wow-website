import { ArrowDown, Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/cafe-hero.jpg';

const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToBooking = () => {
    const element = document.querySelector('#booking');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4np5d9aqAee2Bf25eotYzS9ylSGIUHShWHuG73BVunr64KJhIDX2zwbH7jd2ko2cVDUrCrpYPHV0qjiZ8t3c-03QkVRagQ66AZK78B4VZDeu3r_OnBhiRfx0YqE_SWN130kpH9acGA=s1360-w1360-h1020-rw" 
          alt="Cafe 16 Interior" 
          className="w-full h-full object-cover scale-105 animate-float"
        />
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 opacity-20">
        <Heart className="h-16 w-16 text-accent animate-bounce-gentle" />
      </div>
      <div className="absolute top-1/3 right-16 opacity-20">
        <Star className="h-12 w-12 text-accent animate-float" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="font-script text-6xl md:text-8xl font-bold text-primary-foreground mb-6 leading-tight">
            Cafe 16
          </h1>
          <p className="font-elegant text-2xl md:text-3xl text-primary-foreground/90 mb-4">
            Where Coffee Meets Comfort
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            A cozy, pet-friendly community space where every cup tells a story, every corner invites connection, and every moment feels like home.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
          <Button 
            onClick={scrollToBooking}
            size="lg"
            className="bg-gradient-warm hover:shadow-warm hover:scale-105 transition-all duration-300 text-lg px-8 py-4 font-semibold"
          >
            Reserve Your Table
          </Button>
          <Button 
            onClick={scrollToAbout}
            variant="outline"
            size="lg"
className="border-primary-foreground bg-primary-foreground text-primary transition-all duration-300 text-lg px-8 py-4 font-semibold"

          >
            Discover Our Story
          </Button>
        </div>

        {/* Features Highlight */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 animate-slide-in-left">
          <div className="flex items-center space-x-2 bg-primary-foreground/20 backdrop-blur-sm rounded-full px-4 py-2">
            <Heart className="h-5 w-5 text-accent" />
            <span className="text-primary-foreground font-medium">Pet-Friendly</span>
          </div>
          <div className="flex items-center space-x-2 bg-primary-foreground/20 backdrop-blur-sm rounded-full px-4 py-2">
            <Star className="h-5 w-5 text-accent" />
            <span className="text-primary-foreground font-medium">Live Music</span>
          </div>
          <div className="flex items-center space-x-2 bg-primary-foreground/20 backdrop-blur-sm rounded-full px-4 py-2">
            <Heart className="h-5 w-5 text-accent" />
            <span className="text-primary-foreground font-medium">Community Hub</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <button 
          onClick={scrollToAbout}
          className="p-3 rounded-full bg-primary-foreground/20 backdrop-blur-sm hover:bg-primary-foreground/30 transition-all duration-300"
        >
          <ArrowDown className="h-6 w-6 text-primary-foreground" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;