'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';
import styles from '../styles/confidence.module.css';

export default function ChooseConfidence() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const slides = [
    { img: '/SafetyForpeaceofmind.webp', title: 'Safety – For peace of mind', desc: 'Advanced safety features ensure reliable and secure charging every time.', height: 'short' },
    { img: '/QualityBuilttolast.webp', title: 'Quality – Built to last', desc: 'Premium materials and rigorous testing guarantee long-lasting performance.', height: 'tall' },
    { img: '/Designedoreverydayuse.avif', title: 'Functionality – Designed for everyday use', desc: 'Intuitive design makes charging simple and convenient for daily routines.', height: 'short' },
    { img: '/ElevatingyourEVexperience.webp', title: 'Style – Elevating your EV experience', desc: 'Sleek aesthetics complement your space while delivering exceptional performance.', height: 'tall' },
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Make the Right Choice for Your Electric Journey with Doze EV Chargers.</h2>
      <Swiper
        modules={[FreeMode]}
        spaceBetween={20}
        slidesPerView="auto"
        freeMode={true}
        className={styles.swiper}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <div className={`${styles.card} ${styles[slide.height]}`}>
              <img src={slide.img} alt={slide.title} className={styles.image} />
            </div>
            <div className={styles.footer}>
              <div className={styles.content}>
                <p className={styles.text}>{slide.title}</p>
                <p className={`${styles.description} ${openIndex === index ? styles.descriptionOpen : ''}`}>
                  {slide.desc}
                </p>
              </div>
              <span 
                className={`${styles.icon} ${openIndex === index ? styles.iconOpen : ''}`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                +
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
