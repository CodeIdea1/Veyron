'use client';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../styles/hero.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const sectionRef = useRef(null);
  const bgRef = useRef(null);

  const handleOpen = () => {
    setShouldRender(true);
    setTimeout(() => setIsVideoOpen(true), 10);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShouldRender(false);
      setIsVideoOpen(false);
      setIsClosing(false);
    }, 600);
  };

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
    <>
      <div className={styles.heroWrapper}>
        <section ref={sectionRef} className={styles.heroSection}>
          <img ref={bgRef} src="/vecteezy_ai-generated-an-image-of-a-red-sports-car-on-a-scenic_36796298.jpeg" alt="" className={styles.heroBackground} />
          <div className={styles.overlay}></div>
          <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Embrace the future of energy with our smart EV charging expertise.
          </h1>
          <button className={styles.heroButton}>
            <span className={`${styles.buttonBg} ${styles.buttonBgLeft}`}></span>
            <span className={`${styles.buttonBg} ${styles.buttonBgRight}`}></span>
            <span className={styles.buttonText}>Learn more</span>
            <span className={`${styles.arrowContainer} ${styles.arrowLeft}`}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className={`${styles.arrowContainer} ${styles.arrowRight}`}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </button>
        </div>

        <div className={styles.videoThumbnail} onClick={handleOpen}>
          <div className={styles.playIcon}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      </section>
      </div>

      {shouldRender && (
        <div className={`${styles.videoPopup} ${isVideoOpen && !isClosing ? styles.fadeIn : ''} ${isClosing ? styles.fadeOut : ''}`} onClick={handleClose}>
          <div className={`${styles.videoContainer} ${isVideoOpen && !isClosing ? styles.slideUp : ''} ${isClosing ? styles.slideDown : ''}`} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={handleClose}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <video controls autoPlay className={styles.videoPlayer}>
              <source src="/video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </>
  );
}
