import { Component } from "react";
import { connect } from "react-redux";
import counterActions from "../../redux/actions/CounterActions";

class CounterComponent extends Component {
  constructor(props) {
    super(props);
  }

  greeter() {
    this.props.startComponent();
  }

  render() {
    const { users } = this.props;

    return (
      <>
        <button type="button" onClick={this.greeter.bind(this)}>
          Buscar
        </button>
        <div>
          {!users || users.length === 0 ? (
            <div>No hay Usuarios</div>
          ) : (
            <div>
              <ul>
                {users.map((us) => (
                  <li key={us.id}>{us.email}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </>
    );
  }
}

// redux connection
const mapStatetoProps = (state) => {
  const { value, users } = state.counter.toJS();
  return {
    value,
    users,
  };
};

const { startComponent } = counterActions;

export default connect(mapStatetoProps, {
  startComponent,
})(CounterComponent);
