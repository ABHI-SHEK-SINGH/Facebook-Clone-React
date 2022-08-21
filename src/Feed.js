import React, { useEffect, useState } from 'react'
import "./css/feed.css"
import MessageSender from './MessageSender'
import Storyreel from './Storyreel'
import Post from './Post'
import { db } from './harsh'

function Feed() {
  
  const [posts, setPosts] = useState([]);
  useEffect(() =>{
  db.collection("posts").orderBy("timestamp","desc").onSnapshot(snapshot=>{
     setPosts(snapshot.docs.map(doc=>({
      id:doc.id,
      data:doc.data(),
     })))
  })
  },[]);


  return (
    <div className='feed'>
    <Storyreel/>
    <MessageSender/>
  
    {
      posts.map(post =>{
        return<Post photoURL={post.data.photoURL} image={post.data.image} username={post.data.username} timestamp="18:30" message={post.data.message}/>

      })
    }
   
    
    
       </div>
  )
}

export default Feed