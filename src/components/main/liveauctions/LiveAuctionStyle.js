import { Box, createTheme, styled } from "@mui/material";

const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });

export const Circle = styled(Box)(({theme})=>({
    background: "#8613A5", height: "5rem", width: "5rem", borderRadius: "37px", position:'absolute', left:'27rem', top:'1.5rem', zIndex:'1',
    // [theme.breakpoints.down('xl')]: {
    //     left:'27rem'
    // },
    // [theme.breakpoints.up('md')]: {
    //     left:'22.5rem'
    // },
    [theme.breakpoints.between('md','lg')]: {
        left:'13rem'
    },
    [theme.breakpoints.between('sm','md')]: {
        left:'3.6rem'
    }
}));