import { unstable_noStore } from 'next/cache'
import { Post, User } from './models'
import { connectToDb } from './utils'

export const getPost = async (slug) => {
    try {
        connectToDb()
        const post = await Post.findOne({ slug })
        return post
    } catch (error) {
        console.log(error)
        throw new Error('Failed to fetch post')
    }
}

export const getPosts = async () => {
    try {
        connectToDb()
        const posts = await Post.find()
        return posts
    } catch (error) {
        console.log(error)
        throw new Error('Failed to fetch posts')
    }
}

export const getUser = async (id) => {
    unstable_noStore()
    try {
        connectToDb()
        const user = await User.findById(id)
        return user
    } catch (error) {
        console.log(error)
        throw new Error('Failed to fetch user')
    }
}

export const getUsers = async () => {
    try {
        connectToDb()
        const users = await User.find()
        return users
    } catch (error) {
        console.log(error)
        throw new Error('Failed to fetch users')
    }
}
