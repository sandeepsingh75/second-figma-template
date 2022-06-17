import { AppBar, Box } from "@mui/material";
import { styled } from "@mui/material/styles";


export const Main =  styled(Box)(({theme})=>({
    flexGrow: 1,
    zIndex:5
}));

export const Appbar =  styled(AppBar)(({theme})=>({
    background: 'rgba(79, 70, 78, 0.45)'
}));

export const ImageBox =  styled(Box)(({theme})=>({
    flexGrow: 1
}));


