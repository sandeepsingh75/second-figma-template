import { Box, styled } from "@mui/material";


export const Circle = styled(Box)(({theme})=>({
    background: " #E03054", height: "6rem", width: "6rem", borderRadius: "49px", position: "absolute",left:"21.5rem", top: "4rem", zIndex: 2, 
    // [theme.breakpoints.between('lg','xl')]: {
    //     left:'17.2rem'
    // },
    [theme.breakpoints.between('md','lg')]: {
        left:'7.6rem'
    },
    [theme.breakpoints.between('sm','md')]: {
        left:'9.2rem'
    }
}));