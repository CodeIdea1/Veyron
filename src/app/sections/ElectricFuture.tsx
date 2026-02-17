'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../styles/electric.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function ElectricFuture() {
  const sectionRef = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const img3Ref = useRef(null);
  const desc1Ref = useRef(null);
  const desc2Ref = useRef(null);
  const desc3Ref = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    gsap.to(img1Ref.current, {
      xPercent: 25,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });

    gsap.to(img2Ref.current, {
      xPercent: 25,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });

    gsap.to(img3Ref.current, {
      xPercent: 25,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });

    if (isMobile) {
      [desc1Ref, desc2Ref, desc3Ref].forEach((ref) => {
        gsap.fromTo(ref.current,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <h2 className={styles.title}>
        <span className={styles.light}>Ready for the electric revolution?</span>{' '}
        <span className={styles.dark}>Trust the experts in intelligent EV charging solutions.</span>
      </h2>
      
      <div className={styles.imageGrid}>
        <div className={styles.imageBox}>
          <img ref={img1Ref} src="/car1.webp" alt="EV Charging" />
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Smart Charging</h3>
            <p ref={desc1Ref} className={styles.cardDescription}>Advanced technology for fast and safe charging of your electric vehicle</p>
          </div>
        </div>
        <div className={styles.imageBox}>
          <img ref={img2Ref} src="/car2.webp" alt="EV Charging" />
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>High Efficiency</h3>
            <p ref={desc2Ref} className={styles.cardDescription}>Energy-saving charging system with exceptional performance</p>
          </div>
        </div>
        <div className={styles.imageBox}>
          <img ref={img3Ref} src="/car3.webp" alt="EV Charging" />
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Sustainable Future</h3>
            <p ref={desc3Ref} className={styles.cardDescription}>Eco-friendly solutions for the next generation of vehicles</p>
          </div>
        </div>
      </div>
    </section>
  );
}
