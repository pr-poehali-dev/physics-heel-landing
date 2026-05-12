import { Nav, HeroSection, TheorySection } from "@/components/HeroTheory";
import {
  CalculatorSection,
  HeelGuideSection,
  AnalysisSection,
  Footer,
} from "@/components/CalculatorGuideAnalysis";

export default function Index() {
  return (
    <div className="min-h-screen font-body" style={{ background: "#0f0f0f", color: "#f0f0f0" }}>
      <Nav />
      <HeroSection />
      <TheorySection />
      <CalculatorSection />
      <HeelGuideSection />
      <AnalysisSection />
      <Footer />
    </div>
  );
}
