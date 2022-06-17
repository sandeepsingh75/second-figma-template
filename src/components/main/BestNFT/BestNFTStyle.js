import { Box, Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const GridContainer = styled(Grid)(({theme}) => ({
    paddingY:'3rem',
}));

export const Explore = styled(Typography)(({theme}) => ({
    color:'white' , fontSize:'5rem'
}));

export const SellContainer = styled(Box)(({theme}) => ({
    display:'flex'
}));

export const Sell = styled(Typography)(({theme}) => ({
    color:'white', fontSize:'5rem'
}));

export const Best = styled(Typography)(({theme}) => ({
    color:'#FFCE4E', fontSize:'5rem'
}));

export const Nft = styled(Typography)(({theme}) => ({
    color:'#FFCE4E', fontSize:'5rem'
}));

export const ExploreButton = styled(Typography)(({theme}) => ({
    background:'#FFCE4E',height: '4rem', fontWeight:'bold' ,width: '15rem', color:'black'
}));

export const CreateButton = styled(Button)(({theme}) => ({
    background:'rgba(233, 215, 167, 0.1)',border: '1px solid #FFCE4E', color:'white', fontWeight:'bold',height: '4rem' ,width: '15rem' ,margin: '3rem'
}));