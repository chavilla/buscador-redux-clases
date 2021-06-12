import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field, formValueSelector, reset } from "redux-form";
import validate from "./validation/LoginFormValidation";
import { InputRender } from "./renders/inputsRender";

class FormReduxComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      car: false,
      cycle: true,
    };
  }

  componentDidMount() {
    if (this.state.car) {
      this.props.change("passengers", 5);
    } else if (this.state.cycle) {
      this.props.change("passengers", 2);
    }
  }

  handleSubmit(formValues,dispatch) {

    dispatch(reset('LoginForm'));
  }

  render() {
    const { invalid } = this.props;

    return (
      <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
        <hr />
        <div>
          <label>Email</label>
          <Field
            name="email"
            placeholder="Tu email"
            type="text"
            component={InputRender}
          />
        </div>
        <div>
          <label>Password</label>
          <Field
            name="password"
            placeholder="Tu password"
            type="password"
            component={InputRender}
          />
        </div>
        <button type="submit" disabled={invalid}>
          Login
        </button>
      </form>
    );
  }
}

FormReduxComp = reduxForm({
  form: "LoginForm",
  enableReinitialize: true,
  validate,
  keepDirtyOnReinitialize: true,
  initialValues: {
    passengers: 5,
  },
  destroyOnUnmount: false,
})(FormReduxComp);

/* Selecting the formValues */
const DTformSelector = formValueSelector("LoginForm");

const mapStateToProps = (state) => {
  const { value } = state.counter.toJS();
  return {
    value,
    email: DTformSelector(state, "email"),
  };
};

export default connect(mapStateToProps)(FormReduxComp);
