import { Shield, Plane, Target, Navigation, Users, Radar } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductModes = () => {
  const modes = [
    {
      id: "military",
      title: "Military Mode",
      color: "bg-destructive",
      icon: Shield,
      features: [
        {
          icon: Target,
          title: "Dogfight Simulation",
          description: "Advanced air-to-air combat training with realistic physics"
        },
        {
          icon: Users,
          title: "Squadron Multiplayer",
          description: "Team-based training exercises and coordinated missions"
        },
        {
          icon: Radar,
          title: "AR Tactical Overlays",
          description: "Real-time radar, missile lock, and HUD information"
        },
        {
          icon: Shield,
          title: "Risk-Free Training",
          description: "Master tactical missions without real-world dangers"
        }
      ]
    },
    {
      id: "civil",
      title: "Civil Aviation Mode",
      color: "bg-secondary",
      icon: Plane,
      features: [
        {
          icon: Navigation,
          title: "IFR Procedures",
          description: "Instrument flight rules and navigation training"
        },
        {
          icon: Plane,
          title: "Autopilot Systems",
          description: "Advanced aircraft systems and automation training"
        },
        {
          icon: Target,
          title: "Emergency Scenarios",
          description: "Critical situation handling and emergency procedures"
        },
        {
          icon: Users,
          title: "AI Instructor",
          description: "Intelligent guidance system for cadets and trainees"
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Dual-Purpose Training Modes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            One platform, two specialized training environments. Switch seamlessly between 
            military combat scenarios and civil aviation procedures.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {modes.map((mode) => {
            const ModeIcon = mode.icon;
            return (
              <div
                key={mode.id}
                className="bg-card rounded-3xl overflow-hidden border border-border hover:shadow-aviation transition-all duration-300 group"
              >
                {/* Header */}
                <div className={`${mode.color} p-8 text-white relative overflow-hidden`}>
                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-white/20 p-3 rounded-xl">
                        <ModeIcon className="h-8 w-8" />
                      </div>
                      <h3 className="text-2xl font-bold">{mode.title}</h3>
                    </div>
                    <p className="text-white/90 text-lg">
                      {mode.id === "military" 
                        ? "Advanced tactical training for defense professionals"
                        : "Comprehensive civil aviation training modules"
                      }
                    </p>
                  </div>
                  
                  {/* Background pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <ModeIcon className="w-full h-full" />
                  </div>
                </div>

                {/* Features */}
                <div className="p-8">
                  <div className="space-y-6">
                    {mode.features.map((feature, index) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="bg-muted p-2 rounded-lg flex-shrink-0">
                            <FeatureIcon className="h-5 w-5 text-foreground" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-1">
                              {feature.title}
                            </h4>
                            <p className="text-muted-foreground text-sm">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-8">
                    <Button 
                      variant={mode.id === "military" ? "accent" : "hero"} 
                      className="w-full group-hover:scale-105 transition-transform"
                    >
                      Explore {mode.title}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductModes;