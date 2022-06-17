import { Typography } from '@mui/material';
import { CardMedia } from '@mui/material';
import { CardContent } from '@mui/material';
import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import React from 'react';
import cardimage1 from '../../../images/Fancy Plants Solo Background.png'
import cardimage2 from '../../../images/Spooky Stickers Chocolate 2.png'
import cardimage3 from '../../../images/unsplash_0_8gAoFrzbw.png'
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import { CardActions } from '@mui/material';
import './BestNFTCard.css';



function BestNFTBidCard(props) {
    return (
       
    <div className='main'>
        <div style={{position:'relative',}}>
            <img src={cardimage3} alt="" className='image' />
            <img src={cardimage2} alt="chocolate" style={{    position: 'absolute',left: '19rem',top: '4.5rem',height: '6rem',width: '8rem'}} />
            <img src={cardimage1} alt="background"  style={{    position: 'absolute',top: '10rem',left: '15rem',height: '17rem'}}/>
            <img src={cardimage1} alt="background"  style={{position: 'absolute',top: '8rem',left: '0rem',height: '20rem', width:'15rem'}}/>
            
            <div style={{display: 'flex',background: 'linear-gradient(92.8deg, rgba(255, 137, 61, 0.09) -52.37%, rgba(250, 250, 250, 0.9) 137.41%)',opacity: '0.95',boxShadow: '0px 4px 30px rgb(0 0 0 / 12%)',width: '27rem',height: '6rem',marginLeft: '1.5rem',position: 'absolute',top: '1rem'}}>
               <div style={{marginLeft:'1rem'}}>
               <h5 style={{fontWeight: '500',fontSize: '18px',lineHeight: '0px',letterSpacing: '0.08em',textTransform: 'capitalize',color: '#E4DEE7'}}>Current Bid</h5>
                <h3 style={{fontSize: '32px',lineHeight: '0px',color: '#FFFFFF'}}>0.99 ETH</h3>
               </div>
               <div style={{marginLeft:'11rem'}}>
                <h5 style={{fontWeight: '500',fontSize: '18px',lineHeight: '0px',letterSpacing: '0.08em',textTransform: 'capitalize',color: '#E4DEE7'}}>Ends in</h5>
                <h3 style={{fontSize: '32px',lineHeight: '0px',color: '#FFFFFF'}}>25 hrs</h3>
               </div>
            </div>
        </div>
        <div className='textContainer' >
           <div className='firstColumn'>
           <h2 className='artist'> Artist </h2>
            <h5 className='startBid'> @wzard </h5>
           </div>
           <div className='secondColumn'>
            <button className='startButton'> Start bid</button>
           </div>
        </div>
    </div>
        );
}

export default BestNFTBidCard;