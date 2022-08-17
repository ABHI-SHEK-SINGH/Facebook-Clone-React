import React from 'react'
import "./css/right.css"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VideocamIcon from '@mui/icons-material/Videocam';
import SearchIcon from '@mui/icons-material/Search';


function RightSidebar() {
  return (
    <div className='widget'>
      <div className='widget_header'>
<div className='widget_headerLeft'>
  <h4>Your Pages</h4>
</div>
<MoreHorizIcon/>
      </div>
      <div className='widget_body'>
        <div className='widget_bodyOptions'>
          <Avatar src='https://rukminim1.flixcart.com/image/416/416/k3hmj680/poster/t/9/p/medium-shinchan-cartoon-poster-self-adhesive-poster-wall-original-imaffg8yhsvuqgyz.jpeg?q=70'/>
          <h4>GFG</h4>
         
        </div>

        <div className='widget_bodyOptions ml10'>
          <NotificationsNoneIcon/>
          <p>1 Notification</p>
        </div>
        <div className='widget_bodyOptions ml10'>
         <VolumeUpIcon/>
          <p>Create Promotion</p>
        </div>
      </div>
      <hr /><br />

      <div className='widget_header'>
<div className='widget_headerLeft'>
  <h4>Contacts</h4>
</div>
<div className='widget_headerRight'>
<VideocamIcon/>
<SearchIcon/>
<MoreHorizIcon />

</div>

      </div>
      
      <div className='widget_body'>
        <div className='widget_bodyOptions'>
          <Avatar src='https://i.pinimg.com/474x/e3/92/12/e3921201698b42a7039136a16e44bf4e.jpg'/>
          <h4>GFG</h4>
         
        </div>
        <div className='widget_bodyOptions'>
          <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXpxFU8h2YHZH-ZSOVOLyLhO88pCArIc-Hw&usqp=CAU'/>
          <h4>RAM</h4>
         
        </div>
        <div className='widget_bodyOptions'>
          <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxcP_dWSHQeR1fIQ0CaO19qLZ1SK2Pv_tbRQ&usqp=CAU'/>
          <h4>Shyam</h4>
         
        </div>
        <div className='widget_bodyOptions'>
          <Avatar src='https://img.freepik.com/free-vector/cute-astronaut-dance-cartoon-vector-icon-illustration-technology-science-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3851.jpg?w=2000'/>
          <h4>Harsh</h4>
         
        </div>
  </div>
    </div>
  )
}

export default RightSidebar