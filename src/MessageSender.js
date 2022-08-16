import React from 'react'
import { Avatar } from '@mui/material';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import CollectionsIcon from '@mui/icons-material/Collections';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import "./css/messagesender.css"

function MessageSender() {
  return (
    <div className='messagesender'>
    
    <div className='messagesender_top'>
        {/* <Avatar/> */}

        <form>
            <input type="text" placeholder="What's on  your mind Abhishek" />
        </form>
        
    </div>

    <div className='messagesender_bottom'>
        <div className='messageOptions'>
   <VideoCallIcon style={{color:"red"}} fontSize="large"/>
   <p>Live Video</p>
        </div>

        <div className='messageOptions'>
   <CollectionsIcon style={{color:"lightgreen"}} fontSize="large"/>
   <p>Photo/Video</p>
        </div>

        <div className='messageOptions'>
   <EmojiEmotionsIcon style={{color:"#ffb100"}} fontSize="large"/>
   <p>Feeling/Activity</p>
        </div>

    </div>
    </div>
  )
}

export default MessageSender