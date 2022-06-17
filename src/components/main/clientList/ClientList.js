import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";
import image1 from "../../../images/Vector.png";
import image2 from "../../../images/Vector-1.png";
import logo1 from "../../../images/logo1.png";
import logo11 from "../../../images/logo1.1.png";
import logo12 from "../../../images/logo1.2.png";
import { Typography } from "@mui/material";
import logo2 from "../../../images/logo2.png";
import logo21 from "../../../images/logo21.png";
import clientlist from '../../details/Details';
import { CoinBase } from "./ClientListStyle";

function ClientList(props) {
  return (
    <Grid container sx={{ color: "white", paddingY: "5rem" }}>
      <Grid item lg={3} md={6} sm={6} xs={12} >
        <CoinBase sx={{}}>
        <img src={image1} alt="" />
        </CoinBase> 
      </Grid>
      <Grid item lg={3}  md={6} sm={6} xs={12} >
        <img src={image2} alt="" style={{}}/>
      </Grid>
      <Grid item lg={3} md={6} sm={6} xs={12}>
        <Box sx={{ display: "flex", margin:'1px 55px' }}>
          <Box sx={{ position: "relative" }}>
            <Box sx={{ position: "absolute", top: "-8px", left: "5px" }}>
              <img
                src={logo1}
                alt=""
                sx={{
                  Width: "25.07px",
                  Height: "17.23px",
                  position: "absolute",
                  top: "-1px",
                  left: "0px",
                }}
              />
            </Box>
            <Box sx={{ display: "flex" }}>
              <Box>
                <img
                  src={logo11}
                  alt=""
                  sx={{ Width: "6.54px", Height: "6.54px" }}
                />
              </Box>
              <Box sx={{ margin: "0 4px" }}>
                <img
                  src={logo11}
                  alt=""
                  style={{ Width: "6.54px", Height: "6.54px" }}
                />
              </Box>
              <Box>
                <img
                  src={logo11}
                  alt=""
                  sx={{ Width: "6.54px", Height: "6.54px" }}
                />
              </Box>
            </Box>
            <Box sx={{ position: "absolute", top: "13px", left: "5px" }}>
              <img
                src={logo12}
                alt=""
                style={{ Width: "25.08px", Height: "17.23px" }}
              />
            </Box>
          </Box>
          <Typography
            sx={{ margin: "-15px 1px", fontWeight: "900", fontSize: "2.3rem" }}
          >
            {" "}
            BINANCE
          </Typography>
        </Box>
      </Grid>
      <Grid item lg={3} md={6} sm={6} xs={12}>
        <Box sx={{ position: "absolute" }}>
          <Box>
            <Box>
              {" "}
              <img src={logo2} alt="" />
            </Box>
            <Box sx={{ position: "absolute", top: "1px", left: "10px" }}>
              {" "}
              <img src={logo21} alt="" />
            </Box>
          </Box>
          <Typography
            sx={{ fontWeight: "900", fontSize: "2.3rem", margin: "-43px 45px" }}
          >
            BitMAX
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default ClientList;
