import React from 'react';
import styles from './Banners.module.css'
import headphones from '../../images/banners/Heaphones.png'

const Banners = () => {
    return <div className={styles.bannerContainer}>
        <img src={headphones} alt="headphones" />
        <div className={styles.textContainer}>
        <p className={styles.text}>
            Discover a wide range of genres, from classical to contemporary, and enjoy our music selection 
        </p>
      </div>
    </div>
}

export default Banners