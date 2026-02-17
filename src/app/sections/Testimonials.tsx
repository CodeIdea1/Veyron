'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import styles from '../styles/testimonials.module.css';

export default function Testimonials() {
  const testimonials = [
    {
      text: "Installing Doze chargers in our workplace has been a game-changer. Employees love the convenience, and we appreciate the smart management features!",
      name: "Sarah Johnson",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      text: "I've been using the Doze charger for months now, and I love how it's always efficient, safe, and charges my vehicle quickly every single time.",
      name: "Michael Chen",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      text: "I can't believe how much time I save with Doze. The charging speed is top-notch, and it's simple enough for the whole family to use!",
      name: "Emma Williams",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg"
    },
    {
      text: "Doze is hands down the best EV charger I've tried. It's fast, smart, and reliable—everything I need for a smooth charging experience.",
      name: "David Martinez",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg"
    },
    {
      text: "What sets Doze apart is its durability and smart features. It's weather-resistant and dependable, perfect for any condition.",
      name: "Lisa Anderson",
      avatar: "https://randomuser.me/api/portraits/women/5.jpg"
    }
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Join thousands of satisfied customers who trust Doze for their EV charging needs.</h2>
      
      <Swiper
        modules={[FreeMode]}
        spaceBetween={20}
        slidesPerView="auto"
        freeMode={true}
        className={styles.swiper}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <div className={styles.card}>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={styles.star} width="16" height="16" viewBox="0 0 24 24" fill="#6b7280">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              
              <p className={styles.text}>{testimonial.text}</p>
              
              <div className={styles.footer}>
                <div className={styles.avatars}>
                  <img src={testimonial.avatar} alt={testimonial.name} className={styles.avatar} />
                  <img src="/Performance2.avif" alt="Product" className={styles.avatar} />
                </div>
                <div className={styles.info}>
                  <p className={styles.name}>{testimonial.name}</p>
                  <p className={styles.product}>EcoCharge Solo</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
