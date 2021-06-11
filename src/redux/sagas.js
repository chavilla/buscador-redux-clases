import { all } from "redux-saga/effects";
import authSaga from "../components/counter/saga";

export default function* rootSaga() {
  yield all([authSaga()]);
}
