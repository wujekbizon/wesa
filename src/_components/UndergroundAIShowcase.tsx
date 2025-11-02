import UAIDualSolutions from "./UAIDualSolutions";
import UAIHeroAssembly from "./UAIHeroAssembly";
import UAIMobileReveal from "./UAIMobileReveal";
import UAIFeaturesCTA from "./UAIFeaturesCTA";

export default function UndergroundAIShowcase() {
    return (
      <section 
        id="underground-ai" 
        data-nav-section
        className="relative"
      >
        <UAIHeroAssembly />
        <UAIMobileReveal />
        {/* <UAIDualSolutions /> */}
        <UAIFeaturesCTA />
      </section>
    );
  }