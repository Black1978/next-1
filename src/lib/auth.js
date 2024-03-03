import NextAuth from 'next-auth'
import GitHub from '@auth/core/providers/github'
import CredentialsProvider from '@auth/core/providers/credentials'
import { connectToDb } from './utils'
import { User } from './models'
import bycrypt from 'bcryptjs'

const login = async (credentials) => {
    try {
        connectToDb()
        const user = await User.findOne({
            username: credentials.username
        })
        if(!user) throw new Error('Wrong username!')
        const isPasswordCorrect = await bycrypt.compare(credentials.password, user.password)
        if(!isPasswordCorrect) throw new Error('Wrong password!')
        return user
    } catch (error) {
        throw new Error('Wrong credentials!')
    }
}

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    providers: [
        GitHub({ clientId: process.env.GITHUB_ID, clientSecret: process.env.GITHUB_SECRET }),
        CredentialsProvider({
            async authorize(credentials) {
                try {
                    const user = await login(credentials)
                    return user
                } catch (error) {
                    return null
                }
            },
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
            console.log(user, account, profile)
            if (account.provider === 'github') {
                connectToDb()
                try {
                    const user = await User.findOne({ email: profile.email })
                    if (!user) {
                        const newUser = await new User({
                            username: profile.login,
                            email: profile.email,
                            img: profile.avatar_url,
                        })
                        await newUser.save()
                    }
                } catch (error) {
                    console.log(error)
                    return false
                }
            }
            return true
        },
    },
})
