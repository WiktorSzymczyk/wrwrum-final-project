import React, {useState, useEffect, useCallback} from "react";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  placeholderImg?: string;
}

export default ({ src, placeholderImg, ...props }: ImageProps) => {
  const [imgSrc, setSrc] = useState(placeholderImg || src);
  const onLoad = useCallback(() => {
    setSrc(src);
  }, [src]);
  useEffect(() => {
    const img = new Image();
    img.src = src as string;
    img.addEventListener("load", onLoad);
    return () => {
      img.removeEventListener("load", onLoad);
    };
  }, [src, onLoad]);
  return <img {...props} alt={imgSrc} src={imgSrc} />;
};