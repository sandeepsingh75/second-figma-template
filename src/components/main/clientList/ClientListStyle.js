import { Box, styled } from "@mui/material";


export const Binance = styled(Box)(({theme})=>({

    [theme.breakpoints.down('sm')]: {

    }
}));

export const CoinBase = styled(Box)(({theme})=>({
    marginLeft:'3.5rem',
    [theme.breakpoints.down('lg')]:{
        
    }
}))