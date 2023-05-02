import React from "react";
import { Grid } from "@mui/material";
import AllPaymentCard from "../../component/organisms/AllPaymentsCard";
import DashBoardDetailCard from "../../component/organisms/DashBoardDetailCard";
import NewCashKickCard from "../../component/organisms/NewCashKickCard";
import DashBoardLayout from "../../component/templates/DashBoardLayout";
import DashBoardHeader from "../../component/organisms/DashBoardHeader";

const WelcomeDashBoard = () => {
  return (
    <DashBoardLayout>
      <Grid item xs={3} marginY={6}>
        <DashBoardHeader />
      </Grid>
      <Grid item xs={2}>
        <Grid container direction="row" justifyContent="space-between">
          <Grid item xs={7.1} marginRight="1rem">
            <DashBoardDetailCard />
          </Grid>
          <Grid item xs={4}>
            <NewCashKickCard />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <AllPaymentCard />
      </Grid>
      <Grid item xs={7}></Grid>
    </DashBoardLayout>
  );
};

export default WelcomeDashBoard;
