import { Component } from "react";
import { getAllUsers } from "../../helpers/getUsers";
import BodyTemplate from "./BodyTemplate";

class BodyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Lista de Usuarios",
      users: [],
      loading: true,
      usersList: [],
    };
  }

  // on init
  componentDidMount() {
    getAllUsers().then((res) => {
      this.setState({
        users: res,
        loading: false,
      });
    });
  }

  addUser(id) {
    this.usersList.push(id);
    //this.setState({ usersList: id })
  }

  render() {
    return <BodyTemplate {...this.state} addUser={ this.addUser } />;
  }
}

export default BodyComponent;
