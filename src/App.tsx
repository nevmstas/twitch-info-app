// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, Global, css } from "@emotion/core";
import React from "react";
import { useDispatch } from "react-redux";
import "./App.css";

import { global, page } from "./styles/base/base";
import { header } from "./styles/layout/header";
import { main } from "./styles/layout/main";
import { navigation, link } from "./styles/layout/navigation";
import { fetchGames } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(fetchGames());
  };

  return (
    <React.Fragment>
      <Global styles={global} />
      <header css={header}>Header</header>
      <div css={page}>
        <nav css={navigation}>
          <div>
            <img src=""></img>
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
          </ul>
        </nav>
        <main css={main}>
          <div>Twitch</div>
          <button onClick={handleClick}>get twitch data</button>
        </main>
      </div>
    </React.Fragment>
  );
}

export default App;
