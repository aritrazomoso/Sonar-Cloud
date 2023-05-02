import React from "react";
import { SxProps } from "@mui/material";
import Button from "@mui/material/Button";

export interface ButtonPropsType {
  label: string;
  variant?: "text" | "contained" | "outlined";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  color?: "secondary" | "success" | "error" | "primary";
  onClick?: () => void;
  style?: SxProps;
}

const TextButton = ({ label, style, ...props }: ButtonPropsType) => {
  return (
    <>
      <Button sx={style} {...props}>
        {label}{" "}
      </Button>
    </>
  );
};
TextButton.defaltProps = {
  disable: false,
  color: "primary",
};

export default TextButton;
