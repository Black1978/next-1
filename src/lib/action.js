import { revalidatePath } from 'next/cache'
import { Post } from './models'
import { connectToDb } from './utils'

export const addPost = async (formData) => {
    'use server'
    const title = formData.get('title')
    const description = formData.get('description')
    const slug = formData.get('slug')
    const userId = formData.get('userId')

    try {
        connectToDb()
        const newPost = new Post({ title, description, slug, userId })
        await newPost.save()
        console.log('save to db')
        revalidatePath('/blog')
    } catch (error) {
        console.log(error)
    }
}

export const deletePost = async (formData) => {
    'use server'
    const id = formData.get('id')

    try {
        connectToDb()
        await Post.findByIdAndDelete(id)
        console.log('delete from db')
        revalidatePath('/blog')
    } catch (error) {
        console.log(error)
    }
}
