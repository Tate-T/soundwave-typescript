import styles from './Footer.module.css'
import sound from '../../images/footer/sound.png'
import youtube from '../../images/footer/youtube.png'
import instagram from '../../images/footer/instagram.png'
import facebook from '../../images/footer/facebook.png'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footerContainer}>
        <li className={styles.globalWrapIcons}>
      <div className={styles.logoContainer}>
        <span className={styles.logo}><img src={sound} alt='sound'></img></span>
        <span className={styles.brandName}>Soundwave</span>
      </div>
      <div className={styles.socialImg}>
        <span className={styles.icon}><img src={facebook} alt="facebook" /></span>
        <span className={styles.icon}><img src={instagram} alt="instagram" /></span>
            <span className={styles.icon}><img src={youtube} alt="youtube" /></span>
      </div>
        </li>
        <li className={styles.globalWrapLinks}>
          <nav className={styles.nav}>
            <a href="#artist" className={styles.navLink}>Artist</a>
            <a href="#form" className={styles.navLink}>The form</a>
            <a href="#reviews" className={styles.navLink}>Reviews</a>
          </nav>
            <p className={styles.copyright}>©2024, Soundwave. All rights reserved</p>
          </li>
        </ul>
    </footer>
  );
};

export default Footer;

