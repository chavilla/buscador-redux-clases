import React from "react";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react';
/*
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AppBarComponent from "./components/appBar/AppBarComponent";
import ResultComponent from "./pages/result/ResultComponent";
import DetailComponent from "./pages/detail/DetailComponent";
import { CssBaseline } from "@material-ui/core";
import LifecycleComponent from "./components/lifecycle/LifecycleComponent"; */
/* import CounterComponent from "./components/counter/CounterComponent"; */
import FormReduxComp from "./components/forms/FormReduxComp";

class App extends React.Component {
  render() {
    return (
     /*  <Provider store={store}>
        <CssBaseline />
        <AppBarComponent />
        <Router>
          <Switch>
            <Route path="/results" component={ResultComponent} />
            <Route path="/details/:itemId" component={DetailComponent} />
            <Redirect from="/" to="/results" />
          </Switch>
        </Router>
      </Provider> */
      <Provider store={ store }  >
        <PersistGate loading={ null } persistor={ persistor } >
          <FormReduxComp />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
