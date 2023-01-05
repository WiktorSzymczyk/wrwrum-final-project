// Only for type definitions 
declare module "*.png"
declare module "*.jpg"
declare module "*.json"

declare module "\*.svg" {
  import React = require("react");
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}