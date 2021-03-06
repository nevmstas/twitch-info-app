import { css } from "@emotion/core";
import { darkGrey } from "../colors";

export const global = css`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    font-family: "Trebuchet MS", Helvetica, sans-serif;
  }

  html {
    font-size: 70.5%;
  }

  body {
    box-sizing: border-box;
    background-color: ${darkGrey};
  }
`;

export const page = css`
  display: flex;
  margin-left: 300px;

  @media screen and (max-width: 1200px) {
    justify-content: center;
    margin-left: 0;
  }
`;
