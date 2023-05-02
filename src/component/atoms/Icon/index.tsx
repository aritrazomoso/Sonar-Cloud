import React from "react";
import Google from "../../../assets/Images/icons/google.svg";
import Stripe from "../../../assets/Images/icons/stripe.svg";
import Xero from "../../../assets/Images/icons/xero.svg";
import Seeder from "../../../assets/Images/icons/seeder.svg";
import Home from "../../../assets/Images/icons/home.svg";
import Coin from "../../../assets/Images/icons/coin.svg";
import Flash from "../../../assets/Images/icons/flash.svg";
import Calender from "../../../assets/Images/icons/calender.svg";
import DocumentDownload from "../../../assets/Images/icons/docuemtDownload.svg";
import PercentageSquare from "../../../assets/Images/icons/percentageSquare.svg";
import Info from "../../../assets/Images/icons/info.svg";
import Sync from "../../../assets/Images/icons/sync.svg";
import { ReactSVG } from "react-svg";

type NameType =
  | "google"
  | "stripe"
  | "xero"
  | "seeder"
  | "home"
  | "coin"
  | "flash"
  | "calender"
  | "documentDownload"
  | "percentageSquare"
  | "info"
  | "sync";

interface IconComponentPropType {
  name: NameType;
  height?: string;
  width?: string;
  color?: string;
  style?: any;
}
function getProperIconProp(name: NameType) {
  switch (name) {
    case "google":
      return Google;
    case "stripe":
      return Stripe;
    case "xero":
      return Xero;
    case "seeder":
      return Seeder;
    case "home":
      return Home;
    case "coin":
      return Coin;
    case "flash":
      return Flash;
    case "calender":
      return Calender;
    case "documentDownload":
      return DocumentDownload;
    case "percentageSquare":
      return PercentageSquare;
    case "info":
      return Info;
    case "sync":
      return Sync;
  }
}

const IconComponent = ({ name, ...props }: IconComponentPropType) => {
  // return <img src={getProperIconProp(name)} alt={name} {...props} />;
  const icon = getProperIconProp(name) as string;
  return (
    <ReactSVG
      src={icon}
      {...props}
      style={{
        display: "inline-block",
      }}
    />
  );
};

IconComponent.defaultProps = {
  height: "16px",
  width: "16px",
};

export default IconComponent;
