import Image from 'next/image'
import styles from './postCard.module.css'
import Link from 'next/link'

const PostCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src='/architecture_big_ben.jpg' alt='' fill className={styles.img}/>
                </div>
                <span className={styles.date}>01.01.2024</span>
            </div>
            <div className={styles.bottom}>
              <h2 className={styles.title}>Title</h2>
              <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad libero iusto eius sit provident est delectus qui corrupti quod facere a, nemo doloribus. Eaque mollitia maxime culpa iste quasi eum quisquam, veniam, ducimus provident libero ullam explicabo rerum. Illo, esse?</p>
              <Link href='/blog/post' className={styles.link}>READ MORE</Link>
            </div>
        </div>
    )
}

export default PostCard
