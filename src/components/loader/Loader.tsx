// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css, keyframes } from "@emotion/core";

const bounce = keyframes`
    0% {
        top: 36px;
        left: 36px;
        width: 0;
        height: 0;
        opacity: 1;
    }
    100% {
        top: 0px;
        left: 0px;
        width: 72px;
        height: 72px;
        opacity: 0;
    }
`;

const loaderStyle = css`
  top: 50%;
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  div {
    position: absolute;
    border: 4px solid #fff;
    opacity: 1;
    border-radius: 50%;
    animation: ${bounce} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;

    &:nth-of-type(2) {
      animation-delay: -0.5s;
    }
  }
`;

export const Loader = () => {
  return (
    <div css={loaderStyle}>
      <div></div>
      <div></div>
    </div>
  );
};
