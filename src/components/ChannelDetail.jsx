import React from 'react'
import { useState, useEffect } from 'react'
import { useParams} from 'react-router-dom'
import { Box} from '@mui/material'
import {Videos, ChannelCard} from './'
import { FetchFromApi } from '../utils/FetchFromApi'
import zIndex from '@mui/material/styles/zIndex'


const ChannelDetail = () => {

    const [channelDetail, setChannelDetail] = useState(null)
    const [videos, setVideos]     = useState([])

   const {id} = useParams()

     console.log(channelDetail , videos)
   useEffect(()=>{
    FetchFromApi(`channels?part=snippet&id=${id}`)
    .then((data)=> setChannelDetail(data?.items[0]))

    FetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=> setVideos(data?.items))

   }, [id])

  return (
    <Box 
    minHeight='95vh'>
      <Box>
        <div style={{background: 'linear-gradient(90deg, rgba(105,2,7,1) 0%, rgba(0,0,0,1) 47%, rgba(228,2,2,1) 100%, rgba(8,8,8,0.969625350140056) 100%)', 
      
        zIndex:10 , height:'300px'}}/>
        <ChannelCard channelDetail={channelDetail} marginTop ='-110px' />
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{mr:{sm:'100px'}}} />
         <Videos videos={videos} />
       

      </Box>
    </Box>
  )
}

export default ChannelDetail
