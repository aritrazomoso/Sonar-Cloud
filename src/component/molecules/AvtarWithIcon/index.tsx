import { Stack } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import React from "react";
import AvtarComponent from "../../atoms/Avtar";
import theme from "../../../themes";

const AvtarWithIcon = () => {
  return (
    <Stack direction="row" gap={1}>
      <AvtarComponent
        src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80"
        alt="avtarIcon"
        height="40px"
        width="40px"
      />
      <ArrowDropDownIcon
        sx={{
          color: theme.palette.gammaIconLow.main,
        }}
      />
    </Stack>
  );
};

export default AvtarWithIcon;
