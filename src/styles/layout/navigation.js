import { twitchColor, lightTwitchColor } from "../colors";
import { css } from "@emotion/core";

export const navigation = css`
  margin: 0;
  padding: 0;
  background: ${twitchColor};
  flex-direction: column;
  list-style: none;
  font-size: 2rem;
  align-items: top;
  width: 300px;
  height: 100%;
  position: fixed;
  overflow: auto;

  @media screen and (max-width: 1200px) {
    width: 100%;
    height: auto;
    position: relative;
    text-align: center;
  }

  a {
    margin: 20px;
    padding: 10px;
    text-align: center;
    display: block;
    text-decoration: none;
    background-color: #4d1d96;
    border-radius: 5px;
    color: white;
    text-transform: uppercase;
    transition: all 0.2s;
    &:hover {
      background-color: #e2d4f7;
      color: ${twitchColor};
    }
  }

  img {
    width: 10rem;
  }
`;

export const item = css``;

export const link = css`
  text-decoration: none;
`;
