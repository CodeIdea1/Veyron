'use client';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../styles/power.module.css';

gsap.registerPlugin(ScrollTrigger);

const content = [
  {
    title: 'Fast Charging',
    description: 'The safest battery on the market, with the capacity to power all of the appliances and stay off-grid for up to 7 days.',
  },
  {
    title: 'Versatility',
    description: 'Supports single, double, or trio charging stations, making it the perfect choice for homeowners, workplace installations, or fleet operators who need multiple charging points.',
    buttons: ['EcoCharge Solo', 'PowerBoost Duo'],
  },
  {
    title: 'Durable and Weatherproof',
    description: 'Built to withstand the elements, this charger is fully weatherproof, ensuring long-term durability and performance, no matter the conditions.',
  },
  {
    title: 'Smart Connectivity',
    description: 'Seamlessly integrate the with our mobile app for real-time monitoring, remote access, and automatic updates, allowing you to stay in control of your charging stations from anywhere.',
  },
  {
    title: 'Eco-Friendly and Energy Efficient',
    description: 'Designed with sustainability in mind, our chargers maximize energy efficiency, helping you reduce your carbon footprint while saving on electricity costs.',
  },
  {
    title: 'Sleek, Modern Design',
    description: 'The sleek and modern design of the EV Chargers blends seamlessly into any environment, adding both functionality and aesthetic value to your charging space.',
    colors: ['/Performance-gray.png', '/Performance2.avif', '/Performance-blue.png'],
  },
];

export default function PowerYouCanTrust() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState('/Performance2.avif');
  const [isChanging, setIsChanging] = useState(false);
  const [imageChanging, setImageChanging] = useState(false);
  const sectionRef = useRef(null);
  const prevIndexRef = useRef(0);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const sections = content.length;
    const isMobile = window.innerWidth <= 968;
    
    if (!isMobile) {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: `+=${sections * 100}%`,
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const newIndex = Math.min(Math.floor(self.progress * sections), sections - 1);
          if (newIndex !== prevIndexRef.current) {
            setIsChanging(true);
            setTimeout(() => {
              setCurrentIndex(newIndex);
              prevIndexRef.current = newIndex;
              setIsChanging(false);
            }, 300);
          }
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.contentBox}>
          <div className={`${styles.contentWrapper} ${isChanging ? styles.changing : ''}`}>
            <img src="/power.svg" alt="" className={styles.decorTop} />
            
            <div className={styles.iconWapper}>
              <div className={styles.icon}>
                <svg width="45" height="45" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
            </div>
        
            <h2 className={styles.title}>{content[currentIndex].title}</h2>
            <p className={styles.description}>{content[currentIndex].description}</p>
            
            {content[currentIndex].buttons && (
              <div className={styles.buttons}>
                <button onClick={() => setCurrentImage('/Performance2.avif')} className={styles.button}>
                  {content[currentIndex].buttons[0]}
                </button>
                <button onClick={() => setCurrentImage('/Performance3.avif')} className={styles.button}>
                  {content[currentIndex].buttons[1]}
                </button>
              </div>
            )}
            
            {content[currentIndex].colors && (
              <div className={styles.colors}>
                {content[currentIndex].colors.map((color, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      if (currentImage !== color) {
                        setImageChanging(true);
                        setTimeout(() => {
                          setCurrentImage(color);
                          setTimeout(() => setImageChanging(false), 50);
                        }, 300);
                      }
                    }}
                    className={`${styles.colorDot} ${currentImage === color ? styles.active : ''}`}
                    style={{ background: i === 0 ? 'white' : i === 1 ? '#f97316' : i === 2 ? '#3af5ffff' : '#f97316' }}
                  />
                ))}
              </div>
            )}
            
            <img src="/power.svg" alt="" className={styles.decorBottom} />
          </div>
        </div>
        
        <div className={styles.imageBox}>
          <img 
            ref={imageRef}
            src={currentImage} 
            alt="EV Charger" 
            className={imageChanging ? styles.imageChanging : ''}
          />
        </div>
      </div>
    </section>
  );
}
