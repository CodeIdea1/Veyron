'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../styles/performance.module.css';

gsap.registerPlugin(ScrollTrigger);
 
export default function Performance() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        <span className={styles.light}>Our new +Performance is here.</span>{' '}
        <span className={styles.dark}>Designed for maximum efficiency, reliability, and user comfort. Perfect for both residential and commercial use.</span>
      </h2>
      
      <div className={styles.grid}>
        <div className={styles.imageBoxLarge}>
          <img src="/Performance1.webp" alt="Performance" />
        </div>
        
        <div className={styles.contentBox}>
          <img src="/Performance2.avif" alt="Performance" className={styles.image} />
          
          <div className={styles.content}>
            <p className={styles.price}>Starting from $37.720,-</p>
            <h3 className={styles.productName}>Doze+Performance</h3>
            <p className={styles.description}>Compact design, optimized for</p>
            
            <div className={styles.features}>
              <div className={styles.feature}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <path d="M20 7h-4V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 21v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>1 station</span>
              </div>
              <div className={styles.feature}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" stroke="#9ca3af" strokeWidth="2"/>
                </svg>
                <span>3.5 kW</span>
              </div>
              <div className={styles.feature}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 22V12h6v10" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Residential use</span>
              </div>
            </div>
            
            <button className={styles.button}>get a quote</button>
          </div>
        </div>
      </div>
    </section>
  );
}
