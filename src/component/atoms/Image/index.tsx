import React from "react";

interface ImageProps {
  src: string;
  alt: string;
  height: number;
  width: number;
  style: any;
}

const ImageComponent = ({ src, alt, ...props }: ImageProps) => {
  return <img src={src} alt={alt} {...props} />;
};

export default ImageComponent;
