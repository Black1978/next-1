import Image from 'next/image'
import React from 'react'
import styles from './about.module.css'

const AboutPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>About Agency</h1>
                <h2 className={styles.subTitle}>
                    We create digital ideas that are bigger, bolder, braver and better
                </h2>
                <p className={styles.desc}>
                    We create digital ideas that are bigger, bolder, braver and better. We believe
                    in good ideas flexibility and precission. We are worlds. Our special team best
                    consulting & finance solution provider. Wide range of web and software
                    development services.
                </p>
                <div className={styles.boxes}>
                    <div className={styles.box}>
                        <h3>10 K+</h3>
                        <p>Years of experience</p>
                    </div>
                    <div className={styles.box}>
                        <h3>10 K+</h3>
                        <p>Years of experience</p>
                    </div>
                    <div className={styles.box}>
                        <h3>10 K+</h3>
                        <p>Years of experience</p>
                    </div>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image src='/about.png' alt='' fill className={styles.img}/>
            </div>
        </div>
    )
}

export default AboutPage
