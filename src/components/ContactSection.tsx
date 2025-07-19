import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Coffee Street", "Downtown District", "City, State 12345"],
      action: () => window.open('https://maps.google.com/?q=123+Coffee+Street')
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["(555) 123-CAFE", "Mon-Sun: 8AM-8PM"],
      action: () => window.open('tel:+15551234567')
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@cafe16.com", "We respond within 24 hours"],
      action: () => window.open('mailto:hello@cafe16.com')
    }
  ];

  const socialLinks = [
    { icon: Instagram, url: 'https://instagram.com/cafe16', name: 'Instagram' },
    { icon: Facebook, url: 'https://facebook.com/cafe16', name: 'Facebook' },
    { icon: Twitter, url: 'https://twitter.com/cafe16', name: 'Twitter' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-sage">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-script text-5xl font-bold text-primary mb-4 animate-fade-in-up">
            Find Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
            We're conveniently located in the heart of downtown. Come visit us for the best coffee experience in the city!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            {contactInfo.map((info, index) => (
              <Card 
                key={info.title}
                className="p-6 hover-lift bg-card shadow-soft border-0 cursor-pointer transition-all duration-300"
                onClick={info.action}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-elegant text-xl font-bold text-primary mb-2">
                      {info.title}
                    </h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-foreground leading-relaxed">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </Card>
            ))}

            {/* Hours Card */}
            <Card className="p-6 bg-primary/5 shadow-soft border-0 animate-scale-in">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-elegant text-xl font-bold text-primary mb-3">
                    Opening Hours
                  </h3>
                  <div className="space-y-1 text-foreground">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-medium">8:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday - Sunday</span>
                      <span className="font-medium">8:00 AM - 8:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Social Media */}
            <Card className="p-6 bg-card shadow-soft border-0 animate-fade-in-up">
              <h3 className="font-elegant text-xl font-bold text-primary mb-4">
                Follow Our Journey
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Button
                    key={social.name}
                    variant="outline"
                    size="icon"
                    className="border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    onClick={() => window.open(social.url)}
                  >
                    <social.icon className="h-5 w-5" />
                  </Button>
                ))}
              </div>
              <p className="text-muted-foreground mt-3 text-sm">
                Share your Cafe 16 moments with #Cafe16Community
              </p>
            </Card>
          </div>

          {/* Map Section */}
          <div className="animate-slide-in-right">
            <Card className="p-6 bg-card shadow-warm border-0 hover-lift">
              <h3 className="font-elegant text-2xl font-bold text-primary mb-4">
                Location & Directions
              </h3>
              
              {/* Embedded Map Placeholder */}
              <div className="bg-muted rounded-xl h-[400px] mb-6 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
                <div className="text-center z-10">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4 animate-bounce-gentle" />
                  <h4 className="font-elegant text-xl font-bold text-primary mb-2">
                    123 Coffee Street
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    Downtown District, City State 12345
                  </p>
                  <Button 
                    className="bg-gradient-warm hover:shadow-warm hover:scale-105 transition-all duration-300"
                    onClick={() => window.open('https://maps.google.com/?q=123+Coffee+Street')}
                  >
                    Get Directions
                  </Button>
                </div>
              </div>

              {/* Parking Info */}
              <div className="bg-gradient-sage rounded-xl p-4">
                <h4 className="font-semibold text-primary mb-2">Parking & Accessibility</h4>
                <ul className="text-sm text-foreground space-y-1">
                  <li>• Free street parking available</li>
                  <li>• Wheelchair accessible entrance</li>
                  <li>• Pet-friendly outdoor seating</li>
                  <li>• Bike racks available</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;