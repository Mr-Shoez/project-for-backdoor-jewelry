import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// =============================================================================
// CUSTOM PHOTO INTEGRATION GUIDE
// =============================================================================
// To add your own photos:
// 1. Place your images in the src/assets folder
// 2. Import them at the top of this file like this:
//    import myChainGold from "@/assets/my-chain-gold.jpg";
//    import myCharmHeart from "@/assets/my-charm-heart.jpg";
// 3. Update the chain/charm data in BraceletCustomizer.tsx with your imported images
// 4. For background images, add them below in the CUSTOM_BACKGROUNDS section
// =============================================================================

// ADD YOUR CUSTOM BACKGROUND IMAGES HERE
// Example: import customBg1 from "@/assets/my-background-1.jpg";
const CUSTOM_BACKGROUNDS = [
  // Add your background image imports here
  // Example: { id: 'bg1', image: customBg1, name: 'Elegant Background' },
];

interface BraceletPreviewProps {
  chainImage?: string;
  chainName?: string;
  selectedCharms: { id: string; name: string; image: string }[];
  engravingText?: string;
}

const BraceletPreview = ({ chainImage, chainName, selectedCharms, engravingText }: BraceletPreviewProps) => {
  if (!chainImage) {
    return (
      <Card className="h-64 flex items-center justify-center">
        <CardContent>
          <p className="text-muted-foreground text-center">
            Select a chain to see your bracelet preview
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-forest-green text-center">Your Bracelet Preview</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Enhanced Preview Container with optional background */}
        <div className="relative bg-gradient-to-br from-background to-muted/30 p-6 rounded-xl border-2 border-light-green/20">
          
          {/* CUSTOM BACKGROUND OPTION */}
          {/* To add a custom background image to the preview area, uncomment and customize below: */}
          {/* <div className="absolute inset-0 rounded-xl overflow-hidden opacity-10">
            <img src={YOUR_BACKGROUND_IMAGE} alt="Preview background" className="w-full h-full object-cover" />
          </div> */}
          
          <div className="relative z-10 space-y-4">
            {/* Chain Preview - REPLACE WITH YOUR CHAIN PHOTOS */}
            <div className="text-center">
              <div className="relative">
                <img
                  src={chainImage}
                  alt={chainName}
                  className="w-full h-40 object-cover rounded-lg mb-3 shadow-lg border border-light-green/30"
                />
                {/* Chain style overlay indicator */}
                <div className="absolute top-2 right-2 bg-forest-green text-white px-2 py-1 rounded-full text-xs font-medium">
                  Chain
                </div>
              </div>
              <p className="font-semibold text-lg text-forest-green">{chainName}</p>
            </div>
            
            {/* Charms Preview - REPLACE WITH YOUR CHARM PHOTOS */}
            {selectedCharms.length > 0 && (
              <div className="bg-white/60 p-4 rounded-lg border border-light-green/20">
                <h4 className="font-semibold mb-3 text-center text-forest-green">Selected Charms ({selectedCharms.length}/3)</h4>
                <div className="grid grid-cols-3 gap-3">
                  {selectedCharms.map((charm, index) => (
                    <div key={charm.id} className="text-center relative">
                      <div className="relative">
                        <img
                          src={charm.image}
                          alt={charm.name}
                          className="w-full h-24 object-cover rounded-lg shadow-md border border-light-green/20"
                        />
                        {/* Charm position indicator */}
                        <div className="absolute top-1 left-1 bg-light-green text-forest-green px-1.5 py-0.5 rounded-full text-xs font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 font-medium">{charm.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Engraving Preview with enhanced styling */}
            {engravingText && (
              <div className="bg-white/80 p-4 rounded-lg border border-light-green/30">
                <h4 className="font-semibold mb-3 text-center text-forest-green">Custom Engraving</h4>
                <div className="bg-gradient-to-r from-light-green/10 to-forest-green/10 p-4 rounded-lg border border-light-green/20">
                  <p className="font-script text-xl text-forest-green text-center italic">"{engravingText}"</p>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Enhanced disclaimer */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-4 py-2 rounded-full">
            <span className="w-1.5 h-1.5 bg-forest-green rounded-full"></span>
            This is a digital preview. Your bracelet will be perfectly fitted and welded in-store.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BraceletPreview;