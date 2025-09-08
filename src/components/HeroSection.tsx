import { Button } from "@/components/ui/button";

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
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          {/* Main Headline - Clean and Simple */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-12 leading-tight tracking-tight">
            Revolutionizing pilot training with VR simulators
          </h1>

          {/* Single CTA Button - Outline Style */}
          <Button variant="outline" size="lg" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground">
            Book a demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;