import { useState, useEffect } from 'react';
import { Menu, X, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Events', href: '#events' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-warm' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4 group cursor-pointer" onClick={() => scrollToSection('#home')}>
            <div className="p-3 bg-gradient-warm rounded-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-soft">
              <Coffee className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="font-script text-3xl font-bold text-primary group-hover:text-accent transition-colors duration-300">Cafe 16</h1>
              <p className="text-sm text-muted-foreground font-medium">☕ Where Coffee Meets Comfort</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="relative text-foreground hover:text-primary transition-colors duration-300 font-medium group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-warm transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('#booking')}
              className="bg-gradient-warm hover:shadow-hover hover:scale-110 transition-all duration-500 font-bold px-6 py-3 rounded-full"
            >
              🪑 Book a Table
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover-warm"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-warm animate-fade-in-up">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('#booking')}
                className="w-full bg-gradient-warm hover:shadow-warm transition-all duration-300 font-medium mt-4"
              >
                Book a Table
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;