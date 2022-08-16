import React from 'react'
import "./css/feed.css"
import MessageSender from './MessageSender'
import Storyreel from './Storyreel'
import Post from './Post'

function Feed() {
  return (
    <div className='feed'>
    <Storyreel/>
    <MessageSender/>
    <Post/>
    <Post/>
    <Post/>
       </div>
  )
}

export default Feed