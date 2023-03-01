import React from 'react'
import { Stack, Typography} from '@mui/material'
import {Link} from 'react-router-dom'
import { logo } from '../utils/constants'
import SearchBar from './SearchBar'
import { Box } from '@mui/system'

const Navbar = () => {
  
  return (
    <Stack 
    direction ='row' 
    alignItems='center' 
    p={2} 
    sx={{position:'sticky' , background:'#000' , top:0 , justifyContent:'space-between', display:{xs:'block' , sm: 'block' , md: 'flex'}}}

    > 
    <div style={{display:'flex'}}>
      <Box>
      <Link to ='/' style={{display:'flex' , alignItems:'center'}}>
        <img src={logo} alt="logo" height={45}/>
        <Typography variant='h3'
        fontWeight='bold' mb = {2}
        sx={{color: 'white', marginLeft:1, paddingTop:2}}>
          mi<span style={{color: '#F31503', marginLeft:0}}>
          Tube
          </span>
        </Typography>e
      </Link> 
      </Box>
      </div>

      <SearchBar />

      
    </Stack>
  )
}


export default Navbar
