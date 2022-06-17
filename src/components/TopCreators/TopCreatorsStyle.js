import { Box, styled } from "@mui/material";


export const Circle = styled(Box)(({theme})=>({
    background: "#E03054",
    height: "6rem",
    width: "6rem",
    borderRadius: "50px",
    position: "absolute",
    left: "27.5rem",
    top: "1.2rem",
    zIndex: 2,
    // [theme.breakpoints.between('lg','xl')]: {
    //     left:'23rem'
    // },
    [theme.breakpoints.between('md','lg')]: {
        left:'13.6rem'
    },
    [theme.breakpoints.between('sm','md')]: {
        left:'4.2rem'
    }
}));