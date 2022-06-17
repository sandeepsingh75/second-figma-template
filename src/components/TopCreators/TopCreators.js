import { Typography } from "@mui/material";
import { Avatar } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Button } from "@mui/material";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";
import { topcreators } from "../details/Details";
import { Circle } from "./TopCreatorsStyle";

const TopCreators = () => {
  return (
    <Box
      style={{
        background: `linear-gradient(179.78deg, #1C121F 9.98%, rgba(28, 18, 31, 0.21) 81.39%)`,
      }}
    >
      <Box style={{ position: "relative" }}>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Circle ></Circle>
          <Typography
            sx={{
              textAlign: "center",
              fontWeight: "700",
              fontSize: "64px",
              lineHeight: "130px",
              paddingBottom: "3rem",
              color: "#F5FBF2",
              zIndex: 4,
            }}
          >
            Top Creators
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={1}>
        {topcreators.map((creator) => (
          <Grid item md={6} xs={12}>
            <Card
              sx={{
                margin: "2rem 2rem",
                background: "#302034",
                boxShadow: "inset 2px 0px 0px #E03054",
                display: "flex",
                position: "relative",
              }}
            >
              <CardMedia>
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: "5rem", height: "5rem", margin: "25px 11px" }}
                />
              </CardMedia>
              <CardContent sx={{ display: "flex" }}>
                <Box>
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fontSize: "32px",
                      color: "#F5FBF2",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {" "}
                    {creator.name}{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "500",
                      fontSize: "24px",
                      color: "#BDAAC1",
                    }}
                  >
                    {" "}
                    {creator.bidnumber} ETH{" "}
                  </Typography>
                </Box>

                <Box sx={{ position: "absolute", left: "24rem" }}>
                  <Typography
                    sx={{
                      fontWeight: "700",
                      fontSize: "32px",
                      letterSpacing: "0.05em",
                      color: "#F5FBF2",
                    }}
                  >
                    {" "}
                    {creator.itemnumber}{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "700",
                      fontSize: "24px",
                      color: "#908294",
                    }}
                  >
                    {" "}
                    Items{" "}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box
        x={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "5rem",
        }}
      >
        <Button
          style={{
            fontWeight: "500",
            fontSize: "30px",
            letterSpacing: "0.05em",
            color: "#F5FBF2",
            background: `linear-gradient(179.78deg, #1C121F 9.98%, rgba(28, 18, 31, 0.21) 81.39%)`,
            opacity: "0.5",
            border: "1px solid #FFCE4E",
            height: "4rem",
            width: "18rem",
          }}
        >
          {" "}
          View All
        </Button>
      </Box>
    </Box>
  );
};

export default TopCreators;
