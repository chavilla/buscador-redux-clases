import axios from "axios";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import counterActions from "../../redux/actions/CounterActions";

async function fetchUserApi() {
  try {
    const response = await axios.get("https://reqres.in/api/users");
    const users = await response.data;
    if (users.data) {
      return users.data;
    }
  } catch (error) {
    console.log(error);
  }
}

// Funcion generadora
export function* getUsers() {
    // takeLatest le dice que esté a la espera
  yield takeLatest(counterActions.STARTCOMPONENT, function* () {
    try {
      const users = yield call(fetchUserApi);
      yield put({
        type: counterActions.SUCCESSUSERS,
        users,
      });
    } catch (error) {
      console.log("error", error);
    }
  });
}

/* watcher */
export default function* authSaga() {
  yield all([fork(getUsers)]);
}
