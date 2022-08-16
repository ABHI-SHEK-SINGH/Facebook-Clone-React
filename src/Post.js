import React from 'react'
 import "./css/post.css"
 import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
 import { Avatar } from '@mui/material';
 import PublicIcon from '@mui/icons-material/Public';


function Post() {
  return (
    <div className='post'>
        <div className='post_top'>
         <div className='post_topLeft'>
    <Avatar/>
    <div className='postInfo'>
    <h4>Abhishek Singh</h4>
    <p>18:35 Pm <PublicIcon/></p>
    </div>
         </div>
        <MoreHorizIcon/>
        </div>
    </div>
  )
}

export default Post