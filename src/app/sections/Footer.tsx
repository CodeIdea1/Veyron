import styles from '../styles/footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.leftColumn}>
          <h2 className={styles.heading}>Get set for an electric future. Experts in smart EV charging solutions.</h2>
          <div className={styles.contact}>
            <p>hello@doze.com</p>
            <p>+1 (38) 3847-498</p>
          </div>
        </div>
        
        <div className={styles.rightColumn}>
          <a href="#" className={styles.link}>Explore Chargers</a>
          <a href="#" className={styles.link}>Solutions</a>
          <a href="#" className={styles.link}>Mobile App</a>
          <a href="#" className={styles.link}>About us</a>
          <a href="#" className={styles.link}>Contact</a>
          <a href="#" className={styles.link}>Blog</a>
        </div>
      </div>
      
      <div className={styles.bottomSection}>
        <div className={styles.logoSection}>
          <img src="/logoo.svg" alt="Doze" className={styles.logo} />
        </div>
        
        <div className={styles.footerLinks}>
          <div className={styles.legal}>
            <span>© DOZE.chargers</span>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
          
          <div className={styles.social}>
            <a href="#">Instagram</a>
            <a href="#">Linkedin</a>
            <a href="#">X (Twitter)</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
