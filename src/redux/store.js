import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { currentItemReducer } from "./reducers/curentItemReducer";
import { resultReducer } from "./reducers/resultReducer";
import { suggestionReducer } from "./reducers/suggestionsReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducer = combineReducers({
  result: resultReducer,
  suggestions: suggestionReducer,
  currentItem: currentItemReducer,
});

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);
