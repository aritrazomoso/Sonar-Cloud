import React from "react";
import { SxProps, Typography } from "@mui/material";

interface TypographyPropType {
  varient?:
    | "heading1"
    | "title"
    | "body1"
    | "heading2"
    | "body2"
    | "button"
    | "caption";
  children: JSX.Element | string;
  fontWeight?: "light" | "regular" | "medium" | "bold";
  fontSize?: string | number;
  color?: string;
  style?: SxProps;
}

const TypographyComponent = ({
  varient,
  style,
  children,
  ...props
}: TypographyPropType) => {
  return (
    <Typography {...props} sx={style} variant={varient}>
      {children}
    </Typography>
  );
};

export default TypographyComponent;
