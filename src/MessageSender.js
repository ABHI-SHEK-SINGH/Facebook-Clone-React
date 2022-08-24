import React, {useState} from 'react'
import { Avatar ,IconButton,Modal} from '@mui/material';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import CollectionsIcon from '@mui/icons-material/Collections';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import "./css/messagesender.css"
import CloseIcon from '@mui/icons-material/Close';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import harsh from 'firebase/compat/app';
import { db ,storageRef } from './harsh';
import {useStateValue} from './StateProvider';
import { ref, uploadBytes } from "firebase/storage";



function MessageSender() {
  const [{user},dispatch] = useStateValue();
  const [open,setOpen] = useState(false)
  const [image, setImage] =useState("");
  const[message, setMessage] =useState("");
  const[progress, setProgress] = useState(0);
  const handleClose=() => {
   setOpen(false)
  }

const uploadFileClick=()=>{
document.getElementById("imageFile").click();
}

const handleChange =(e)=>{
if(e.target.files[0]){
  setImage(e.target.files[0]);
}
  
}
const handleUpload=(e)=>{
  e.preventDefault();
  if(image===""){
   db.collection("posts").add({
    timestamp:harsh.firestore.FieldValue.serverTimestamp(),
    message:message,
    username:user.displayName,
    photoURL:user.photoURL
   })
  }
  else{
   const uploadTask = storageRef.ref(`images/${image.name}`).put(image);

   uploadTask.on(
    "state_changed",
    (snapshot)=>{
   const progress = Math.round((snapshot.bytesTransferred/snapshot.totalBytes)*100)
   setProgress(progress);
    },
    (error)=>{
      console.log(error);
      alert(error.message);
    },
    ()=>{
      storageRef.ref("images").child(image.name).getDownloadURL().then(url =>{
        db.collection("posts").add({
          timestamp:harsh.firestore.FieldValue.serverTimestamp(),
          message:message,
          username:user.displayName,
          photoURL:user.photoURL,
          image:url
         })


      })
    }
   )
    
  }
  handleClose();
  setMessage("");
  setImage(null);
  setProgress(0);
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
  <h5>{user.displayName}</h5>
 </div>

 <div className='modalBody'>
 
  <textarea rows="5" placeholder="What's on your mind Abhishek Singh ?"

  onChange={e =>setMessage(e.target.value)}>
  {message}</textarea>
 </div>

 <div className='modalFooter'>
  <div className='modalFooterLeft'>
    <h4>Add to your post</h4>
  </div>

  <div className='modalFooterRight'>
    <IconButton onClick={uploadFileClick}>
<PhotoLibraryIcon fontSize='large' style={{color:"lightgreen"}}/>
    </IconButton>

   <input type="file" id="imageFile" onChange={handleChange} style={{display:"none"}}/>

    <IconButton>
<VideoCallIcon fontSize='large' style={{color:"red"}}/>
    </IconButton>

    <IconButton>
<EmojiEmotionsIcon fontSize='large' style={{color:"#ffb100"}}/>
    </IconButton>
  </div>

 </div>
 {image!==" " && <h2 style={{"fontSize":"15px","marginBottom":"20px","color":"lightgreen"}}>Image is added and displayed after click on post button</h2>}

 {
  progress!="" && <progress value={progress} max="100" style={{"width":"100%","marginBottom":"20px"}}/>
 }




 <input type="Summit" onClick={handleUpload} className='post_submit' value="Post" />
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