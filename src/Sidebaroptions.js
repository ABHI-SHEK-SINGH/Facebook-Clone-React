import React from 'react'
import { Avatar } from '@mui/material';
import "./css/siderow.css"

function Sidebaroptions({title,src,Icon}) {
  return (
    <div className='sidebarRow'>
    {src && <Avatar src={src}/>}
    {Icon && <Icon/>}
    <p>{title}</p>
    
    </div>
  )
}

export default Sidebaroptions