import React from 'react'
import Sidebaroptions from './Sidebaroptions'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "./css/sidebar.css"

function Sidebar() {
  return (
    <div className='sidebar'>
      <Sidebaroptions src="https://rukminim1.flixcart.com/image/416/416/k3hmj680/poster/t/9/p/medium-shinchan-cartoon-poster-self-adhesive-poster-wall-original-imaffg8yhsvuqgyz.jpeg?q=70" title="Abhishek Singh"/>
      <Sidebaroptions src ="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png" title="Friends"/>
      <Sidebaroptions src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png" title="Groups"/>
      <Sidebaroptions src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/A1HlI2LVo58.png" title="Watch"/>
      <Sidebaroptions src="https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/XXwl2m1vjqM.png" title="Events"/>
      <Sidebaroptions src="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/YF1bztyGuX-.png" title="Messenger"/>
      <Sidebaroptions Icon={KeyboardArrowDownIcon} title="See More"/>
    </div>
  )
}

export default Sidebar