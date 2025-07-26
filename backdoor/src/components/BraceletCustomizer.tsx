import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import BraceletPreview from "@/components/BraceletPreview";

// Import images
import chainGold from "@/assets/chain-gold.jpg";
import chainSilver from "@/assets/chain-silver.jpg";
import chainRoseGold from "@/assets/chain-rose-gold.jpg";
import charmHeart from "@/assets/charm-heart.jpg";
import charmStar from "@/assets/charm-star.jpg";
import charmInfinity from "@/assets/charm-infinity.jpg";

interface Chain {
  id: string;
  name: string;
  image: string;
  price: number;
}

interface Charm {
  id: string;
  name: string;
  image: string;
  price: number;
}

const chains: Chain[] = [
  { id: "gold", name: "Gold Chain", image: chainGold, price: 45 },
  { id: "silver", name: "Silver Chain", image: chainSilver, price: 35 },
  { id: "rose-gold", name: "Rose Gold Chain", image: chainRoseGold, price: 50 },
];

const charms: Charm[] = [
  { id: "heart", name: "Heart Charm", image: charmHeart, price: 15 },
  { id: "star", name: "Star Charm", image: charmStar, price: 12 },
  { id: "infinity", name: "Infinity Charm", image: charmInfinity, price: 18 },
];

const BraceletCustomizer = () => {
  const [selectedChain, setSelectedChain] = useState<string>("");
  const [selectedCharms, setSelectedCharms] = useState<string[]>([]);
  const [engravingEnabled, setEngravingEnabled] = useState(false);
  const [engravingText, setEngravingText] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleCharmToggle = (charmId: string) => {
    if (selectedCharms.includes(charmId)) {
      setSelectedCharms(selectedCharms.filter(id => id !== charmId));
    } else if (selectedCharms.length < 3) {
      setSelectedCharms([...selectedCharms, charmId]);
    } else {
      toast({
        title: "Maximum charms reached",
        description: "You can select up to 3 charms for your bracelet.",
        variant: "destructive",
      });
    }
  };

  const calculateTotal = () => {
    const chainPrice = chains.find(c => c.id === selectedChain)?.price || 0;
    const charmsPrice = selectedCharms.reduce((total, charmId) => {
      const charm = charms.find(c => c.id === charmId);
      return total + (charm?.price || 0);
    }, 0);
    const engravingPrice = engravingEnabled ? 10 : 0;
    return chainPrice + charmsPrice + engravingPrice;
  };

  const handleComplete = () => {
    if (!selectedChain) {
      toast({
        title: "Please select a chain",
        description: "You need to choose a chain for your bracelet.",
        variant: "destructive",
      });
      return;
    }

    const selectedChainData = chains.find(c => c.id === selectedChain);
    const selectedCharmsData = selectedCharms.map(charmId => 
      charms.find(c => c.id === charmId)
    ).filter(Boolean);

    const braceletDetails = {
      chainName: selectedChainData?.name,
      charms: selectedCharmsData,
      engraving: engravingEnabled ? engravingText : null,
      total: calculateTotal(),
    };

    navigate("/book-appointment", { state: { braceletDetails } });
  };

  const selectedChainData = chains.find(c => c.id === selectedChain);
  const selectedCharmsData = selectedCharms.map(charmId => 
    charms.find(c => c.id === charmId)
  ).filter(Boolean);

  return (
    <div className="space-y-8">
      {/* Preview Section */}
      <BraceletPreview 
        chainImage={selectedChainData?.image}
        chainName={selectedChainData?.name}
        selectedCharms={selectedCharmsData}
        engravingText={engravingEnabled ? engravingText : undefined}
      />
      {/* Step 1: Choose Chain */}
      <Card>
        <CardHeader>
          <CardTitle className="text-forest-green">Step 1: Pick Your Bracelet Chain</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {chains.map((chain) => (
              <div
                key={chain.id}
                className={`relative cursor-pointer rounded-lg border-2 p-4 transition-all hover:shadow-lg ${
                  selectedChain === chain.id
                    ? "border-forest-green bg-light-green/20"
                    : "border-gray-200 hover:border-forest-green/50"
                }`}
                onClick={() => setSelectedChain(chain.id)}
              >
                <img
                  src={chain.image}
                  alt={chain.name}
                  className="w-full h-32 object-cover rounded-md mb-3"
                />
                <h3 className="font-semibold text-foreground">{chain.name}</h3>
                <p className="text-forest-green font-bold">${chain.price}</p>
                {selectedChain === chain.id && (
                  <div className="absolute top-2 right-2 w-6 h-6 bg-forest-green rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Step 2: Choose Charms */}
      <Card>
        <CardHeader>
          <CardTitle className="text-forest-green">
            Step 2: Select Your Charms (1 to 3)
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Selected: {selectedCharms.length}/3 charms
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {charms.map((charm) => (
              <div
                key={charm.id}
                className={`relative cursor-pointer rounded-lg border-2 p-4 transition-all hover:shadow-lg ${
                  selectedCharms.includes(charm.id)
                    ? "border-forest-green bg-light-green/20"
                    : "border-gray-200 hover:border-forest-green/50"
                }`}
                onClick={() => handleCharmToggle(charm.id)}
              >
                <img
                  src={charm.image}
                  alt={charm.name}
                  className="w-full h-32 object-cover rounded-md mb-3"
                />
                <h3 className="font-semibold text-foreground">{charm.name}</h3>
                <p className="text-forest-green font-bold">${charm.price}</p>
                {selectedCharms.includes(charm.id) && (
                  <div className="absolute top-2 right-2 w-6 h-6 bg-forest-green rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Step 3: Custom Engraving */}
      <Card>
        <CardHeader>
          <CardTitle className="text-forest-green">Step 3: Custom Engraving (Optional)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Switch
              id="engraving"
              checked={engravingEnabled}
              onCheckedChange={setEngravingEnabled}
            />
            <Label htmlFor="engraving">Add custom engraving (+$10)</Label>
          </div>
          
          {engravingEnabled && (
            <div className="space-y-2">
              <Label htmlFor="engraving-text">Engraving Text</Label>
              <Textarea
                id="engraving-text"
                placeholder="Enter your custom text (max 20 characters)"
                value={engravingText}
                onChange={(e) => setEngravingText(e.target.value.slice(0, 20))}
                maxLength={20}
              />
              <p className="text-sm text-muted-foreground">
                {engravingText.length}/20 characters
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Summary and Complete */}
      <Card>
        <CardHeader>
          <CardTitle className="text-forest-green">Order Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {selectedChain && (
            <div className="flex justify-between">
              <span>{chains.find(c => c.id === selectedChain)?.name}</span>
              <span>${chains.find(c => c.id === selectedChain)?.price}</span>
            </div>
          )}
          
          {selectedCharms.map(charmId => {
            const charm = charms.find(c => c.id === charmId);
            return charm ? (
              <div key={charmId} className="flex justify-between">
                <span>{charm.name}</span>
                <span>${charm.price}</span>
              </div>
            ) : null;
          })}
          
          {engravingEnabled && (
            <div className="flex justify-between">
              <span>Custom Engraving</span>
              <span>$10</span>
            </div>
          )}
          
          <div className="border-t pt-2">
            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span className="text-forest-green">${calculateTotal()}</span>
            </div>
          </div>
          
          <Button 
            variant="jewelry" 
            size="lg" 
            className="w-full"
            onClick={handleComplete}
          >
            Book Appointment to Create Bracelet
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default BraceletCustomizer;