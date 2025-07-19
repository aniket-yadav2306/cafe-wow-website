import { Heart, Users, Coffee, Wifi } from 'lucide-react';
import { Card } from '@/components/ui/card';
import petFriendlyImage from '@/assets/pet-friendly.jpg';

const AboutSection = () => {
  const features = [
    {
      icon: Heart,
      title: "Pet-Friendly Haven",
      description: "Bring your furry friends! We welcome well-behaved pets and even have special treats for them."
    },
    {
      icon: Users,
      title: "Community Space",
      description: "More than just a cafe - we're a gathering place where neighbors become friends and stories are shared."
    },
    {
      icon: Coffee,
      title: "Artisan Coffee",
      description: "Carefully sourced beans, expertly roasted, and crafted with love by our skilled baristas."
    },
    {
      icon: Wifi,
      title: "Work & Relax",
      description: "Free WiFi, cozy nooks, and the perfect ambiance for both productivity and relaxation."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-sage">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-script text-5xl font-bold text-primary mb-4 animate-fade-in-up">
            Our Story
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
            Born from a passion for community and great coffee, Cafe 16 has been bringing people together since day one.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Story Content */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="bg-card rounded-2xl p-8 shadow-soft hover-lift">
              <h3 className="font-elegant text-3xl font-bold text-primary mb-4">
                Where It All Began
              </h3>
              <p className="text-lg text-foreground leading-relaxed mb-4">
                What started as a dream to create a warm, welcoming space has blossomed into a beloved community hub. 
                At Cafe 16, we believe that the best conversations happen over great coffee, and every customer 
                becomes part of our extended family.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                From our carefully curated menu to our pet-friendly atmosphere, every detail has been crafted 
                to make you feel at home. Whether you're catching up with friends, working on your latest project, 
                or simply enjoying a quiet moment with your furry companion, Cafe 16 is your sanctuary.
              </p>
            </div>
          </div>

          {/* Pet-Friendly Image */}
          <div className="relative animate-slide-in-right">
            <div className="rounded-2xl overflow-hidden shadow-warm hover-lift">
              <img 
                src={petFriendlyImage} 
                alt="Pet-friendly atmosphere at Cafe 16" 
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-accent rounded-2xl p-4 shadow-soft animate-bounce-gentle">
              <Heart className="h-8 w-8 text-primary" />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="p-6 text-center hover-lift bg-card/80 backdrop-blur-sm border-0 shadow-soft"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="animate-scale-in">
                <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-elegant text-xl font-bold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;