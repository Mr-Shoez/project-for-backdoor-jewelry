import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Import images
import chainGold from "@/assets/chain-gold.jpg";
import chainSilver from "@/assets/chain-silver.jpg";
import chainRoseGold from "@/assets/chain-rose-gold.jpg";

const readyMadeBracelets = [
  {
    id: 1,
    name: "Classic Gold Bracelet",
    image: chainGold,
    price: 45,
    description: "Elegant gold chain bracelet, perfect for everyday wear"
  },
  {
    id: 2,
    name: "Sterling Silver Bracelet",
    image: chainSilver,
    price: 35,
    description: "Delicate silver chain bracelet with timeless appeal"
  },
  {
    id: 3,
    name: "Rose Gold Bracelet",
    image: chainRoseGold,
    price: 50,
    description: "Beautiful rose gold chain bracelet for a modern look"
  },
  {
    id: 4,
    name: "Gold Heart Bracelet",
    image: chainGold,
    price: 60,
    description: "Gold chain bracelet with heart charm included"
  },
  {
    id: 5,
    name: "Silver Star Bracelet",
    image: chainSilver,
    price: 47,
    description: "Silver chain bracelet with star charm included"
  },
  {
    id: 6,
    name: "Rose Gold Infinity",
    image: chainRoseGold,
    price: 68,
    description: "Rose gold chain with infinity charm for eternal elegance"
  },
];

const ReadyMade = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Ready-Made <span className="text-forest-green">Bracelets</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Beautiful pre-designed bracelets ready to wear. Each piece is crafted with 
            care and attention to detail for immediate enjoyment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {readyMadeBracelets.map((bracelet) => (
            <Card key={bracelet.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <img
                  src={bracelet.image}
                  alt={bracelet.name}
                  className="w-full h-48 object-cover rounded-md"
                />
              </CardHeader>
              <CardContent className="space-y-4">
                <CardTitle className="text-foreground">{bracelet.name}</CardTitle>
                <p className="text-muted-foreground text-sm">{bracelet.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-forest-green">
                    ${bracelet.price}
                  </span>
                  <Button variant="forest" size="sm">
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want something more personalized?
          </p>
          <Button variant="jewelry" size="lg">
            Create Custom Bracelet
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReadyMade;