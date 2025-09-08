import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Shield, Plane } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://www.loftdynamics.com/wp-content/uploads/2025/03/loft-dynamics-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-3 bg-card/80 backdrop-blur-sm border border-border rounded-full px-6 py-3 mb-8">
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-foreground font-semibold tracking-wide">
              World's First Qualified VR FSTD
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 leading-tight tracking-tight">
            <span className="block">FlyAuqab Beta:</span>
            <span className="block bg-gradient-blue bg-clip-text text-transparent">
              Dual-Use AR/VR
            </span>
            <span className="block">Pilot Training</span>
            <span className="block text-4xl md:text-5xl lg:text-6xl text-primary font-extrabold">
              Under $2,000
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-4xl mx-auto leading-relaxed font-medium">
            From fighter jets to airliners — one universal platform.{" "}
            <span className="text-foreground font-bold">Affordable. Scalable. Future-ready.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-10">
            <Button variant="hero" size="xl" className="group animate-glow">
              <Play className="h-6 w-6 mr-3 group-hover:scale-110 transition-transform" />
              Request a Demo
            </Button>
            <Button variant="outline" size="xl" className="group">
              Partner with FlyAuqab
              <ArrowRight className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Tagline */}
          <div className="inline-flex items-center space-x-3 text-primary text-lg font-bold tracking-wide">
            <Plane className="h-6 w-6" />
            <span>Train Smarter. Fly Further.</span>
          </div>
        </div>

        {/* Floating Icons */}
        <div className="absolute top-1/4 left-10 animate-float hidden lg:block">
          <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-4 border border-border">
            <Shield className="h-10 w-10 text-primary" />
          </div>
        </div>
        <div className="absolute top-1/3 right-10 animate-float hidden lg:block" style={{ animationDelay: "2s" }}>
          <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-4 border border-border">
            <Plane className="h-10 w-10 text-primary" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-primary/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;