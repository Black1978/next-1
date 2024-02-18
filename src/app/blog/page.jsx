import PostCard from '@/components/postCard/PostCard'
import styles from './blog.module.css'
import { getPosts } from '@/lib/data'

// FETCH DATA WITH AN API
// const getDate = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'force-cache' })
//     if (!res.ok) {
//         throw new Error('Something went wrong')
//     }
//     return res.json()
// }

const BlogPage = async () => {
    // const posts = await getDate()
       const posts = await getPosts()
    return (
        <div className={styles.container}>
            {posts.map((post) => {
                return (
                    <div className={styles.post} key={post.id}>
                        <PostCard post={post} />
                    </div>
                )
            })}
        </div>
    )
}

export default BlogPage
