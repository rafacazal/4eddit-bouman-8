import React, { Component } from "react";
import { connect } from "react-redux";
import { createUser } from "../../actions/user"


const registerForm = [
  {
    name: "username",
    type: "text",
    label: "Nome de Usuário",
    required: true,
    pattern: "[A-Za-z0-9]"
  },
  {
    name: "email",
    type: "email",
    label: "Email - Admin",
    required: true,
    pattern: "[A-Za-^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$]{3,}"
  },
  {
    name: "password",
    type: "password",
    label: "Senha",
    required: true,
  }
]

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {},
    };
  }

  handleFieldChange = event => {
    const { name, value } = event.target;

    this.setState({ form: { ...this.state.form, [name]: value } });
  };

  sendRegisterData = (event) => {
    event.preventDefault()
    const { email, password, username} = this.state.form
    this.props.createUser(email, password, username)
    this.setState({form: {}})
  }

  render() {
    return (
      <div>
          <form onSubmit={this.sendRegisterData}>
            {registerForm.map( input => (
              <div key={input.name}>
                <input
                onChange={this.handleFieldChange}
                name={input.name}
                type={input.type}
                label={input.label}
                value={this.state.form[input.name] || ""}
                />
              </div>
            ))}
            <button type="submit" color="primary" size="large" onClick={this.sendRegisterData}>Login</button>
          </form>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
    createUser: (email, password, username) => dispatch(createUser(email, password, username)),
})


export default connect(null, mapDispatchToProps)(RegisterPage);