import Navigation from "@/components/Navigation";
import BraceletCustomizer from "@/components/BraceletCustomizer";

const CustomBracelets = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Create Your Perfect <span className="text-forest-green">Permanent Bracelet</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Design a custom permanent bracelet that's uniquely yours. Choose your chain, 
            select your charms, and add personal engraving for a truly special piece.
          </p>
        </div>
        
        <BraceletCustomizer />
      </div>
    </div>
  );
};

export default CustomBracelets;