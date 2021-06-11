import { Map } from "immutable";
import counterActions from "../actions/CounterActions";
const initialState = new Map({
  value: 1,
  users: [],
  successUsers: false,
});

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case counterActions.SUCCESSUSERS:
      return state.set("users", action.users);
    case counterActions.STARTCOMPONENT:
      return state.set("users", action.users);
    default:
      return state;
  }
};
