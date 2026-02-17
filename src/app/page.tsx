'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import ElectricFuture from "./sections/ElectricFuture";
import HeroSection from "./sections/HeroSection";
import Performance from "./sections/Performance";
import PowerYouCanTrust from './sections/PowerYouCanTrust';
import DozePlusLineup from './sections/DozePlusLineup';
import ExploreRange from './sections/ExploreRange';
import DrivenByFuture from './sections/DrivenByFuture';
import FastCharging from './sections/FastCharging';
import ChooseConfidence from './sections/ChooseConfidence';
import Testimonials from './sections/Testimonials';
import FAQs from './sections/FAQs';
import Footer from './sections/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const pageRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    ScrollTrigger.create({
      trigger: '.performance-trigger',
      start: 'top center',
      end: '.explore-trigger top center',
      onEnter: () => gsap.to(pageRef.current, { backgroundColor: '#0a0a0a', duration: 0.6, ease: 'power2.inOut' }),
      onLeaveBack: () => gsap.to(pageRef.current, { backgroundColor: '#ffffff', duration: 0.6, ease: 'power2.inOut' }),
    });

    ScrollTrigger.create({
      trigger: '.explore-trigger',
      start: 'top center',
      onEnter: () => gsap.to(pageRef.current, { backgroundColor: '#ffffff', duration: 0.6, ease: 'power2.inOut' }),
      onLeaveBack: () => gsap.to(pageRef.current, { backgroundColor: '#0a0a0a', duration: 0.6, ease: 'power2.inOut' }),
    });
  }, []);

  return (
    <div ref={pageRef} style={{ minHeight: '100vh', margin: 0, padding: 0 }}>
      <HeroSection />
      <ElectricFuture />
      <div className="performance-trigger">
        <Performance/>
      </div>

      <PowerYouCanTrust/>
      <DozePlusLineup />
      <div className="explore-trigger">
        <ExploreRange />
      </div>
      <DrivenByFuture />
      <FastCharging />
      <ChooseConfidence />
      <Testimonials />
      <FAQs />
      <DozePlusLineup 
        label="Doze+Performance EV Charger"
        title="Join the ride."
        buttonText="Explore products"
        largTitle={true}
      />
      <Footer />

    </div>


  );
}
