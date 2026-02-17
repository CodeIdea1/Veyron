import styles from '../styles/driven.module.css';

export default function DrivenByFuture() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <p className={styles.label}>About us</p>
        </div>
        
        <div className={styles.rightColumn}>
          <h2 className={styles.title}>
            We're passionate about advancing electric vehicle charging solutions that meet the demands of tomorrow
          </h2>
          
          <div className={styles.content}>
            <div className={styles.contentLeft}>
              <h3 className={styles.subtitle}>We're proud to be powering the electric future.</h3>
            </div>
            
            <div className={styles.contentRight}>
              <p className={styles.text}>
                Our team of engineers and designers works tirelessly to bring you cutting-edge technology, ensuring that charging your EV is as effortless and seamless as possible.
              </p>
              
              <p className={styles.text}>
                With a commitment to sustainability and innovation, Doze is dedicated to making the switch to electric easy for everyone, whether it's for private homes, public use, or large corporate installations.
              </p>
              
              <button className={styles.button}>About us</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.teamGrid}>
        <div className={styles.teamCard}>
          <div className={styles.imageWrapper}>
            <img src="/Marianna.avif" alt="Marianna" className={styles.teamImage} />
            <p className={styles.teamName}>Marianna</p>
            <div className={styles.jobTitle}>Creative Director</div>
          </div>
        </div>
        
        <div className={styles.teamCard}>
          <div className={styles.imageWrapper}>
            <img src="/Michael.webp" alt="Michael" className={styles.teamImage} />
            <p className={styles.teamName}>Michael</p>
            <div className={styles.jobTitle}>CEO</div>
          </div>
        </div>
        
        <div className={styles.teamCard}>
          <div className={styles.imageWrapper}>
            <img src="/Jane.avif" alt="Jane" className={styles.teamImage} />
            <p className={styles.teamName}>Jane</p>
            <div className={styles.jobTitle}>Lead Engineer</div>
          </div>
        </div>
      </div>
    </section>
  );
}
