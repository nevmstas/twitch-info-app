// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, Global, css } from "@emotion/core";

import React from "react";
const cardStyle = css``;
type PropsType = {
  img: string;
  viewers: number;
  name: string;
};

export const Card: React.FC<PropsType> = ({ img, viewers, name }) => {
  return <div css={cardStyle}></div>;
};
