'use client'

import SoftwareArchitectureHero from './SoftwareArchitectureHero';
import SoftwareArchitectureChallenge from './SoftwareArchitectureChallenge';
import SoftwareArchitectureMethodology from './SoftwareArchitectureMetodology';
import SoftwareArchitectureSolutionAndTech from './SoftwareArchitectureSolutionsAndTech';
import SoftwareArchitectureStudy from './SoftwareArchitectureStudy';
import SoftwareArchitectureProcessAndCTA from './SoftwareArchitectureProcessAndCTA';

export default function SoftwareArchitectureSection() {

    return (
        <section data-nav-section id="software-architecture">
            <SoftwareArchitectureHero />
            <SoftwareArchitectureChallenge />
            <SoftwareArchitectureMethodology />
            <SoftwareArchitectureStudy />
            <SoftwareArchitectureSolutionAndTech />
            <SoftwareArchitectureProcessAndCTA />
        </section>
    );
}