import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import { Box } from '@mui/material';
import React from 'react';
import { SubscribeButton } from './NFTDropStyle';

function NFTDrop(props) {
    return (
        <Box sx={{color:'white',padding:'5rem'}}>
            <Typography sx={{fontWeight:'600', fontSize:'64px', color: '#F5FBF2', textAlign:'center'}}> Ready for Next NFT Drop?</Typography>
            <Box sx={{textAlign:'center', marginTop:'1rem'}}>
            <TextField label='info@gmail.com' variant='outlined' type='email' placeholder='info@gmail.com' sx={{color: '#A48EA9', border: '1px solid #E7B226', background: 'linear-gradient(179.78deg, #1C121F 9.98%, rgba(28, 18, 31, 0.21) 81.39%), url(nft-art-1230x690.jpg)',  width:'20rem'}}  /> 
            <SubscribeButton sx={{}}> Subscribe </SubscribeButton>
            </Box>
        </Box>
    );
}

export default NFTDrop;