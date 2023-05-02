import { InputAdornment, TextField } from "@mui/material";
import React from "react";

interface IconTextFieldPropType {
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  placeholder: string;
  type: "text" | "email" | "password" | "date" | "time" | "datetime-local";
  defaultValue?: string;
}
const defaltProps = {
  startIcon: undefined,
  endIcon: undefined,
  defaultValue: "",
};

const IconTextField = ({
  startIcon,
  endIcon,
  ...props
}: IconTextFieldPropType) => {
  return (
    <TextField
      {...props}
      InputProps={{
        startAdornment: startIcon ? (
          <InputAdornment position="start">{startIcon}</InputAdornment>
        ) : null,
        endAdornment: endIcon ? (
          <InputAdornment position="end">{endIcon}</InputAdornment>
        ) : null,
      }}
    />
  );
};
IconTextField.defaultProps = defaltProps;

export default IconTextField;
