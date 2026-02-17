'use client';
import { useState, useEffect } from 'react';
import styles from '../styles/navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('section') as HTMLElement | null;
      const performanceTrigger = document.querySelector('.performance-trigger') as HTMLElement | null;
      const exploreTrigger = document.querySelector('.explore-trigger') as HTMLElement | null;
      
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        setScrolled(window.scrollY >= heroHeight);
      }

      if (performanceTrigger && exploreTrigger) {
        const perfTop = performanceTrigger.offsetTop;
        const exploreTop = exploreTrigger.offsetTop;
        const scrollPos = window.scrollY;
        
        setDarkTheme(scrollPos >= perfTop && scrollPos < exploreTop);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <div className={`${styles.logo} ${scrolled ? styles.logoFixed : ''} ${darkTheme ? styles.logoDark : ''} ${mobileMenuOpen ? styles.logoShifted : ''}`}>
          <img src="/logoo.svg" alt="Logo" />
        </div>

        {!scrolled && (
          <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#performance">Performance</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#charging">Charging</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        )}

        {!scrolled && (
          <button 
            className={`${styles.menuToggle} ${menuOpen ? styles.open : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        )}

        {scrolled && (
          <div className={`${styles.compactNav} ${mobileMenuOpen ? styles.compactNavExpanded : ''}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <button className={styles.menuIcon}>
              <span></span>
              <span></span>
              <span></span>
            </button>
            <button className={styles.quoteBtn}>Get a Quote</button>
            <ul className={styles.expandedLinks}>
              <li><a href="#home" onClick={(e) => { e.stopPropagation(); setMobileMenuOpen(false); }}>Home</a></li>
              <li><a href="#performance" onClick={(e) => { e.stopPropagation(); setMobileMenuOpen(false); }}>Performance</a></li>
              <li><a href="#products" onClick={(e) => { e.stopPropagation(); setMobileMenuOpen(false); }}>Products</a></li>
              <li><a href="#charging" onClick={(e) => { e.stopPropagation(); setMobileMenuOpen(false); }}>Charging</a></li>
              <li><a href="#testimonials" onClick={(e) => { e.stopPropagation(); setMobileMenuOpen(false); }}>Testimonials</a></li>
              <li><a href="#faq" onClick={(e) => { e.stopPropagation(); setMobileMenuOpen(false); }}>FAQ</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
