import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ResultComponent from "./pages/result/ResultComponent";
import DetailComponent from "./pages/detail/DetailComponent";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/results" component={ResultComponent} />
            <Route path="/details/:itemId" component={DetailComponent} />
            <Redirect from="/" to="/results" />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
