import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ProductModes from "@/components/ProductModes";
import CompetitiveAdvantage from "@/components/CompetitiveAdvantage";
import BetaKit from "@/components/BetaKit";
import FAQ from "@/components/FAQ";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ProductModes />
      <CompetitiveAdvantage />
      <BetaKit />
      <FAQ />
      <ClosingCTA />
      <Footer />
    </div>
  );
};

export default Index;
