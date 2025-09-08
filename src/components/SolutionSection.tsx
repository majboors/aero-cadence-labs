import { CheckCircle, Shield, Zap, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import productImage from "@/assets/vr-kit-product.jpg";

const SolutionSection = () => {
  const features = [
    {
      icon: Shield,
      text: "Realistic flight dynamics (JSBSim, validated within 5–10% accuracy)",
    },
    {
      icon: Zap,
      text: "FlyAuqab goggles + joystick (Beta Kit)",
    },
    {
      icon: CheckCircle,
      text: "Supports both dogfight training & civil IFR/navigation training",
    },
    {
      icon: DollarSign,
      text: "Dual-use platform for military and civil aviation",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <CheckCircle className="h-4 w-4" />
              <span className="font-medium">Revolutionary Solution</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              FlyAuqab Beta
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A portable, sub-$2,000 AR/VR flight training system designed for both 
              fighter and civil aviation training. Revolutionary technology that makes 
              professional pilot training accessible worldwide.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-foreground">{feature.text}</p>
                  </div>
                );
              })}
            </div>

            <Button variant="hero-outline" size="lg" className="group">
              Learn More About Our Solution
              <CheckCircle className="h-5 w-5 ml-2 group-hover:scale-110 transition-transform" />
            </Button>
          </div>

          {/* Product Image */}
          <div className="relative">
            <div className="bg-card border border-border p-8 rounded-3xl">
              <img
                src={productImage}
                alt="FlyAuqab Beta Kit"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-primary text-white px-4 py-2 rounded-full font-bold">
              Under $2,000
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary text-white px-4 py-2 rounded-full font-bold">
              Portable
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;