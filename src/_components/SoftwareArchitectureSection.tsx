'use client'

import SoftwareArchitectureHero from './SoftwareArchitectureHero';
import SoftwareArchitectureChallenge from './SoftwareArchitectureChallenge';
import SoftwareArchitectureMethodology from './SoftwareArchitectureMetodology';
import SoftwareArchitectureSolutionAndTech from './SoftwareArchitectureSolutionsAndTech';
import SoftwareArchitectureStudy from './SoftwareArchitectureStudy';
import SoftwareArchitectureProcessAndCTA from './SoftwareArchitectureProcessAndCTA';

export default function SoftwareArchitectureSection() {

    return (
        <section id="software-architecture" className="relative bg-black text-white">
            <SoftwareArchitectureHero />
            <SoftwareArchitectureChallenge />
            <SoftwareArchitectureMethodology />
            <SoftwareArchitectureStudy />
            <SoftwareArchitectureSolutionAndTech />
            <SoftwareArchitectureProcessAndCTA />
        </section>
    );
}