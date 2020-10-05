// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, Global } from "@emotion/core";
import { useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import { global, page } from "./styles/base/base";
import { main } from "./styles/layout/main";
import { GameList } from "./components/GameList";
import { ChartStats } from "./components/ChartStats";
import { Navigation } from "./components/navbar/Navigation";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/rootReducer";
import { FETCH_GAMES } from "./redux/types";

function App() {
  const dispatch = useDispatch();
  const { games } = useSelector(
    (state: RootState) => state.twitchGames,
    shallowEqual
  );
  const { isLoading } = useSelector(
    (state: RootState) => state.app,
    shallowEqual
  );

  useEffect(() => {
    dispatch({ type: FETCH_GAMES });
  }, [dispatch]);

  return (
    <Router>
      <Global styles={global} />
      <Navigation />
      <div css={page}>
        <main css={main}>
          <Switch>
            <Route path="/" exact component={GameList}>
              <GameList games={games} isLoad={isLoading} />
            </Route>
            <Route path="/charts">
              <ChartStats games={games} isLoad={isLoading} />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
