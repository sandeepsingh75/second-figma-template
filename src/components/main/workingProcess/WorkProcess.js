import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";
import errow from '../../../images/workProcess/Vector 1.png';
import wallet from '../../../images/workProcess/Vector (2).png';
import walletDot from '../../../images/workProcess/Vector (1).png';
import collection from '../../../images/workProcess/Vector.png';
import nft from '../../../images/workProcess/Vector (3).png';
import sale from '../../../images/workProcess/Vector (5).png';
import sale1 from '../../../images/workProcess/Vector (4).png';

function WorkProcess(props) {
  return (
    <Box sx={{paddingBottom:'5rem', }}>
      <div style={{position:'relative', }}>
          <div style={{display:'flex', alignItem:'center', justifyContent:'center' }}>
      <Typography
        sx={{ fontWeight: "700",fontSize: "64px", color: "#F5FBF2",textAlign: "center",zIndex: 5, padding:'3rem' }} >
        How it works
      </Typography>
          </div>
      </div>
      <Grid container>
        <Grid item md={2}>
            <Box sx={{height:'5rem', width:'5rem', background:'#372839',borderRadius:'4rem' ,marginLeft:'44px',position:'relative'}}>
                <img src={wallet} alt="" style={{position:'absolute', left:'20px',top:'19px'}}/>
                <img src={walletDot} alt="" style={{position:'absolute', left:'47px',top:'38px'}}/>
            </Box>
            <Typography sx={{fontWeight:'600', fontSize:'24px', color:'#FFCE4E', marginTop:'15px'}}> Set Up Your Wallet</Typography>
        </Grid>
        <Grid item md={1}>
            <Box  sx={{margin:'34px -34px'}}>
            <img src={errow} alt="" />
            </Box>
        </Grid>
        <Grid item md={3}>
        <Box sx={{height:'5rem', width:'5rem', background:'#372839',borderRadius:'4rem' ,position:'relative',marginLeft:'70px'}}>
              <img src={collection} alt="" style={{position:'absolute', left:'20px',top:'19px'}}/>
        </Box>
            <Typography  sx={{fontWeight:'600', fontSize:'24px', color:'#FFCE4E', marginTop:'15px'}}> Create Your Collection</Typography>
        </Grid>
        <Grid item md={1}>
            <Box sx={{margin:'34px -34px'}}>
            <img src={errow} alt=""  />
            </Box>
        </Grid>
        <Grid item md={2}>
        <Box sx={{height:'5rem', width:'5rem', background:'#372839',borderRadius:'4rem' ,position:'relative' ,marginLeft:'44px'}}>
                <img src={nft} alt="" style={{position:'absolute', left:'20px',top:'19px'}}/>
            </Box>
            <Typography  sx={{fontWeight:'600', fontSize:'24px', color:'#FFCE4E', marginTop:'15px'}}> Add Your NFTs</Typography>
        </Grid>
        <Grid item md={1}> 
            <Box style={{margin:'34px -34px'}}>
            <img src={errow} alt=""  />
            </Box>
        </Grid>
        <Grid item md={2}>
        <Box sx={{height:'5rem', width:'5rem', background:'#372839',borderRadius:'4rem' ,position:'relative',marginLeft:'44px'}}>
                <img src={sale} alt="" style={{position:'absolute', left:'20px',top:'19px'}}/>
                <img src={sale1} alt="" style={{position:'absolute', left:'30px',top:'42px', height:'8px',width:'4px'}}/>
                <img src={sale1} alt="" style={{position:'absolute', left:'36.5px',top:'38px', height:'12px',width:'4px'}}/>
                <img src={sale1} alt="" style={{position:'absolute', left:'43px',top:'32px', height:'18px',width:'4px'}}/>
            </Box>
            <Typography  sx={{fontWeight:'600', fontSize:'24px', color:'#FFCE4E', marginTop:'15px'}}> List Them For Sale</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default WorkProcess;
