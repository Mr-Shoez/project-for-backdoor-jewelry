import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Import images
import chainGold from "@/assets/chain-gold.jpg";
import chainSilver from "@/assets/chain-silver.jpg";
import chainRoseGold from "@/assets/chain-rose-gold.jpg";
import charmHeart from "@/assets/charm-heart.jpg";
import charmStar from "@/assets/charm-star.jpg";
import charmInfinity from "@/assets/charm-infinity.jpg";

const bracelets = [
  { id: 1, name: "Classic Gold Chain", image: chainGold, price: 45, category: "bracelets" },
  { id: 2, name: "Sterling Silver Chain", image: chainSilver, price: 35, category: "bracelets" },
  { id: 3, name: "Rose Gold Chain", image: chainRoseGold, price: 50, category: "bracelets" },
];

const charms = [
  { id: 4, name: "Heart Charm", image: charmHeart, price: 15, category: "charms" },
  { id: 5, name: "Star Charm", image: charmStar, price: 12, category: "charms" },
  { id: 6, name: "Infinity Charm", image: charmInfinity, price: 18, category: "charms" },
];

const necklaces = [
  { id: 7, name: "Gold Pendant Necklace", image: chainGold, price: 85, category: "necklaces" },
  { id: 8, name: "Silver Chain Necklace", image: chainSilver, price: 65, category: "necklaces" },
  { id: 9, name: "Rose Gold Necklace", image: chainRoseGold, price: 95, category: "necklaces" },
];

const rings = [
  { id: 10, name: "Gold Band Ring", image: chainGold, price: 75, category: "rings" },
  { id: 11, name: "Silver Ring", image: chainSilver, price: 55, category: "rings" },
  { id: 12, name: "Rose Gold Ring", image: chainRoseGold, price: 85, category: "rings" },
];

const ProductCard = ({ product }: { product: any }) => (
  <Card className="hover:shadow-lg transition-shadow">
    <CardHeader>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md"
      />
    </CardHeader>
    <CardContent className="space-y-4">
      <CardTitle className="text-sm text-foreground">{product.name}</CardTitle>
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-forest-green">
          ${product.price}
        </span>
        <Button variant="forest" size="sm">
          Add to Cart
        </Button>
      </div>
    </CardContent>
  </Card>
);

const Store = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Our <span className="text-forest-green">Jewelry Collection</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our complete collection of beautiful jewelry pieces. From delicate 
            bracelets to elegant necklaces, find the perfect piece for any occasion.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="all">All Jewelry</TabsTrigger>
            <TabsTrigger value="bracelets">Bracelets</TabsTrigger>
            <TabsTrigger value="charms">Charms</TabsTrigger>
            <TabsTrigger value="necklaces">Necklaces</TabsTrigger>
            <TabsTrigger value="rings">Rings</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Bracelets</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {bracelets.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Charms</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {charms.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Necklaces</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {necklaces.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Rings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {rings.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="bracelets">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {bracelets.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="charms">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {charms.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="necklaces">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {necklaces.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="rings">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {rings.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12 space-y-4">
          <h3 className="text-xl font-semibold text-foreground">
            Want a Permanent Bracelet?
          </h3>
          <p className="text-muted-foreground">
            Create a custom permanent bracelet that's welded on and never comes off.
          </p>
          <Button variant="jewelry" size="lg">
            Design Custom Permanent Bracelet
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Store;