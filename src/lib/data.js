const users = [
    { id: 1, username: 'John' },
    { id: 2, username: 'Jane' },
]

const posts = [
    { id: 1, title: 'Post 1', body: '......', userId: 1 },
    { id: 2, title: 'Post 2', body: '......', userId: 1 },
    { id: 3, title: 'Post 3', body: '......', userId: 2 },
    { id: 4, title: 'Post 4', body: '......', userId: 2 },
    { id: 5, title: 'Post 5', body: '......', userId: 1 },
    { id: 6, title: 'Post 6', body: '......', userId: 1 },
    { id: 7, title: 'Post 7', body: '......', userId: 2 },
    { id: 8, title: 'Post 8', body: '......', userId: 2 },
]

export const getPost = (id) => {
    return posts.find((post) => post.id === parseInt(id) )
}

export const getPosts = () => {
    return posts
}

export const getUser = (id) => {
    return users.find((user) => user.id === parseInt(id))
}

export const getUsers = () => {
    return users
}
