import { Star, Quote } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Dog Mom & Coffee Lover",
      avatar: "/placeholder.svg",
      rating: 5,
      text: "Cafe 16 is our weekly haven! My golden retriever Luna absolutely loves the pet treats, and I can't get enough of their signature latte. The staff treats us like family every single time.",
      featured: true
    },
    {
      name: "Mike Chen",
      role: "Local Artist",
      avatar: "/placeholder.svg",
      rating: 5,
      text: "The Friday night acoustic sessions are incredible! As a local musician, I love how Cafe 16 supports the arts community. Plus, their coffee keeps me energized for late-night creative sessions.",
      featured: false
    },
    {
      name: "Emma Rodriguez",
      role: "Remote Worker",
      avatar: "/placeholder.svg",
      rating: 5,
      text: "Perfect work-from-cafe spot! Great WiFi, comfortable seating, and the baristas remember my order. The atmosphere is cozy without being too noisy. My productivity has never been better!",
      featured: false
    },
    {
      name: "David & Max",
      role: "Father & Son Duo",
      avatar: "/placeholder.svg",
      rating: 5,
      text: "Our Saturday morning tradition! Max loves the pet-friendly environment and I love watching him make friends while I enjoy the best coffee in town. Cafe 16 brings our community together.",
      featured: false
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-accent fill-accent' : 'text-muted-foreground'}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-script text-5xl font-bold text-primary mb-4 animate-fade-in-up">
            What Our Community Says
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
            Don't just take our word for it. Here's what our amazing customers have to say about their Cafe 16 experience.
          </p>
        </div>

        {/* Featured Testimonial */}
        {testimonials.filter(t => t.featured).map((testimonial, index) => (
          <div key={testimonial.name} className="mb-16 animate-scale-in">
            <Card className="max-w-4xl mx-auto p-8 lg:p-12 bg-gradient-sage shadow-warm border-0 hover-lift">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <Avatar className="w-24 h-24 border-4 border-accent">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="text-xl font-bold bg-gradient-warm text-primary">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                </div>
                
                <div className="flex-1 text-center lg:text-left">
                  <Quote className="h-8 w-8 text-accent mb-4 mx-auto lg:mx-0" />
                  <blockquote className="text-xl lg:text-2xl text-foreground leading-relaxed mb-6 font-elegant">
                    "{testimonial.text}"
                  </blockquote>
                  
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <h4 className="font-bold text-lg text-primary">{testimonial.name}</h4>
                      <p className="text-muted-foreground">{testimonial.role}</p>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start mt-3 lg:mt-0">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ))}

        {/* Regular Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.filter(t => !t.featured).map((testimonial, index) => (
            <Card 
              key={testimonial.name} 
              className="p-6 hover-lift bg-card shadow-soft border-0 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="animate-fade-in-up">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Quote */}
                <Quote className="h-6 w-6 text-accent mb-3" />
                <blockquote className="text-foreground leading-relaxed mb-6">
                  "{testimonial.text}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <Avatar className="w-12 h-12 border-2 border-accent/20">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-gradient-warm text-primary font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="bg-card rounded-2xl p-8 max-w-2xl mx-auto shadow-soft">
            <h3 className="font-elegant text-2xl font-bold text-primary mb-4">
              Join Our Growing Community
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Every day, we meet amazing people and their furry friends. 
              Come be part of the Cafe 16 family and create your own story with us!
            </p>
            <div className="flex items-center justify-center space-x-2 text-accent">
              <Star className="h-5 w-5 fill-accent" />
              <span className="font-semibold">4.9/5 stars</span>
              <span className="text-muted-foreground">from 150+ reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;