import React from 'react'
import styles from './singlePost.module.css'
import Image from 'next/image'

const SinglePostPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src='/architecture_big_ben.jpg' alt='' fill className={styles.img} />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Title</h1>
                <div className={styles.detail}>
                    <Image src='/avatarUser.jpg' alt='' width={50} height={50} className={styles.avatar} />
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Author</span>
                        <span className={styles.detailValue}>Terry Jefferson</span>
                    </div>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>01.01.2024</span>
                    </div>
                </div>
                <div className={styles.content}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ullam, rem
                    rerum delectus labore sed facilis in a corporis fuga expedita suscipit
                    praesentium quibusdam, quia pariatur? Quam, dolorem? Quo, iste libero eligendi
                    aspernatur alias ex nihil cupiditate at excepturi temporibus dolor doloribus
                    corrupti accusamus id quas voluptate hic perferendis magnam!
                </div>
            </div>
        </div>
    )
}

export default SinglePostPage
