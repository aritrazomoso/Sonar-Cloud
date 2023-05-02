import { Box, Grid } from "@mui/material";
import React from "react";
import SeederLogoWithText from "../../molecules/SeederLogoWithText";
import LeftNavElement from "../../molecules/LeftNavElement";

const LeftNavBar = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#201F24",
        width: "100%",
        padding: "0px 20px",
        paddingTop: "40px",
        overflow: "hidden",
        height: "100vh",
      }}
    >
      <Grid
        sx={{
          height: "100%",
        }}
        container
        direction="column"
      >
        <Grid item xs={2}>
          <SeederLogoWithText />
        </Grid>
        <Grid item xs={8}>
          <LeftNavElement name="home" content="Home" marginBottom=".3rem" />
          <LeftNavElement
            name="coin"
            content="Cash Accleration"
            active={true}
          />
        </Grid>
        <Grid item xs={1} alignItems="flex-end">
          <LeftNavElement name="flash" content="Watch how to" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LeftNavBar;
