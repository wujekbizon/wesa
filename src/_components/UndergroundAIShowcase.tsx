import UAIDualSolutions from "./UAIDualSolutions";
import UAIFeaturesCTA from "./UAIFeaturesCTA";
import UAIMobileReveal from "./UAIMobileReveal";
import UAIHeroAssembly from "./UAIHeroAssembly";

export default function UndergroundAIShowcase() {
    return (
      <section 
        id="ai" 
        data-nav-section
        className="relative overflow-hidden"
      >
        <UAIHeroAssembly />
        <UAIMobileReveal />
        <UAIDualSolutions />
        <UAIFeaturesCTA />
      </section>
    );
  }