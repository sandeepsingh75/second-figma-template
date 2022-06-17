import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";
import Slider from "react-slick";

import { Card } from "@mui/material";
import { CardMedia } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardActions } from "@mui/material";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Avatar } from "@mui/material";
import dil from "../../../images/live auctions/Vector.png";
import { category } from "../../details/Details";
import { CategoryRounded } from "@mui/icons-material";
import { Circle } from "./ExplorecategoruStyle";

const Time = styled(Typography)(({ theme }) => ({
  background:
    "linear-gradient(125.33deg, #8613A5 18.61%, rgba(250, 250, 250, 0.65) 137.4%)",
  width: "5rem",
  opacity: "0.95",
  boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.12)",
  color: "white",
  position: "absolute",
  top: "13rem",
  fontWeight: "500",
  padding: "3px 10px",
}));

const ExploreCategory = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box
      sx={{
        color: "white",
        background: `linear-gradient(336.61deg, #251928 16.25%, rgba(37, 25, 40, 0) 91.6%)`,
        position: "relative",
      }}
    >

<Box style={{position:'relative'}}>
<Box style={{display:'flex', alignItems:'center', justifyContent:'center'}}>

      <Circle>     </Circle>
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: "700",
          fontSize: "64px",
          lineHeight: "130px",
          paddingBottom: "3rem",
          zIndex: 4,
        }}
      >
       Explore By Categories
      </Typography>
</Box>
</Box>


      <div>
        <Slider {...settings}>
          {
            category.map((category)=>(
              <div>
            <Card
              sx={{
                background: "#3D2942",
                maxWidth: 280,
                padding: "1rem",
                position: "relative",
              }}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="220"
                image={category.Image}
              />
              <Time sx={{}}> {category.time} </Time>
              <CardContent sx={{ padding: "5px 0" }}>
                <Box sx={{ display: "flex" }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: "35px", height: "35px", marginTop: "5px" }}
                  />
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: "500",
                        fontSize: "22px",
                        color: "#F5FBF2",
                      }}
                    >
                    {category.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "500",
                        fontSize: "15px",
                        lineHeight: "0.5",
                        color: "#BDAAC1",
                        margin: "2px 5px",
                      }}
                    >
                     {category.subtitle}
                    </Typography>
                  </Box>
                  <Box style={{ marginTop: "5px", color: "#BDAAC1" }}>
                    <img
                      src={category.like}
                      alt=""
                      style={{ position: "absolute", left: "15rem" }}
                    />
                    <Typography style={{ position: "absolute", left: "17rem" }}>
                      {category.likenumber}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ marginY: "1rem", position: "relative" }}>
                  <Typography
                    sx={{
                      fontWeight: "500",
                      fontSize: "15px",
                      color: "#C6BFC8",
                    }}
                  >
                    {category.bid}
                  </Typography>
                  <Typography
                    style={{
                      position: "absolute",
                      left: "11rem",
                      top: "0",
                      fontWeight: "500",
                      fontSize: "20px",
                      color: "#F5FBF2",
                    }}
                  >
                    {category.bidnumber} ETH
                  </Typography>
                </Box>
              </CardContent>
              <CardActions>
                <Button
                  size="large"
                  sx={{
                    background: " rgba(233, 215, 167, 0.1)",
                    border: "1px solid #FDE8B3",
                    color: "#FFFFFF",
                    width: "17rem",
                  }}
                >
                 {category.button}
                </Button>
              </CardActions>
            </Card>
          </div>
            ))
          }
        </Slider>
      </div>
      <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', padding:'5rem'}}>
      <Button sx={{fontWeight: '500',fontSize: '30px', background: `linear-gradient(336.61deg, #251928 16.25%, rgba(37, 25, 40, 0) 91.6%)`, color:'#F5FBF2',border: '1px solid #FFCE4E',height: '3rem',width: '18rem'}}> View All </Button>
    </Box>
      </Box>
  );
};

export default ExploreCategory;
