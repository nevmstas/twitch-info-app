// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, Global, css } from "@emotion/core";
import React from "react";

import "./App.css";

import { global, page } from "./styles/base/base";
import { header } from "./styles/layout/header";
import { main } from "./styles/layout/main";

import { GameList } from "./components/GameList";
import { Navigation } from "./components/navbar/Navigation";
function App() {
  return (
    <React.Fragment>
      <Global styles={global} />
      {/* <header css={header}>Twitch info</header> */}
      <Navigation />
      <div css={page}>
        <main css={main}>
          <GameList />
        </main>
      </div>
    </React.Fragment>
  );
}

export default App;
