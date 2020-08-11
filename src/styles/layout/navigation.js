import { twitchColor, lightTwitchColor } from "../colors";
import { css } from "@emotion/core";

export const navigation = css`
  display: flex;
  background: ${twitchColor};
  flex-direction: column;
  justify-content: space-between;
  list-style: none;
  font-size: 5rem;
  padding: 2rem;

  a {
    text-decoration: none;
    color: white;
    transition: all 0.2s;
    &:hover {
      color: ${lightTwitchColor};
    }
  }
`;

export const item = css``;

export const link = css`
  text-decoration: none;
`;
