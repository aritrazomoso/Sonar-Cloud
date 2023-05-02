import React from "react";
import { Stack } from "@mui/material";
import IconComponent from "../../atoms/Icon";
import TypographyComponent from "../../atoms/Typrography";

const SeederLogoWithText = () => {
  return (
    <Stack direction="row" spacing={1}>
      <IconComponent name="seeder" height="30px" width="28px" />
      <TypographyComponent varient="heading1" color="#E8E7F0">
        Seeder
      </TypographyComponent>
    </Stack>
  );
};

export default SeederLogoWithText;
