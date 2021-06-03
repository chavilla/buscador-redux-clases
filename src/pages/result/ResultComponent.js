import { Component } from "react";
import { connect } from "react-redux";
import ResultTemplate from "./ResultTemplate";

class ResultComponent extends Component {
  render() {
    const { suggestions } = this.props;
    
    return <ResultTemplate suggestions={suggestions} />;
  }
}

// Access to reducers
const mapStateToProps = (state) => {
  return {
    suggestions: state.suggestions,
  };
};

// connectiong to store. return a function
/* const connectToStore = connect(mapStateToProps); */

// connecting the component. Return the connectedComponent
/* const ConnectedComponent = connectToStore(ResultComponent); */

export default connect(mapStateToProps)(ResultComponent);
