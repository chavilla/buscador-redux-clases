import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { currentItemReducer } from "./reducers/curentItemReducer";
import { resultReducer } from "./reducers/resultReducer";
import { suggestionReducer } from "./reducers/suggestionsReducer";
import rootSaga from "./sagas";
import { counterReducer } from "./reducers/counterReducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { reducer as formReducer } from 'redux-form';

/* Creating a saga middleware */
const sagaMiddleware = createSagaMiddleware();

/* redux persiste config */
const persistConfig = {
  key: 'root',
  storage,
}

/* Middlewares */
const middlewares = [thunk, sagaMiddleware];

/* Reducers */
const reducer = combineReducers({
  result: resultReducer,
  suggestions: suggestionReducer,
  currentItem: currentItemReducer,
  counter: counterReducer,
  form: formReducer,
});

/* Creating  persistenc */
const persistedReducer = persistReducer(persistConfig, reducer);

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

/* Creating a store */
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middlewares)),
);

/* persist store */
let persistor = persistStore(store);

/* last step */
sagaMiddleware.run(rootSaga);

export { store, persistor };
