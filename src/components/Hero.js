import React from 'react';
import styles from "./Hero.module.css"

const Hero = () => {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>Spider-Man Far From Home</h2>
                    <h3 className={styles.hero__genre}>
                        Genre: Thriller, Drama, Romance
                    </h3>
                    <p className={styles.hero__description}>
                    Rencana Peter untuk meninggalkan kepahlawanan super selama beberapa minggu dengan cepat dibatalkan ketika dia dengan enggan setuju untuk membantu Nick Fury mengungkap misteri serangan makhluk elemental yang menciptakan kekacauan di seluruh benua.
                    </p>
                    <button className={styles.hero__button}>watch</button>
                </div>
                <div className={styles.hero__right}>
                    <img 
                    className={styles.hero__image}
                    src="https://www.bt.com/content/dam/bt/portal/images/articles/tv/tv-films-spider-man-far-from-home-key-art.jpg/jcr:content/renditions/landscape-tablet.935.526.jpg"
                    alt="placeholder"
                    />
                </div>
            </section>
        </div>
    );
}

export default Hero;
