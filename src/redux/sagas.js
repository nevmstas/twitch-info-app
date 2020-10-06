import {
  FETCH_GAMES,
  SHOW_LOADER,
  HIDE_LOADER,
  SET_GAMES,
} from "../redux/types";
import { all, call, put, takeLatest } from "redux-saga/effects";
import ApiService from "../services/api";

const apiService = new ApiService();

function* fetchGames(action) {
  try {
    yield put({ type: SHOW_LOADER });
    const games = yield call(apiService.getGames);
    yield put({ type: SET_GAMES, payload: games.top });
    yield put({ type: HIDE_LOADER });
  } catch (e) {
    yield console.log(e);
  }
}

function* sagaWatcher() {
  yield takeLatest(FETCH_GAMES, fetchGames);
}

function* rootSaga() {
  yield all([sagaWatcher()]);
}

export default rootSaga;
