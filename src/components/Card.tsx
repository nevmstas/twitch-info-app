// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

export const cardItem = css`
  width: 280px;
  padding: 1rem;
  color: white;
  font-size: 2rem;
  margin: 2rem;
  text-align: center;
`;

const cardImg = css`
  margin-bottom: 20px;
  box-shadow: 0 0 10px black;
`;

type PropsType = {
  img: string;
  viewers: number;
  name: string;
};

function kFormatter(num: number) {
  return Math.abs(num) > 999
    ? Math.sign(num) * +(Math.abs(num) / 1000).toFixed(1) + "K"
    : Math.sign(num) * Math.abs(num);
}

export const Card: React.FC<PropsType> = ({ img, viewers, name }) => {
  return (
    <div css={cardItem}>
      <img css={cardImg} alt={name} src={img} />
      <h4>
        <b>{name}</b>
      </h4>
      <p>{kFormatter(viewers)} viewers</p>
    </div>
  );
};
