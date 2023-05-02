import { Avatar } from "@mui/material";
import React from "react";

interface AvtarProps {
  src?: string;
  variant?: "circular" | "rounded" | "square";
  alt: string;
  width?: string;
  height?: string;
}

const AvtarComponent = ({ height, width, ...props }: AvtarProps) => {
  return <Avatar {...props} sx={{ height, width }} />;
};
AvtarComponent.defaultProps = {
  height: "20px",
  width: "20px",
};
export default AvtarComponent;
