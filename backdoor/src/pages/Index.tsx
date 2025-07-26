import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, Users, Sparkles, Clock, Award } from "lucide-react";
import heroImage from "@/assets/hero-jewelry.jpg";
import chainGold from "@/assets/chain-gold.jpg";
import chainSilver from "@/assets/chain-silver.jpg";
import chainRoseGold from "@/assets/chain-rose-gold.jpg";
import workshopInterior from "@/assets/workshop-interior.jpg";
import lifestyleBracelets from "@/assets/lifestyle-bracelets.jpg";
import productDisplay from "@/assets/product-display.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Enhanced Hero Section with Animations */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center animate-fade-in"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 animate-scale-in">
          <Badge className="mb-6 bg-light-green/20 text-light-green border-light-green/30 hover:bg-light-green/30 transition-all duration-300">
            <Sparkles className="w-4 h-4 mr-2" />
            Handcrafted with Love
          </Badge>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Welcome to <span className="text-light-green bg-gradient-to-r from-light-green to-forest-green bg-clip-text text-transparent">Backdoor Jewelry</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-white/90 max-w-3xl mx-auto">
            Creating beautiful permanent bracelets and custom jewelry that tells your unique story
          </p>
          <p className="text-lg mb-8 text-white/70 max-w-2xl mx-auto">
            Each piece is handcrafted with premium materials and personalized just for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/custom-bracelets">
              <Button variant="jewelry" size="lg" className="text-lg px-8 hover-scale shadow-lg">
                <Heart className="w-5 h-5 mr-2" />
                Create Custom Bracelet
              </Button>
            </Link>
            <Link to="/store">
              <Button variant="lightGreen" size="lg" className="text-lg px-8 hover-scale shadow-lg">
                <Sparkles className="w-5 h-5 mr-2" />
                Browse Collection
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Floating elements for visual interest */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-light-green rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-white rounded-full opacity-40 animate-pulse delay-500"></div>
        <div className="absolute top-2/3 left-1/3 w-1 h-1 bg-light-green rounded-full opacity-80 animate-pulse delay-1000"></div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-forest-green/5 to-light-green/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-3xl md:text-4xl font-bold text-forest-green mb-2">500+</div>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
            <div className="animate-fade-in delay-200">
              <div className="text-3xl md:text-4xl font-bold text-forest-green mb-2">1000+</div>
              <p className="text-muted-foreground">Bracelets Created</p>
            </div>
            <div className="animate-fade-in delay-400">
              <div className="text-3xl md:text-4xl font-bold text-forest-green mb-2">24/7</div>
              <p className="text-muted-foreground">Customer Support</p>
            </div>
            <div className="animate-fade-in delay-600">
              <div className="text-3xl md:text-4xl font-bold text-forest-green mb-2">100%</div>
              <p className="text-muted-foreground">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose <span className="text-forest-green">Backdoor Jewelry</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We specialize in creating unique, personalized jewelry experiences that last a lifetime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-forest-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">✨</span>
                </div>
                <CardTitle className="text-forest-green">Custom Permanent Bracelets</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Design your perfect permanent bracelet with our step-by-step customization process. 
                  Choose your chain, charms, and engraving for a truly unique piece.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-forest-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">💎</span>
                </div>
                <CardTitle className="text-forest-green">Premium Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  All our jewelry is crafted from high-quality materials including 14k gold, 
                  sterling silver, and rose gold for lasting beauty and durability.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-forest-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🎨</span>
                </div>
                <CardTitle className="text-forest-green">Personalized Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  From custom engraving to charm selection, every piece is tailored to your 
                  personal style and preferences for a truly one-of-a-kind experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story Section with Workshop Image */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-forest-green/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-6 bg-forest-green/10 text-forest-green border-forest-green/20">
                <Award className="w-4 h-4 mr-2" />
                Our Craftsmanship
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Where <span className="text-forest-green">Magic</span> Happens
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Step into our workshop where every permanent bracelet comes to life. Our skilled artisans 
                combine traditional jewelry-making techniques with modern precision to create pieces that 
                will last a lifetime.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Each bracelet is welded directly onto your wrist, creating a seamless, permanent bond 
                that symbolizes unbreakable connections and cherished memories.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/book-appointment">
                  <Button variant="jewelry" className="hover-scale">
                    <Clock className="w-4 h-4 mr-2" />
                    Book Your Session
                  </Button>
                </Link>
                <Link to="/custom-bracelets">
                  <Button variant="outline" className="hover-scale">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Design Now
                  </Button>
                </Link>
              </div>
            </div>
            <div className="animate-fade-in delay-300">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={workshopInterior} 
                  alt="Our jewelry workshop interior" 
                  className="w-full h-[400px] object-cover hover-scale transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Your Journey to the <span className="text-forest-green">Perfect Bracelet</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From design to welding, every step is crafted to create your unique piece.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group animate-fade-in">
              <div className="w-20 h-20 bg-gradient-to-br from-forest-green to-light-green rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-forest-green mb-2">Design</h3>
              <p className="text-muted-foreground text-sm">Choose your chain, charms, and engraving</p>
            </div>

            <div className="text-center group animate-fade-in delay-200">
              <div className="w-20 h-20 bg-gradient-to-br from-forest-green to-light-green rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-forest-green mb-2">Book</h3>
              <p className="text-muted-foreground text-sm">Schedule your appointment with us</p>
            </div>

            <div className="text-center group animate-fade-in delay-400">
              <div className="w-20 h-20 bg-gradient-to-br from-forest-green to-light-green rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-forest-green mb-2">Craft</h3>
              <p className="text-muted-foreground text-sm">Watch as we weld your bracelet perfectly</p>
            </div>

            <div className="text-center group animate-fade-in delay-600">
              <div className="w-20 h-20 bg-gradient-to-br from-forest-green to-light-green rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-forest-green mb-2">Cherish</h3>
              <p className="text-muted-foreground text-sm">Enjoy your permanent bracelet forever</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-light-green/5 to-forest-green/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={lifestyleBracelets} 
                  alt="Beautiful lifestyle shot of permanent bracelets" 
                  className="w-full h-[500px] object-cover hover-scale transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            </div>
            <div className="animate-fade-in delay-300">
              <Badge className="mb-6 bg-light-green/10 text-light-green border-light-green/20">
                <Users className="w-4 h-4 mr-2" />
                Lifestyle
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Wear Your <span className="text-forest-green">Story</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our permanent bracelets aren't just jewelry – they're symbols of connection, 
                milestones, and memories. Whether celebrating friendship, love, or personal achievements, 
                each piece becomes part of your daily story.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-light-green" />
                  <span className="text-muted-foreground">Waterproof and durable for everyday wear</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-light-green" />
                  <span className="text-muted-foreground">Hypoallergenic materials safe for sensitive skin</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-light-green" />
                  <span className="text-muted-foreground">Perfect for layering and stacking</span>
                </div>
              </div>
              <Link to="/custom-bracelets">
                <Button variant="lightGreen" size="lg" className="hover-scale">
                  <Heart className="w-5 h-5 mr-2" />
                  Start Your Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our <span className="text-forest-green">Customers</span> Say
            </h2>
            <p className="text-lg text-muted-foreground">Real stories from real customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-light-green/20 animate-fade-in">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "The most beautiful bracelet I've ever owned! The welding experience was so special, 
                  and I love how it never comes off. It's become part of me."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-forest-green to-light-green rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">SA</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Sarah A.</p>
                    <p className="text-sm text-muted-foreground">Cape Town</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-light-green/20 animate-fade-in delay-200">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "My best friend and I got matching bracelets here. The quality is incredible and 
                  the experience was so memorable. Highly recommend!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-forest-green to-light-green rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">MJ</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Maya J.</p>
                    <p className="text-sm text-muted-foreground">Johannesburg</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-light-green/20 animate-fade-in delay-400">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Amazing service and beautiful bracelets! I've been wearing mine for 6 months 
                  and it still looks brand new. Worth every penny."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-forest-green to-light-green rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">LK</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Lisa K.</p>
                    <p className="text-sm text-muted-foreground">Durban</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 bg-light-green/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured <span className="text-forest-green">Collections</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover our most popular pieces and get inspired for your custom creation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <img 
                  src={chainGold} 
                  alt="Gold Collection" 
                  className="w-full h-48 object-cover rounded-md"
                />
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <CardTitle className="text-forest-green">Gold Collection</CardTitle>
                <p className="text-muted-foreground">
                  Timeless elegance with our 14k gold chains and charms.
                </p>
                <Link to="/store">
                  <Button variant="forest">Shop Gold</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <img 
                  src={chainSilver} 
                  alt="Silver Collection" 
                  className="w-full h-48 object-cover rounded-md"
                />
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <CardTitle className="text-forest-green">Silver Collection</CardTitle>
                <p className="text-muted-foreground">
                  Classic and versatile sterling silver pieces for every style.
                </p>
                <Link to="/store">
                  <Button variant="forest">Shop Silver</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <img 
                  src={chainRoseGold} 
                  alt="Rose Gold Collection" 
                  className="w-full h-48 object-cover rounded-md"
                />
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <CardTitle className="text-forest-green">Rose Gold Collection</CardTitle>
                <p className="text-muted-foreground">
                  Modern and romantic rose gold pieces for contemporary style.
                </p>
                <Link to="/store">
                  <Button variant="forest">Shop Rose Gold</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action with Product Display */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-forest-green/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-in">
              <Badge className="mb-6 bg-jewelry/10 text-jewelry border-jewelry/20">
                <Sparkles className="w-4 h-4 mr-2" />
                Ready to Begin?
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Ready to Create Your <span className="text-forest-green">Perfect Bracelet</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Start your custom jewelry journey today. Design a permanent bracelet that's 
                uniquely yours and tell your story through beautiful jewelry.
              </p>
              <p className="text-muted-foreground mb-8">
                Join thousands of satisfied customers who have discovered the magic of permanent bracelets. 
                Book your appointment today and let us create something beautiful together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/custom-bracelets">
                  <Button variant="jewelry" size="lg" className="text-lg px-8 hover-scale shadow-lg">
                    <Heart className="w-5 h-5 mr-2" />
                    Start Customizing
                  </Button>
                </Link>
                <Link to="/book-appointment">
                  <Button variant="lightGreen" size="lg" className="text-lg px-8 hover-scale shadow-lg">
                    <Clock className="w-5 h-5 mr-2" />
                    Book Appointment
                  </Button>
                </Link>
              </div>
            </div>
            <div className="animate-fade-in delay-300">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={productDisplay} 
                  alt="Beautiful jewelry display showcasing our permanent bracelets" 
                  className="w-full h-[400px] object-cover hover-scale transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-sm font-semibold text-forest-green">✨ Each piece handcrafted with love</p>
                    <p className="text-xs text-muted-foreground mt-1">Premium materials • Lifetime quality • Personal touch</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />

      {/* Footer */}
      <footer className="bg-forest-green text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-xl font-bold mb-2">Backdoor Jewelry</h3>
          <p className="text-white/80 mb-4">
            Creating beautiful permanent bracelets and custom jewelry since day one.
          </p>
          <p className="text-white/60 text-sm">
            © 2024 Backdoor Jewelry. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;