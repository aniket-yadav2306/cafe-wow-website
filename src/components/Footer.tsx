import { Heart, Coffee, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Events', href: '#events' },
    { label: 'Book a Table', href: '#booking' },
    { label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Instagram, url: 'https://instagram.com/cafe16', name: 'Instagram' },
    { icon: Facebook, url: 'https://facebook.com/cafe16', name: 'Facebook' },
    { icon: Twitter, url: 'https://twitter.com/cafe16', name: 'Twitter' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-gradient-warm rounded-full">
                <Coffee className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-script text-3xl font-bold">Cafe 16</h3>
                <p className="text-primary-foreground/80">Where Coffee Meets Comfort</p>
              </div>
            </div>
            
            <p className="text-primary-foreground/90 leading-relaxed max-w-md">
              More than just a cafe, we're a community hub where every cup tells a story, 
              every corner invites connection, and every moment feels like home. 
              Join our pet-friendly family today!
            </p>

            <div className="flex items-center space-x-2 text-primary-foreground/80">
              <Heart className="h-4 w-4 text-accent" />
              <span className="text-sm">Proudly serving the community since 2020</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-elegant text-xl font-bold">Quick Links</h4>
            <nav className="flex flex-col space-y-3">
              {quickLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-primary-foreground/80 hover:text-accent transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-elegant text-xl font-bold">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
                <div className="text-sm">
                  <p>123 Coffee Street</p>
                  <p>Downtown District, City 12345</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <div className="text-sm">
                  <p>(555) 123-CAFE</p>
                  <p>Mon-Sun: 8AM-8PM</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <a href="mailto:hello@cafe16.com" className="text-sm hover:text-accent transition-colors">
                  hello@cafe16.com
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-3">
              <h5 className="font-semibold">Follow Us</h5>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <Button
                    key={social.name}
                    variant="outline"
                    size="icon"
                    className="border-primary-foreground/20 bg-accent text-primary transition-all duration-300"

                    onClick={() => window.open(social.url)}
                  >
                    <social.icon className="h-4 w-4" />
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-primary-foreground/70">
              <p>&copy; {currentYear} Cafe 16. All rights reserved.</p>
              <span className="hidden md:inline">|</span>
              <div className="flex items-center space-x-1">
                <span>Made with</span>
                <Heart className="h-3 w-3 text-accent animate-pulse" />
                <span>for our community</span>
              </div>
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <button 
                className="text-primary-foreground/70 hover:text-accent transition-colors"
                onClick={() => window.open('/privacy', '_blank')}
              >
                Privacy Policy
              </button>
              <button 
                className="text-primary-foreground/70 hover:text-accent transition-colors"
                onClick={() => window.open('/terms', '_blank')}
              >
                Terms of Service
              </button>
              <Button
                variant="ghost"
                size="sm"
                className="text-primary-foreground/70 hover:text-accent hover:bg-transparent p-0"
                onClick={scrollToTop}
              >
                Back to Top ↑
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;