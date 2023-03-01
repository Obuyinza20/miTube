import React from 'react'
import{Routes, Route, BrowserRouter} from 'react-router-dom'
import {Box} from '@mui/material'
import {ChannelDetail, Feed, Navbar, SearchFeed, VideoDetail, } from './components'



//npm install --legacy-peer-deps  this installs the same version of dependencies already added to the package.json file

const App = () => {

   return(
    <Box sx ={{ backgroundColor:'#000'}}>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Feed/> }/>
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
   
   ) 
    
}

export default App
