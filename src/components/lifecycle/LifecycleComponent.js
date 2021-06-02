import { Component } from "react";
import { getAllUsers } from "../../helpers/getUsers";
import LifecycleTemplate from "./LifecycleTemplate";

export default class LifecycleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Ciclo de vida de Componentes",
      users: [],
      users_stored: [],
    };
    this.addUser = this.addUser.bind(this);
    this.userAddValidation = this.userAddValidation.bind(this);
  }

  //Subcripcion to rest api
  componentDidMount() {
    getAllUsers()
      .then((res) => {
        setTimeout(() => {
          this.setState({
            users: res,
          });
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
      });
  } // end

  addUser(user) {
    let is_stored = this.userAddValidation(user);

    if (is_stored) {
      alert("Este usuario ya ha sido seleccionado");
      return;
    } else {
      this.setState({
        users_stored: [...this.state.users_stored, user],
      });
    }
  }

  userAddValidation(user) {
    return this.state.users_stored.find((u) => u.id === user.id);
  }

  render() {
    return (
      <LifecycleTemplate
        title={this.state.title}
        users={this.state.users}
        users_stored={this.state.users_stored}
        addUser={this.addUser}
      />
    );
  }
}
