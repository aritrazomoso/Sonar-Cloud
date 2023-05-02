import React from "react";
import { Grid } from "@mui/material";
import LeftNavBar from "../../organisms/LeftNavbar";

interface DashBoardLayoutPropType {
  children: JSX.Element[];
}

function DashBoardLayout({ children }: DashBoardLayoutPropType) {
  return (
    <div>
      <Grid
        sx={{
          height: "100%",
          width: "100%",
          backgroundColor: "#19181C",
        }}
        container
        gap={7}
      >
        <Grid item xs={1.8}>
          <LeftNavBar />
        </Grid>
        <Grid item xs={9}>
          <Grid container direction="column" rowGap={2}>
            {children}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default DashBoardLayout;
