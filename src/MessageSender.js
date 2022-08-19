import React, {useState} from 'react'
import { Avatar ,IconButton,Modal} from '@mui/material';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import CollectionsIcon from '@mui/icons-material/Collections';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import "./css/messagesender.css"
import CloseIcon from '@mui/icons-material/Close';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';



function MessageSender() {
  const [open,setOpen] = useState(false)
  const handleClose=() => {
   setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
   }
  return (
    <>
    <Modal open={open} onClose={handleClose}>
 <div className='modal_pop'>
  <form>
 <div className='modalHeading'>
  <h3>Create Post</h3>
  <IconButton onClick={handleClose}>
    <CloseIcon/>
  </IconButton>
 </div>
 <div className='modalHeader_top'>
  <Avatar/>
  <h5>Abhishek Singh</h5>
 </div>
 <div className='modalBody'>
  <textarea rows="5" placeholder="What's on your mind Abhishek Singh ?"></textarea>
 </div>

 <div className='modalFooter'>
  <div className='modalFooterLeft'>
    <h4>Add to your post</h4>
  </div>

  <div className='modalFooterRight'>
    <IconButton>
<PhotoLibraryIcon fontSize='large' style={{color:"lightgreen"}}/>
    </IconButton>

    <IconButton>
<VideoCallIcon fontSize='large' style={{color:"red"}}/>
    </IconButton>

    <IconButton>
<EmojiEmotionsIcon fontSize='large' style={{color:"#ffb100"}}/>
    </IconButton>
  </div>

 </div>
 <input type="Summit" className='post_submit' value="Post" />
  </form>
 </div>
    </Modal>
    <div className='messagesender'>
    
    <div className='messagesender_top'>
        {/* <Avatar/> */}

        <form>
            <input type="text" placeholder="What's on  your mind Abhishek"  onClick={handleOpen}/>
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
    </>
  )
}

export default MessageSender