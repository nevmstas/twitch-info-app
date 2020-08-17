// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, Global, css } from "@emotion/core";
import React, { useEffect } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

import { global, page } from "./styles/base/base";
import { header } from "./styles/layout/header";
import { main } from "./styles/layout/main";

import { GameList } from "./components/GameList";
import { ChartStats } from "./components/ChartStats";
import { Navigation } from "./components/navbar/Navigation";

import { useDispatch, useSelector } from "react-redux";
import { fetchGames } from "./redux/actions";

import { RootState } from "./redux/rootReducer";

function App() {
  const dispatch = useDispatch();
  const games = useSelector((state: RootState) => state.twitchGames.games);

  useEffect(() => {
    dispatch(fetchGames());
  }, []);

  return (
    <Router>
      <Global styles={global} />
      {/* <header css={header}>Twitch info</header> */}
      <Navigation />
      <div css={page}>
        <main css={main}>
          <Switch>
            <Route path="/" exact component={GameList}>
              <GameList games={games} />
            </Route>
            <Route path="/charts">
              <ChartStats />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
