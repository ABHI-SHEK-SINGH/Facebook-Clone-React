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
    <Post photoURL='' image="" username="Abhishek Singh" timestamp="18:30" message="This is text message"/>
   
    <Post photoURL='https://rukminim1.flixcart.com/image/416/416/k3hmj680/poster/t/9/p/medium-shinchan-cartoon-poster-self-adhesive-poster-wall-original-imaffg8yhsvuqgyz.jpeg?q=70' image="https://cdn.theculturetrip.com/wp-content/uploads/2017/10/himachal.jpg" username="Dummy User" timestamp="18:30" message="Hill Station"/>
    
       </div>
  )
}

export default Feed