'use server'

import { revalidatePath } from 'next/cache'
import { Post, User } from './models'
import { connectToDb } from './utils'
import { signIn, signOut } from './auth'
import bcrypt from 'bcryptjs'

export const addPost = async (formData) => {
    const title = formData.get('title')
    const description = formData.get('description')
    const slug = formData.get('slug')
    const userId = formData.get('userId')

    try {
        connectToDb()
        const newPost = new Post({ title, description, slug, userId })
        await newPost.save()
        revalidatePath('/blog')
    } catch (error) {
        console.log(error)
    }
}

export const deletePost = async (formData) => {
    const id = formData.get('id')

    try {
        connectToDb()
        await Post.findByIdAndDelete(id)
        revalidatePath('/blog')
    } catch (error) {
        console.log(error)
    }
}

export const handleGithubLogin = async () => {
    await signIn('github')
}
export const handleLogout = async () => {
    await signOut()
}

export const register = async (previousState, formData) => {
    const { username, email, password, img, passwordReapeat } = Object.fromEntries(formData)
    if (password !== passwordReapeat) return { error: "Passwords don't match" }

    try {
        connectToDb()
        const user = await User.findOne({ username })
        if (user) return { error: 'User already exists!' }

        const userEmail = await User.findOne({ email })
        if (userEmail) return { error: 'User with such e-mail already exists!' }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            img,
        })
        await newUser.save()
        console.log('save to db')
        return { success: true }
    } catch (error) {
        console.log(error)
        return { error: 'Something went wrong!' }
    }
}

export const login = async (previousState, formData) => {
    const { username, password } = Object.fromEntries(formData)

    try {
        await signIn('credentials', { username, password })
    } catch (error) {
        console.log(error)
        if (error.message.includes('CredentialsSignin')) {
            return { error: 'Invalid username or password!' }
        }
        throw error
    }
}
