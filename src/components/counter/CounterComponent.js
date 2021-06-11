import { Component } from "react";
import { connect } from "react-redux";
import counterActions from "../../redux/actions/CounterActions";

class CounterComponent extends Component {
  // constructor method
  constructor(props) {
    super(props);
  }
  
  greeter(){
    this.props.startComponent();
  }

  render() {
    return <button
    type='button'
    onClick={ this.greeter.bind(this) }
    >Buscar</button>;
  }
}

// redux connection
const mapStatetoProps = (state) => {
  const { value } = state.counter.toJS();
  return {
    value,
  };
};

const { startComponent } = counterActions;

export default connect(mapStatetoProps, {
  startComponent
})(CounterComponent);
