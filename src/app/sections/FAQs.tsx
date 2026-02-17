'use client';
import { useState } from 'react';
import styles from '../styles/faqs.module.css';

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long does it take to charge my EV with Doze?",
      answer: "Charging time depends on your vehicle's battery capacity and the charger model. Our fast chargers can fully charge most EVs in 4-8 hours."
    },
    {
      question: "Is Doze compatible with all electric vehicles?",
      answer: "Yes, Doze chargers are compatible with all major EV brands and models that use standard charging connectors."
    },
    {
      question: "Can I install a Doze charger myself?",
      answer: "We recommend professional installation by a certified electrician to ensure safety and optimal performance."
    },
    {
      question: "What warranty does Doze offer?",
      answer: "All Doze chargers come with a 3-year warranty covering manufacturing defects and technical issues."
    },
    {
      question: "Are Doze chargers weather-resistant?",
      answer: "Yes, our chargers are designed to withstand various weather conditions and are rated for outdoor use."
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <h2 className={styles.heading}>Frequently asked questions</h2>
        </div>
        
        <div className={styles.rightColumn}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className={styles.faqItem}>
                <button
                  className={styles.question}
                  onClick={() => setOpenIndex(index)}
                >
                  <span>{faq.question}</span>
                  <span className={styles.icon}>{isOpen ? '−' : '+'}</span>
                </button>
                <div className={`${styles.answer} ${isOpen ? styles.open : ''}`}>
                  <div>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
