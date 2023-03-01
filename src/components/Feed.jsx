import React, { useEffect, useState } from 'react'
import {Box, Stack, Typography} from '@mui/material'
import {SideBar, Videos} from './'
import { FetchFromApi } from '../utils/FetchFromApi'


const Feed = () => {
  const [videos, setVideos] = useState([])

  const [selectedCategory, setSelectedCategory] = useState('New')

  useEffect(()=>{
    FetchFromApi(`search?part=snippet&q=${selectedCategory}`)
   .then((data)=>
    setVideos(data.items))
  } , [selectedCategory])
  // console.log(videos)
  return (
    <Stack sx={{flexDirection: {sx:'column', md:'row'}}}>
      <Box sx={{height:{sx:'auto', md:'92vh'}, borderRight: '1px solid #3d3d3d ', px:{sx:0, md:2}}}>
        <SideBar
         selectedCategory={selectedCategory}
         setSelectedCategory={setSelectedCategory} />
        <Typography className='copyright'
        variant='body2'
        sx={{mt:1.5, color:'#fff'}}>
          Copyright 2023 Obtex Tech
        </Typography>

      </Box>

      <Box p={2} 
      sx={{overflowY:'auto', height:'90vh'
      , flex:2}}>
        <Typography variant='h4'
        fontWeight='bold' mb = {2}
        sx={{color: '#FC15', textAlign:'center' , mb:3, pr:2 }}>
          {selectedCategory}<span style={{color: '#F31503', marginLeft:7, borderBottom: '3px solid white',}}>
            Video
          </span>
          s
        </Typography>
           
        <Videos videos = {videos} />
      </Box>
    </Stack>
  )
}

export default Feed
