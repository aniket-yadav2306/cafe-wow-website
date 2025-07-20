import { Star, Coffee, Utensils, Cookie } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import menuImage from '@/assets/menu-preview.jpg';

const MenuSection = () => {
  const menuCategories = [
    {
      icon: Coffee,
      title: "Signature Coffees",
      items: [
        { name: "Cafe 16 Special", price: "$5.50", description: "Our signature blend with a hint of vanilla and caramel", popular: true },
        { name: "Golden Latte", price: "$4.75", description: "Turmeric-infused latte with oat milk and honey" },
        { name: "Mocha Dreams", price: "$5.25", description: "Rich chocolate and espresso with whipped cream" },
      ]
    },
    {
      icon: Utensils,
      title: "Fresh Bites",
      items: [
        { name: "Avocado Toast", price: "$8.50", description: "Sourdough with smashed avocado, feta, and microgreens", popular: true },
        { name: "Breakfast Bowl", price: "$12.00", description: "Quinoa, roasted vegetables, poached egg, and tahini dressing" },
        { name: "Club Sandwich", price: "$10.50", description: "Triple-decker with turkey, bacon, and fresh vegetables" },
      ]
    },
    {
      icon: Cookie,
      title: "Sweet Treats",
      items: [
        { name: "Homemade Cookies", price: "$3.00", description: "Daily selection of freshly baked cookies" },
        { name: "Seasonal Cake", price: "$4.50", description: "Ask about our rotating seasonal flavors", popular: true },
        { name: "Fruit Tarts", price: "$5.00", description: "Individual tarts with seasonal fresh fruits" },
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="mb-6">
            <span className="inline-block bg-accent/20 rounded-full px-8 py-3 text-primary font-bold text-lg mb-8 animate-bounce-gentle">
              🍽️ Fresh Daily Menu 🍽️
            </span>
          </div>
          <h2 className="font-script text-6xl md:text-7xl font-bold text-primary mb-6 animate-fade-in-up">
            Our Menu
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in-up font-medium">
            Crafted with love, served with care. Every item on our menu tells a story of quality and passion. ✨
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-16 animate-scale-in">
          <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-warm hover-lift">
            <img 
              src={menuImage} 
              alt="Delicious food and coffee at Cafe 16" 
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-overlay opacity-30"></div>
            <div className="absolute bottom-8 left-8 text-primary-foreground">
              <h3 className="font-elegant text-3xl font-bold mb-2">Fresh. Local. Delicious.</h3>
              <p className="text-lg">Made with love, every single day</p>
            </div>
          </div>
        </div>

        {/* Menu Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {menuCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title} 
              className="p-6 hover-lift bg-card shadow-soft border-0"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="animate-fade-in-up">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-elegant text-2xl font-bold text-primary">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div 
                      key={item.name} 
                      className="border-b border-border pb-4 last:border-b-0 last:pb-0"
                      style={{ animationDelay: `${(categoryIndex * 0.2) + (itemIndex * 0.1)}s` }}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-semibold text-foreground">{item.name}</h4>
                          {item.popular && (
                            <Badge className="bg-accent text-accent-foreground text-xs">
                              <Star className="h-3 w-3 mr-1" />
                              Popular
                            </Badge>
                          )}
                        </div>
                        <span className="font-bold text-primary">{item.price}</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-scale-in">
          <div className="bg-gradient-sage rounded-2xl p-8 max-w-2xl mx-auto shadow-soft">
            <h3 className="font-elegant text-2xl font-bold text-primary mb-4">
              Can't decide? Let us surprise you!
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our baristas love creating custom drinks based on your preferences. 
              Just ask us what we recommend today!
            </p>
            <Button 
              className="bg-gradient-warm hover:shadow-warm hover:scale-105 transition-all duration-300 font-semibold px-8"
              onClick={() => {
                const element = document.querySelector('#booking');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Reserve Your Table
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;