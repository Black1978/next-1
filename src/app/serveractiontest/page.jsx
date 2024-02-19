import { addPost, deletePost } from '@/lib/action'
import React from 'react'

const ServerActionTest = () => {
  return (
    <div>
        <form action={addPost} style={{'background': 'white'}}>
          <input type="text" placeholder='title' name='title' />
          <input type="text" placeholder='description' name='description'/>
          <input type="text" placeholder='slug' name='slug'/>
          <input type="text" placeholder='userId' name='userId'/>
            <button>Create post</button>
        </form>
        <form action={deletePost} style={{'background': 'white'}}>
          <input type="text" placeholder='id' name='id' />
            <button>Delete post</button>
        </form>
    </div>
  )
}

export default ServerActionTest
