import React, { Suspense } from 'react'
import styles from './singlePost.module.css'
import Image from 'next/image'
import PostUser from '@/components/postUser/PostUser'
import { getPost } from '@/lib/data'

// const getDate = async (slug) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
//     if (!res.ok) {
//         throw new Error('Something went wrong')
//     }
//     return res.json()
// }

const SinglePostPage = async ({ params }) => {
    
    const { slug } = params
    // const post = await getDate(slug)
    const post = await getPost(slug)

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src='/architecture_big_ben.jpg' alt='' fill className={styles.img} />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{post.title}</h1>
                <div className={styles.detail}>
                    <Image
                        src='/avatarUser.jpg'
                        alt=''
                        width={50}
                        height={50}
                        className={styles.avatar}
                    />
                    <Suspense fallback={<div>Loading ...</div>}>
                        <PostUser userId={post.userId} />
                    </Suspense>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>01.01.2024</span>
                    </div>
                </div>
                <div className={styles.content}>{post.body}</div>
            </div>
        </div>
    )
}

export default SinglePostPage
