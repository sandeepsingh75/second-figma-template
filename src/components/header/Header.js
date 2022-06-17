import { Tabs } from "@mui/material";
import { Tab } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";
import image from "../../images/image.png";

// import * as React from 'react';
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Header(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid container style={{ paddingTop: "2rem", boxSizing:'border-box' }}>
      <Grid item lg={2}>
        <img src={image} alt="" /> 
        </Grid>
      <Grid item lg={7}>
        <Box sx={{ width: "100%", marginLeft: "25rem" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                label="Item One"
                style={{ color: "#FFCE4E" }}
                {...a11yProps(0)}
              />
              <Tab
                label="Item Two"
                style={{ color: "white" }}
                {...a11yProps(1)}
              />
              <Tab
                label="Item Three"
                style={{ color: "white" }}
                {...a11yProps(2)}
              />
            </Tabs>
          </Box>
          {/* <TabPanel value={value} index={0} style={{color:'white'}}>
         Item One
       </TabPanel>
       <TabPanel value={value} index={1} style={{color:'white'}}>
         Item Two
       </TabPanel>
       <TabPanel value={value} index={2} style={{color:'white'}}>
         Item Three
       </TabPanel> */}
        </Box>
      </Grid>
      <Grid item lg={2}>
        <Button
          variant="outlined"
          sx={{ color: "#FFCE4E", borderColor: "#FFCE4E" }}
        >
          Connect Wallet
        </Button>
      </Grid>
    </Grid>
  );
}

export default Header;
