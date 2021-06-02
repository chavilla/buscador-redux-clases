import { Component } from "react";
import { connect } from "react-redux";
import ResultTemplate from "./ResultTemplate";

class ResultComponent extends Component {
  render() {
    const { suggestions } = this.props;

    console.log(this.props);

    return <ResultTemplate suggestions={suggestions} />;
  }
}

// Access to reducers
const mapStateToProps = (state) => {
  return {
    suggestions: state.suggestions,
  };
};

export default connect(mapStateToProps)(ResultComponent);
