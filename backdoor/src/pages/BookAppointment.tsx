import { useState } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CalendarIcon, Clock } from "lucide-react";
import { format } from "date-fns";

const BookAppointment = () => {
  const location = useLocation();
  const braceletDetails = location.state?.braceletDetails;
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: undefined as Date | undefined,
    time: "",
    notes: "",
  });

  const timeSlots = [
    "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
    "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
    "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
    "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM"
  ];

  // Function to send order details to your WhatsApp
  const sendToWhatsApp = (orderDetails: string) => {
    // YOUR WHATSAPP NUMBER: This is where all order notifications will be sent
    // Format: Country code + phone number (no + sign, no spaces, no dashes)
    // Example: For +27 73 834 9023, use "27738349023"
    const yourWhatsAppNumber = "27738349023"; // <-- Current number: 0738349023 (South Africa)
    
    // Encode the message for URL (converts spaces, special characters, etc.)
    const encodedMessage = encodeURIComponent(orderDetails);
    
    // Create WhatsApp Web URL with your number and the pre-filled message
    const whatsappUrl = `https://wa.me/${yourWhatsAppNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new browser tab with the message ready to send
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.date || !formData.time) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Format order details for WhatsApp
    const orderMessage = `🔥 NEW BRACELET ORDER 🔥

👤 Customer: ${formData.name}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone || "Not provided"}

💎 BRACELET DETAILS:${braceletDetails ? `
Chain: ${braceletDetails.chainName} - $${braceletDetails.chainPrice || "N/A"}${braceletDetails.charms && braceletDetails.charms.length > 0 ? `
Charms: ${braceletDetails.charms.map((charm: any) => `${charm.name} ($${charm.price})`).join(", ")}` : ""}${braceletDetails.engraving ? `
Engraving: "${braceletDetails.engraving}"` : ""}
💰 Total: $${braceletDetails.total}` : `
No bracelet design selected - walk-in consultation`}

📅 Appointment: ${format(formData.date, "PPP")} at ${formData.time}${formData.notes ? `
📝 Notes: ${formData.notes}` : ""}

Ready to create this beautiful piece! 💍`;

    // Send to WhatsApp
    sendToWhatsApp(orderMessage);

    // Show success message
    toast({
      title: "Appointment Booked!",
      description: `Your appointment is scheduled for ${format(formData.date, "PPP")} at ${formData.time}. Order details sent to WhatsApp!`,
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: undefined,
      time: "",
      notes: "",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Book Your <span className="text-forest-green">Appointment</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Schedule your visit to create your perfect permanent bracelet. 
            Our expert team will weld your custom design for a perfect fit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Booking Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-forest-green">Appointment Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Select Date *</Label>
                  <Calendar
                    mode="single"
                    selected={formData.date}
                    onSelect={(date) => setFormData({ ...formData, date })}
                    disabled={(date) => date < new Date() || date.getDay() === 0} // Disable past dates and Sundays
                    className="rounded-md border p-3"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Select Time *</Label>
                  <Select value={formData.time} onValueChange={(time) => setFormData({ ...formData, time })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a time slot" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((slot) => (
                        <SelectItem key={slot} value={slot}>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {slot}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Any special requests or questions?"
                    rows={3}
                  />
                </div>

                <Button type="submit" variant="jewelry" size="lg" className="w-full">
                  Book Appointment
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Bracelet Summary */}
          <div className="space-y-6">
            {braceletDetails && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-forest-green">Your Bracelet Design</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Chain:</span>
                    <span className="font-semibold">{braceletDetails.chainName}</span>
                  </div>
                  
                  {braceletDetails.charms && braceletDetails.charms.length > 0 && (
                    <div>
                      <span>Charms:</span>
                      <ul className="mt-1">
                        {braceletDetails.charms.map((charm: any, index: number) => (
                          <li key={index} className="ml-4 text-sm">• {charm.name}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {braceletDetails.engraving && (
                    <div className="flex justify-between">
                      <span>Engraving:</span>
                      <span className="font-semibold">"{braceletDetails.engraving}"</span>
                    </div>
                  )}
                  
                  <div className="border-t pt-2">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total:</span>
                      <span className="text-forest-green">${braceletDetails.total}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            <Card>
              <CardHeader>
                <CardTitle className="text-forest-green">What to Expect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-forest-green text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-semibold">Design Consultation</h4>
                    <p className="text-sm text-muted-foreground">Review your design and make any final adjustments</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-forest-green text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-semibold">Perfect Fit</h4>
                    <p className="text-sm text-muted-foreground">We'll measure your wrist for the perfect bracelet size</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-forest-green text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-semibold">Permanent Welding</h4>
                    <p className="text-sm text-muted-foreground">Quick and painless welding process (about 5-10 minutes)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-forest-green text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <h4 className="font-semibold">Enjoy Your Bracelet</h4>
                    <p className="text-sm text-muted-foreground">Your permanent bracelet is ready to wear forever!</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-forest-green">Store Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p><strong>Address:</strong> 123 Jewelry Lane, Downtown District</p>
                <p><strong>Phone:</strong> (555) 123-JEWELRY</p>
                <p><strong>Hours:</strong> Mon-Sat 10am-8pm, Sun 12pm-6pm</p>
                <p className="text-sm text-muted-foreground mt-4">
                  Free parking available behind the building. Look for our forest green storefront!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;