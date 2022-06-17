import { createTheme, useMediaQuery } from '@mui/material';
import React from 'react';
import Header from './Header';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';

const Headerindex = () => {
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
      
    const matches = useMediaQuery(theme.breakpoints.down('lg'))
    return (
        <>
        {
            matches ? <HeaderMobile /> : <Header />
        }
        </>
    );
};

export default Headerindex;