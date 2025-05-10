import styles from './Banners.module.css'
import headphones from '../../images/banners/Heaphones.png'

const Banners = () => {
    return <div className={styles.container}>
    <div className={styles.bannerContainer}>
        <img src={headphones} alt="headphones" className={styles.headphonesImg}/>
        <div className={styles.textContainer}>
        <p className={styles.text}>
                Discover a wide range of genres, from <span className={styles.secondaryText}>classical to contemporary</span>, and enjoy our music selection 
        </p>
      </div>
        </div>
        </div>
}

export default Banners