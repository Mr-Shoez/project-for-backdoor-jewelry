import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-16 bg-light-green/20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Visit Our Store</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Come experience our permanent bracelet welding in person. Book your appointment today!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="text-center">
            <CardHeader>
              <MapPin className="w-8 h-8 text-forest-green mx-auto mb-2" />
              <CardTitle className="text-lg">Location</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                123 Jewelry Lane<br />
                Downtown District<br />
                City, State 12345
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <Phone className="w-8 h-8 text-forest-green mx-auto mb-2" />
              <CardTitle className="text-lg">Phone</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                (555) 123-JEWELRY<br />
                (555) 123-5393
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <Mail className="w-8 h-8 text-forest-green mx-auto mb-2" />
              <CardTitle className="text-lg">Email</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                hello@backdoorjewelry.com<br />
                bookings@backdoorjewelry.com
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <Clock className="w-8 h-8 text-forest-green mx-auto mb-2" />
              <CardTitle className="text-lg">Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Mon-Sat: 10am-8pm<br />
                Sunday: 12pm-6pm
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <Button variant="jewelry" size="lg" asChild>
            <a href="/book-appointment">Book Your Appointment</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;