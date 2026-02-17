'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../styles/fastcharging.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function FastCharging() {
  const sectionRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=300%',
        scrub: 1,
        pin: true,
      },
    });

    tl.to({}, { duration: 1 })
      .to(line1Ref.current, { y: -100, opacity: 0, duration: 1 })
      .to(line2Ref.current, { y: 0, opacity: 1, duration: 1 }, '<')
      .to(line2Ref.current, { y: -100, opacity: 0, duration: 1 }, '+=0.5')
      .to(line3Ref.current, { y: 0, opacity: 1, duration: 1 }, '<');
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Ideal solutions for anyone looking for
          <span className={styles.animatedWrapper}>
            <span ref={line1Ref} className={styles.animatedText}>
              fast charging speeds,
            </span>
            <span ref={line2Ref} className={styles.animatedText}>
              advanced features,
            </span>
            <span ref={line3Ref} className={styles.animatedText}>
              and hassle-free operation.
            </span>
          </span>
        </h2>
      </div>
    </section>
  );
}
