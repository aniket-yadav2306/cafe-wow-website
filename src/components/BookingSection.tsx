import { useState } from 'react';
import { Calendar, Clock, Users, Mail, Phone, User, MessageSquare } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Reservation Confirmed! 🎉",
        description: "We've received your reservation request. We'll contact you shortly to confirm the details.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const timeSlots = [
    "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
    "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
    "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM"
  ];

  const guestOptions = ["1", "2", "3", "4", "5", "6", "7", "8+"];

  return (
    <section id="booking" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-script text-5xl font-bold text-primary mb-4 animate-fade-in-up">
            Reserve Your Table
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
            Secure your spot at Cafe 16. Whether it's a quiet coffee date or a celebration with friends, we'll make sure everything is perfect.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Booking Form */}
          <Card className="p-8 shadow-warm hover-lift bg-card border-0 animate-slide-in-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center space-x-2 text-primary font-medium">
                    <User className="h-4 w-4" />
                    <span>Full Name</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                    className="border-border focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center space-x-2 text-primary font-medium">
                    <Mail className="h-4 w-4" />
                    <span>Email</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                    className="border-border focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center space-x-2 text-primary font-medium">
                  <Phone className="h-4 w-4" />
                  <span>Phone Number</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(555) 123-4567"
                  required
                  className="border-border focus:border-primary transition-colors"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="date" className="flex items-center space-x-2 text-primary font-medium">
                    <Calendar className="h-4 w-4" />
                    <span>Date</span>
                  </Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    required
                    className="border-border focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time" className="flex items-center space-x-2 text-primary font-medium">
                    <Clock className="h-4 w-4" />
                    <span>Time</span>
                  </Label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={(e) => setFormData(prev => ({ ...prev, time: e.target.value }))}
                    required
                    className="w-full px-3 py-2 border border-border rounded-md focus:border-primary transition-colors bg-background"
                  >
                    <option value="">Select time</option>
                    {timeSlots.map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="guests" className="flex items-center space-x-2 text-primary font-medium">
                    <Users className="h-4 w-4" />
                    <span>Guests</span>
                  </Label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={(e) => setFormData(prev => ({ ...prev, guests: e.target.value }))}
                    required
                    className="w-full px-3 py-2 border border-border rounded-md focus:border-primary transition-colors bg-background"
                  >
                    {guestOptions.map(option => (
                      <option key={option} value={option}>{option} {option === "1" ? "guest" : "guests"}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="flex items-center space-x-2 text-primary font-medium">
                  <MessageSquare className="h-4 w-4" />
                  <span>Special Requests (Optional)</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Any special requests, dietary restrictions, or occasion details..."
                  rows={4}
                  className="border-border focus:border-primary transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-warm hover:shadow-warm hover:scale-105 transition-all duration-300 font-semibold text-lg py-3"
              >
                {isSubmitting ? "Submitting..." : "Reserve Table"}
              </Button>
            </form>
          </Card>

          {/* Reservation Info */}
          <div className="space-y-8 animate-slide-in-right">
            <Card className="p-8 bg-gradient-sage border-0 shadow-soft">
              <h3 className="font-elegant text-2xl font-bold text-primary mb-6">
                Reservation Information
              </h3>
              <div className="space-y-4 text-foreground">
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-accent mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Operating Hours</h4>
                    <p className="text-muted-foreground">Monday - Sunday: 8:00 AM - 8:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-5 w-5 text-accent mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Group Reservations</h4>
                    <p className="text-muted-foreground">For groups of 8+, please call us directly at (555) 123-CAFE</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Calendar className="h-5 w-5 text-accent mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Advance Booking</h4>
                    <p className="text-muted-foreground">We recommend booking 24 hours in advance, especially for weekends</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border-0 shadow-soft">
              <h3 className="font-elegant text-2xl font-bold text-primary mb-6">
                Quick Contact
              </h3>
              <div className="space-y-4">
                <Button 
                  variant="outline"
                  className="w-full justify-start border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  onClick={() => window.open('tel:+15551234567')}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call (555) 123-CAFE
                </Button>
                <Button 
                  variant="outline"
                  className="w-full justify-start border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  onClick={() => window.open('https://wa.me/15551234567')}
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  WhatsApp Us
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;