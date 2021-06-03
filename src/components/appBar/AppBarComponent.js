import { Component } from "react";
import { connect } from "react-redux";
import { findSuggestions } from "../../redux/actions/findSuggestions";
import AppBarTemplate from "./AppBarTemplate";

class AppBarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      suggestions: [],
    };

    this.onChangeText = this.onChangeText.bind(this);
    this.onChangeSelection = this.onChangeText.bind(this);
  }

  onChangeText(text) {
    this.setState({ text });
    this.props.findSuggestions(text);
  }

  onchangeSelection(text) {}

  render() {
    const { suggestions } = this.props;

    return (
      <AppBarTemplate
        text={this.state.text}
        suggestions={suggestions}
        onChangeText={this.onChangeText}
        onChangeSelection={this.onchangeSelection}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    suggestions: state.suggestions,
  };
};

const mapDispatchToProps = {
  findSuggestions,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppBarComponent);
