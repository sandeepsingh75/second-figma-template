import { Button } from "@mui/material";
import { createTheme, styled } from "@mui/material/styles";



export const SubscribeButton = styled(Button)(({theme})=>({
    color:'#251928', background:'#E7B226', padding:'1rem',
    [theme.breakpoints.up('sm')]:{
        margin:'3rem'
    },
    [theme.breakpoints.up('md')]:{
        margin:'0rem'
    }
}))