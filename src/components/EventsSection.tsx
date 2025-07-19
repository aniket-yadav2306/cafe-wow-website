import { Calendar, Music, Mic, Heart, Clock, MapPin, Coffee } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import liveMusicImage from '@/assets/live-music.jpg';

const EventsSection = () => {
  const upcomingEvents = [
    {
      title: "Live Acoustic Night",
      date: "Every Friday",
      time: "7:00 PM - 9:00 PM",
      description: "Local musicians perform acoustic sets in our cozy corner. Bring your friends and enjoy great music with your coffee.",
      type: "Music",
      icon: Music,
      featured: true
    },
    {
      title: "Open Mic Mondays",
      date: "Every Monday",
      time: "6:30 PM - 8:30 PM",
      description: "Share your talent! Whether it's music, poetry, or comedy, our stage is yours every Monday evening.",
      type: "Community",
      icon: Mic,
      featured: false
    },
    {
      title: "Pet Playdate",
      date: "Every Saturday",
      time: "10:00 AM - 12:00 PM",
      description: "Bring your furry friends for a social morning! Pet treats provided, human treats available for purchase.",
      type: "Pet-Friendly",
      icon: Heart,
      featured: false
    },
    {
      title: "Coffee Cupping Session",
      date: "Second Sunday",
      time: "2:00 PM - 4:00 PM",
      description: "Learn about our coffee sourcing and brewing methods. Taste different origins and discover your favorites.",
      type: "Educational",
      icon: Coffee,
      featured: false
    }
  ];

  const getEventColor = (type: string) => {
    switch (type) {
      case 'Music': return 'bg-accent text-accent-foreground';
      case 'Community': return 'bg-secondary text-secondary-foreground';
      case 'Pet-Friendly': return 'bg-primary text-primary-foreground';
      case 'Educational': return 'bg-muted text-muted-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="events" className="py-20 bg-gradient-sage">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-script text-5xl font-bold text-primary mb-4 animate-fade-in-up">
            Special Events
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
            Join us for weekly events that bring our community together. From live music to pet playdates, there's always something special happening at Cafe 16.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Featured Event Image */}
          <div className="relative animate-slide-in-left">
            <div className="rounded-2xl overflow-hidden shadow-warm hover-lift">
              <img 
                src={liveMusicImage} 
                alt="Live music at Cafe 16" 
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -top-6 -right-6 bg-accent rounded-2xl p-4 shadow-soft animate-bounce-gentle">
              <Music className="h-8 w-8 text-primary" />
            </div>
          </div>

          {/* Featured Event Content */}
          <div className="space-y-6 animate-slide-in-right">
            <div className="bg-card rounded-2xl p-8 shadow-soft hover-lift">
              <Badge className="bg-accent text-accent-foreground mb-4">
                <Music className="h-3 w-3 mr-1" />
                Featured Event
              </Badge>
              <h3 className="font-elegant text-3xl font-bold text-primary mb-4">
                Live Acoustic Nights
              </h3>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Every Friday evening, our cafe transforms into an intimate concert venue. 
                Local artists share their music while you enjoy our signature drinks and 
                the warm, cozy atmosphere that makes Cafe 16 special.
              </p>
              <div className="flex items-center space-x-4 text-muted-foreground mb-6">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Every Friday</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>7:00 PM - 9:00 PM</span>
                </div>
              </div>
              <Button 
                className="bg-gradient-warm hover:shadow-warm hover:scale-105 transition-all duration-300 font-semibold"
                onClick={() => {
                  const element = document.querySelector('#booking');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Reserve for Tonight
              </Button>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {upcomingEvents.map((event, index) => (
            <Card 
              key={event.title} 
              className="p-6 hover-lift bg-card/90 backdrop-blur-sm shadow-soft border-0 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="animate-scale-in">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center">
                    <event.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge className={getEventColor(event.type)}>
                    {event.type}
                  </Badge>
                </div>
                
                <h3 className="font-elegant text-xl font-bold text-primary mb-2">
                  {event.title}
                </h3>
                
                <div className="space-y-1 mb-3 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-3 w-3" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-3 w-3" />
                    <span>{event.time}</span>
                  </div>
                </div>
                
                <p className="text-sm text-foreground leading-relaxed">
                  {event.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="bg-card rounded-2xl p-8 max-w-2xl mx-auto shadow-soft">
            <h3 className="font-elegant text-2xl font-bold text-primary mb-4">
              Want to host your own event?
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Cafe 16 is available for private parties, book launches, art exhibitions, and more. 
              Let's create something special together!
            </p>
            <Button 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-semibold px-8"
              onClick={() => {
                const element = document.querySelector('#contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Us About Events
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;