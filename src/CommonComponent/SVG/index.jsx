import { SvgPath } from "../../Constant";
import React from "react";



const SVG = ({ iconId, className, style }) => {
  return (
    <svg className={className} style={style}>
      <use href={`${SvgPath}/icon-sprite.svg#${iconId}`}></use>
    </svg>
  );
};

export default SVG;
