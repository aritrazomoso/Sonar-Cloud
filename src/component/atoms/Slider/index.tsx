import { Slider } from "@mui/material";
import React from "react";

interface SliderComponentPropType {
  value: number;
  defaultValue?: number;
  disabled?: boolean;
  size?: "small" | "medium";
  min?: number;
  max?: number;
  valueLabelDisplay?: "auto" | "off" | "on";
  step?: number;
}

const SliderComponent = (props: SliderComponentPropType) => {
  return <Slider {...props} />;
};
SliderComponent.defaltProps = {
  defaultValue: 10,
  disabled: false,
  size: "medium",
  min: 0,
  max: 100,
  valueLabelDisplay: "off",
  step: 10,
};
export default SliderComponent;
