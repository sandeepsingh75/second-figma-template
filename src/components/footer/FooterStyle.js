



import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FooterContainer = styled(Grid)(({theme}) => ({
    padding:'8rem 5rem',background: '#251928'
}));

export const FooterImageContainer = styled(Box)(({theme}) => ({
    textAlign:'center'
}));

export const FooterFirstPara = styled(Typography)(({theme}) => ({
    color:'#96839B', fontWeight:'500',fontSize:'20px', lineHeight:'36px'
}));

export const MedeaLogoContainer = styled(Box)(({theme}) => ({
    display:'flex', margin:'2rem 0'
}));

export const Logo = styled(Box)(({theme}) => ({
    margin:'10px'
}));

export const SecondPara = styled(Box)(({theme}) => ({
    color:'#96839B', fontWeight:'400',fontSize:'20px', lineHeight:'36px'
}));

export const AboutUsContainer = styled(Grid)(({theme}) => ({
    display:'flex', flexDirection:'column'
}));

export const AboutUs = styled(Typography)(({theme}) => ({
    color:'#F5FBF2', fontWeight:'700',fontSize:'24px', lineHeight:'35px', textTransform:'capitalize'
}));

export const AboutUsOptions = styled(Typography)(({theme}) => ({
    color: '#96839B', fontWeight:'500',fontSize:'20px', lineHeight:'50px', textTransform:'capitalize'
}));

export const SupportContainer = styled(Grid)(({theme}) => ({
    display:'flex', flexDirection:'column'
}));

export const Support = styled(Typography)(({theme}) => ({
    color:'#F5FBF2', fontWeight:'700',fontSize:'24px', lineHeight:'35px', textTransform:'capitalize'
}));

export const SupportOption = styled(Typography)(({theme}) => ({
    color:'#96839B', fontWeight:'500',fontSize:'20px', lineHeight:'50px', textTransform:'capitalize'
}));