import { Component } from "react";
import CounterTemplate from "./CounterTemplate";

class CounterComponent extends Component {
  // constructor method
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };

    // binding
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  // increment +1 the value
  increment() {
    if (this.state.value === 10) {
      alert("No puedes aumentar de 10");
      return;
    }
    this.setState({
      value: this.state.value + 1,
    });
  }

  // decrement -1 the value
  decrement() {
    if (this.state.value === 1) {
      alert("No puedes disminuir de 1");
      return;
    }

    this.setState((state) => ({
      value: state.value - 1,
    }));
  }

  render() {
    return (
      <CounterTemplate
        state={this.state}
        increment={this.increment}
        decrement={this.decrement}
      />
    );
  }
}

export default CounterComponent;
