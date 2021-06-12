import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { currentItemReducer } from "./reducers/curentItemReducer";
import { resultReducer } from "./reducers/resultReducer";
import { suggestionReducer } from "./reducers/suggestionsReducer";
import rootSaga from "./sagas";
import { counterReducer } from "./reducers/counterReducer";
import { reducer as formReducer } from 'redux-form';

/* Creating a saga middleware */
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const middlewares = [thunk, sagaMiddleware];

/* Reducers */
const reducer = combineReducers({
  result: resultReducer,
  suggestions: suggestionReducer,
  currentItem: currentItemReducer,
  counter: counterReducer,
  form: formReducer,
});

/* Creating a store */
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middlewares)),
);
sagaMiddleware.run(rootSaga);

export { store };
