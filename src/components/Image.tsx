import React from "react";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}
export default ({ ...props }: ImageProps) => {
  return <img {...props} />;
};