// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

import { Link } from "react-router-dom";
import { navigation } from "../../styles/layout/navigation";

export const Navigation = () => {
  return (
    <nav css={navigation}>
      <div>
        <img src="https://cdn0.iconfinder.com/data/icons/social-network-7/50/16-512.png"></img>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/charts">Charts</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};
