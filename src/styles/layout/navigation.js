import { twitchColor, lightTwitchColor } from "../colors";
import { css } from "@emotion/core";

export const navigation = css`
  margin: 0;
  padding: 0;
  background: ${twitchColor};
  flex-direction: column;
  list-style: none;
  font-size: 5rem;
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
    margin-left: 20px;
    margin-top: 20px;
    display: block;
    text-decoration: none;
    color: white;
    transition: all 0.2s;
    &:hover {
      /* color: ${lightTwitchColor}; */
      transform: translateX(10px);
      text-decoration-line: 1px;
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
