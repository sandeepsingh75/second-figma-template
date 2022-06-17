import { Typography } from '@mui/material';
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import { CardActions } from '@mui/material';
import { Button } from '@mui/material';
import { Avatar } from '@mui/material';
import { CardMedia } from '@mui/material';
import { Box } from '@mui/material';
import React from 'react';
import Slider from "react-slick";
import image1 from '../../../images/polular collections/Collectionimage.png';
import image2 from '../../../images/polular collections/collectionimage1.png';
import image3 from '../../../images/polular collections/collectionimage2.png';
import { collection } from '../../details/Details';
import { Circle } from './CollectionStyle';

function Collection(props) {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <Box sx={{ color:'white', }}>
          <Box style={{position:'relative'}}>
              <Box style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            <Circle sx={{}}>
            </Circle>
     
          <Typography sx={{ fontWeight: "700",fontSize: "64px",textAlign:"center", margin:'4rem 0', zIndex:'5'}} >
            Popular Collections
          </Typography>

              </Box>
          </Box>

      <Slider {...settings}>
          {
            collection.map((collection)=>(
              <div>
          <Card
              sx={{
                background: "#3D2942",
                maxWidth: 375,
                padding: "1rem",
                position: "relative",
              }}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="220"
                image={collection.image}
              />
              
              <CardContent sx={{ padding: "5px 0" }}>
                <Box sx={{ display: "flex" }}>
                  <Avatar
                    alt="Remy Sharp"
                    src={image1}
                    sx={{ width: "35px", height: "35px", marginTop: "5px" }}
                  />
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: "500",
                        fontSize: "22px",
                        color: "#F5FBF2",
                        marginLeft:'1rem'
                      }}
                    >
                     {collection.title}
                    </Typography>
                   
                  </Box>
                  <Box style={{ marginTop: "5px", color: "#BDAAC1" }}>
                    <img
                      src=''
                      alt=""
                      style={{ position: "absolute", left: "15rem" }}
                    />
                    <Typography style={{ position: "absolute", left: "17rem" }}>
                      {collection.number}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </div>
            ))
          }
        </Slider>
        <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', padding:'5rem'}}>
        <Button sx={{color: '#F5FBF2',fontWeight: '500',fontSize: '30px', background: `linear-gradient(179.78deg, #1C121F 9.98%, rgba(28, 18, 31, 0.21) 81.39%), url(nft-art-1230x690.jpg)`, border: '1px solid #FFCE4E', width:'25rem', textAlign:'center'}}> View All</Button>
        </Box>

        </Box>
    );
}

export default Collection;