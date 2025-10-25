import Hero from "./Hero";
import Architecture from "./Architecture";
import CaseStudy from "./CaseStudy";
import CoreSolutions from "./CoreSolutions";
import WhyChooseUs from "./WhyChooseUs";
import EncryptedTestimonials from "./EncryptedTestimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <CoreSolutions/>
      <Architecture />
      <CaseStudy />
      <WhyChooseUs />
      <EncryptedTestimonials/>
    </main>
  );
}
