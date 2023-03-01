import React, { useEffect, useState } from 'react'
import {Box, Typography} from '@mui/material'
import {Videos} from './'
import { FetchFromApi } from '../utils/FetchFromApi'
import {useParams} from 'react-router-dom'


const SearchFeed = () => {
  const [videos, setVideos] = useState([])

  const {searchTerm}   = useParams()

  useEffect(()=>{
    FetchFromApi(`search?part=snippet&q=${searchTerm}`)
   .then((data)=> 
    setVideos(data.items))
  } , [searchTerm])
  // console.log(videos)
  return (
    
    <Box p={2} 
    sx={{overflowY:'auto', height:'90vh'
    , flex:2}}>
      <Typography variant='h4'
      fontWeight='bold' mb = {2}
      sx={{color: '#FC15', textAlign:'center' , mb:3, pr:2 }}>
        Search Results For: <span style={{ color: '#F31503'}}>{searchTerm}</span><span style={{color: '#F31503', marginLeft:7, borderBottom: '3px solid white',}}> 
          Video
        </span>
        s
      </Typography>
         
      <Videos videos = {videos} />
    </Box>

  )
}

export default SearchFeed
