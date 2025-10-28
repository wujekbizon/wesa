'use client'

import { useRef, useMemo } from 'react'
import Image from 'next/image'
import globe from "@/src/images/fullGlobe.png"
import { clients, hq } from '../data/clients'
import { usePositionCalculator } from '../hooks/usePositionCalculator'
import { useStarField } from '../hooks/useStarField'
import { useSatelliteOrbit } from '../hooks/useSatelliteOrbit'
import { useDimensions } from '../hooks/useDimensions'
import { WhyChooseUsSectionHeader } from './headers/WhyChooseUsSectionHeader'
import { StarField } from './Starfield'
import { Satellite } from './Satelite'
import { ClientConnections } from './ClientConnections'
import { SatelliteConnection } from './SatelliteConnection'
import { ClientMarkers } from './ClientMarkers'
import { HQMarker } from './HQMarker'
import { GRADIENT_STYLES } from '../constants/gradients'

const BackgroundGradients = () => (
  <div className="absolute inset-0 pointer-events-none z-1">
    <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full" style={GRADIENT_STYLES.purple} />
    <div className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 rounded-full" style={GRADIENT_STYLES.blue} />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 rounded-full" style={GRADIENT_STYLES.pink} />
  </div>
)

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const dimensions = useDimensions(containerRef as React.RefObject<HTMLDivElement>)
  const { satelliteX, satelliteY } = useSatelliteOrbit(dimensions)
  const stars = useStarField()
  const getPosition = usePositionCalculator(dimensions)

  const hqPos = useMemo(() => getPosition(hq.x, hq.y), [getPosition])

  return (
    <section
      id='why-choose-us'
      data-nav-section
      ref={sectionRef}
      className="h-screen relative flex flex-col items-center justify-center py-20 overflow-hidden bg-black text-white px-4"
    >
      <StarField stars={stars} />
      <BackgroundGradients />
      <WhyChooseUsSectionHeader />
      <div
        ref={containerRef}
        className="relative w-full max-w-[90vw] sm:max-w-[600px] md:max-w-[900px] aspect-[4/3.5] md:aspect-[4/3.5] z-10"
      >
        <div className="absolute inset-0 flex items-center justify-center z-3">
          <div className="w-[89%] sm:w-[85%] h-full sm:h-[96%] bg-black/70 rounded-full border border-violet-500/10" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-5">
          <div className="w-[80%] h-[80%] rounded-full" style={GRADIENT_STYLES.green} />
        </div>
        <Image
          src={globe}
          alt="Global Network"
          fill
          className="object-contain relative z-10"
        />
        <SatelliteConnection satelliteX={satelliteX} satelliteY={satelliteY} hqPos={hqPos} />
        <Satellite satelliteX={satelliteX} satelliteY={satelliteY} />
        <HQMarker hq={hq} hqPos={hqPos} dimensions={dimensions} />
        <ClientConnections clients={clients} hqPos={hqPos} getPosition={getPosition} dimensions={dimensions} />
        <ClientMarkers clients={clients} getPosition={getPosition} />
      </div>
    </section>
  )
}