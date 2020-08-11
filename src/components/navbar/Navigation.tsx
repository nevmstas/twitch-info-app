// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import { navigation } from "../../styles/layout/navigation";

export const Navigation = () => {
  return (
    <nav css={navigation}>
      <div>
        <img src="https://cdn0.iconfinder.com/data/icons/social-network-7/50/16-512.png"></img>
      </div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Charts</a>
        </li>
        <li>
          <a href="#">Contacts</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
    </nav>
  );
};
