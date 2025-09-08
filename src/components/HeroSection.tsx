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
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <Shield className="h-4 w-4 text-white" />
            <span className="text-white text-sm font-medium">
              World's First Qualified VR FSTD
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block">FlyAuqab Beta:</span>
            <span className="block bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
              Dual-Use AR/VR
            </span>
            <span className="block">Pilot Training</span>
            <span className="block text-3xl md:text-4xl lg:text-5xl text-blue-200">
              Under $2,000
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            From fighter jets to airliners — one universal platform.{" "}
            <span className="text-white font-semibold">Affordable. Scalable. Future-ready.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
            <Button variant="hero" size="xl" className="group">
              <Play className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
              Request a Demo
            </Button>
            <Button variant="hero-outline" size="xl" className="group">
              Partner with FlyAuqab
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Tagline */}
          <div className="inline-flex items-center space-x-2 text-cyan-200 text-lg font-medium">
            <Plane className="h-5 w-5" />
            <span>Train Smarter. Fly Further.</span>
          </div>
        </div>

        {/* Floating Icons */}
        <div className="absolute top-1/4 left-10 animate-float">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
            <Shield className="h-8 w-8 text-blue-200" />
          </div>
        </div>
        <div className="absolute top-1/3 right-10 animate-float" style={{ animationDelay: "1s" }}>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
            <Plane className="h-8 w-8 text-cyan-200" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;