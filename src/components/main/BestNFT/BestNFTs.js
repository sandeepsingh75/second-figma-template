import { Grid } from '@mui/material';
import { Box } from '@mui/material';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import React from 'react';
import BestNFTBidCard from './BestNFTBidCard';
import { Best, CreateButton, Explore, ExploreButon, ExploreButton, GridContainer, Nft, Sell, SellContainer } from './BestNFTStyle';

function BestNFTs(props) {
    return (
       <GridContainer container>
           <Grid item lg={6} md={12} sm={12} >
               
                <Explore > Explore Buy and  </Explore>
                
                <SellContainer >
                <Sell >  Sell the  </Sell>
                <Best > &nbsp; Best  </Best>
                </SellContainer>
                <Nft sx={{}}> NFTs! </Nft>
                <Button sx={{ background:'#FFCE4E',height: '4rem', fontWeight:'bold' ,width: '15rem', color:'black' }}> Explore </Button>
                <Button variant='outlined' sx={{ background:'rgba(233, 215, 167, 0.1)',border: '1px solid #FFCE4E', color:'white', fontWeight:'bold',height: '4rem' ,width: '15rem' ,margin: '3rem' }}> Create </Button>

                <Grid container sx={{marginBottom:'5rem'}}>
                    <Grid item md={4}>
                        <Typography sx={{color:'#F5FBF2', fontWeight: '700',fontSize: '62px',lineHeight: '78px'}}> 32k+</Typography>
                        <Typography sx={{color: '#9B9E9A', fontWeight: '400',fontSize: '24px',lineHeight: '35px', marginLeft:'1rem'}}> Artworks</Typography>
                    </Grid>
                    <Grid item md={4}>
                    <Typography  sx={{color:'#F5FBF2', fontWeight: '700',fontSize: '62px',lineHeight: '78px'}}> 20k+</Typography>
                        <Typography  sx={{color: '#9B9E9A', fontWeight: '400',fontSize: '24px',lineHeight: '35px', marginLeft:'1rem'}}> Auctions</Typography>
                    </Grid>
                    <Grid item md={4}>
                    <Typography  sx={{color:'#F5FBF2', fontWeight: '700',fontSize: '62px',lineHeight: '78px'}}> 12k+</Typography>
                        <Typography  sx={{color: '#9B9E9A', fontWeight: '400',fontSize: '24px',lineHeight: '35px', marginLeft:'1rem'}}> Creators</Typography>
                    </Grid>
                </Grid>

           </Grid>
           <Grid item lg={6} md={12} sm={12} sx={{  background: 'rgba(79, 70, 78, 0.45)'}}>
                <BestNFTBidCard />
           </Grid>
       </GridContainer>
    );
}

export default BestNFTs;