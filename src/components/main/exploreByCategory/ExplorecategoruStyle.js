import { Box, styled } from "@mui/material";


export const Circle = styled(Box)(({theme})=>({
    background: "#8613A5",
    height: "6rem",
    width: "6rem",
    borderRadius: "50px",
    position: "absolute",
    left: "19rem",
    top: "1.3rem",
    zIndex: 2, 
    // [theme.breakpoints.between('lg','xl')]: {
    //     left:'14.4rem'
    // },
    [theme.breakpoints.between('md','lg')]: {
        left:'5.6rem'
    },
    [theme.breakpoints.between('sm','md')]: {
        left:'6.2rem'
    }
}));