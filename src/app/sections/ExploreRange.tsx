'use client';
import styles from '../styles/explore.module.css';

const products = [
  {
    image: '/Performance2.avif',
    price: 'Starting from $37,720.00',
    name: 'EcoCharge Solo',
    description: 'Compact design, optimized for limited spaces.',
    features: ['1 Station', '3.5 kW', 'Residential use'],
  },
  {
    image: '/Performance3.avif',
    price: 'Starting from $45,500.00',
    name: 'PowerBoost Duo',
    description: 'Dual charging capability for versatile use.',
    features: ['2 Stations', '7 kW', 'Commercial use'],
  },
  {
    image: '/Performance4.avif',
    price: 'Starting from $62,300.00',
    name: 'MaxCharge Trio',
    description: 'Triple charging solution for high-demand locations.',
    features: ['3 Stations', '11 kW', 'Fleet use'],
  },
];

export default function ExploreRange() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Discover our range of multi-functional chargers.</h2>
      
      <div className={styles.grid}>
        {products.map((product, index) => (
          <div key={index} className={`${styles.box} ${index === 0 ? styles.tall : ''}`}>
            <div className={styles.imageWrapper}>
              <img src={product.image} alt={product.name} className={styles.image} />
              <button className={styles.button}>
                <span>get a quote</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            
            <div className={styles.content}>
              <p className={styles.price}>{product.price}</p>
              <h3 className={styles.name}>{product.name}</h3>
              <p className={styles.description}>{product.description}</p>
              
              <div className={styles.features}>
                {product.features.map((feature, i) => (
                  <div key={i} className={styles.feature}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      {i === 0 && (
                        <>
                          <rect x="3" y="8" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M7 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="12" cy="14" r="2" stroke="currentColor" strokeWidth="2"/>
                        </>
                      )}
                      {i === 1 && <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" stroke="currentColor" strokeWidth="2"/>}
                      {i === 2 && (
                        <>
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </>
                      )}
                    </svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
