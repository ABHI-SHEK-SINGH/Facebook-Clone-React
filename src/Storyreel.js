import React from 'react'
import './css/story.css'
import { Avatar } from '@mui/material';

function Storyreel() {
  return (
    <div className='storyReel'>
   <div className='story' style={{backgroundImage:`url(' https://i.pinimg.com/736x/26/54/09/2654095f72076258617f5ca13b727d79.jpg')`}}>
    <Avatar src=" https://images.pexels.com/photos/4709289/pexels-photo-4709289.jpeg?auto=compress&cs=tinysrgb&w=600"/>
    <h4>Abhishek Singh</h4>
   </div>

   <div className='story' style={{backgroundImage:`url(' https://file.pngbackground.com/uploads/preview/kgf-picsart-poster-editing-background-hd-11630810885pqwggpwem2.jpg')`}}>
    <Avatar src="https://i.pinimg.com/736x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg"/>
    <h4>Harsh Singh</h4>
   </div>

   <div className='story' style={{backgroundImage:`url(' https://english.cdn.zeenews.com/sites/default/files/2022/08/09/1075638-ishan-14.jpg')`}}>
    <Avatar src="https://image.shutterstock.com/image-photo/muscular-man-showing-muscles-on-260nw-1686329977.jpg"/>
    <h4>Naman Singh</h4>
   </div>

   <div className='story' style={{backgroundImage:`url(' https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60')`}}>
    <Avatar src="https://image.shutterstock.com/image-photo/image-sweet-baby-girl-wreath-260nw-463272494.jpg"/>
    <h4>Leena Singh</h4>
   </div>

   <div className='story' style={{backgroundImage:`url(' https://thumbs.dreamstime.com/z/fantastic-blurry-bokeh-dark-blue-theme-background-mystry-cave-146874347.jpg')`}}>
    <Avatar src="https://scontent.fjai2-1.fna.fbcdn.net/v/t1.6435-9/66850810_1214116965444358_9068810234184597504_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_m3d3z7qqAMAX8CwBtk&_nc_ht=scontent.fjai2-1.fna&oh=00_AT_1PhI17ZrzokIpS2dq7FSKvGyNT6jS6aonX0zJj3AxGw&oe=63221F27"/>
    <h4>Aditya Singh</h4>
   </div>
    </div>
  )
}

export default Storyreel