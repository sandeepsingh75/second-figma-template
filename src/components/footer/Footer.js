import { Button } from '@mui/material';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import React from 'react';
import image1 from '../../images/footer/image.png';
import image2 from '../../images/footer/Vector.png';
import image3 from '../../images/footer/Vector (1).png';
import image4 from '../../images/footer/Vector (2).png';
import image5 from '../../images/footer/Vector (3).png';
import { footer } from '../details/Details';
import { AboutUs, AboutUsContainer, AboutUsOptions, FooterContainer, FooterFirstPara, FooterImageContainer, Logo, MedeaLogoContainer, SecondPara, Support, SupportOption } from './FooterStyle';

function Footer(props) {
    return (
        <FooterContainer container >
            <Grid item lg={3} md={12} sm={12} xs={12}>
                <FooterImageContainer >
                <img src={image1} alt="logo"  />
                </FooterImageContainer>
            </Grid>
            <Grid item md={4} xs={12}>
              <FooterFirstPara >
             {footer.secondColumnPara1first} <br /> {footer.secondColumnPara1secondline} <br /> {footer.secondColumnPara1third}           
              </FooterFirstPara>
               <MedeaLogoContainer >
                <Logo >  <img src={image2} alt="youtube"  /> </Logo>
                <Logo ><img src={image3} alt="twitter" /> </Logo>
                <Logo ><img src={image4} alt="facebook" /></Logo>
                <Logo ><img src={image5} alt="google" /></Logo>
               </MedeaLogoContainer>

               <SecondPara >
               {footer.secondColumnPara2}  
               </SecondPara>
            </Grid>
            <AboutUsContainer item md={2.5} xs={6} >
                <AboutUs  > About Us</AboutUs>
                <AboutUsOptions > About NFTs</AboutUsOptions>
                <AboutUsOptions > Live Auctions</AboutUsOptions>
                <AboutUsOptions > Nft Blog</AboutUsOptions>
                <AboutUsOptions > Activity</AboutUsOptions>
            </AboutUsContainer>
            <Grid item md={2.5} xs={6}>
            <Support > Support </Support>
            <SupportOption > Help & Support </SupportOption>
            <SupportOption > Item Details </SupportOption>
            <SupportOption > author Profile </SupportOption>
            <SupportOption > Collection </SupportOption>
            </Grid>
        </FooterContainer>
    );
}

export default Footer;