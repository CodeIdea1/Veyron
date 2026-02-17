'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../styles/doze.module.css';

gsap.registerPlugin(ScrollTrigger);

interface DozePlusLineupProps {
  label?: string;
  title?: string;
  buttonText?: string;
  largTitle?: boolean;
}

export default function DozePlusLineup({ 
  label = 'Doze+Performance EV Charger',
  title = 'No matter your needs, our range of EV chargers offers the perfect solution.',
  buttonText = 'Get a personalized quote',
  largTitle = false
}: DozePlusLineupProps) {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    gsap.to(bgRef.current, {
      yPercent: 25,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className={styles.wrapper}>
      <div ref={sectionRef} className={styles.section}>
        <div ref={bgRef} className={styles.background}></div>
        <div className={styles.content}>
          <p className={`${styles.label} ${largTitle ? styles.labelLarge : ''}`}>{label}</p>
          <h2 className={`${styles.title} ${largTitle ? styles.titleLarge : ''}`}>{title}</h2>
          <button className={styles.button}>{buttonText}</button>
        </div>
      </div>
    </section>
  );
}
