import React, { Component } from "react";
import { connect } from "react-redux";
import { autenticateLogin } from "../../actions/user"


const loginForm = [
  {
    name: "email",
    type: "email",
    label: "Email ",
    required: true
  },
  {
    name: "password",
    type: "password",
    label: "Senha",
    required: true,
  }
]

class LoginPage extends Component {
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

  sendLoginData = (event) => {
    event.preventDefault()
    const { email, password} = this.state.form
    this.props.autenticateLogin(email, password)
  }

  render() {
    return (
      <div>
          <form onSubmit={this.sendLoginData}>
            {loginForm.map( input => (
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
            <button type="submit" color="primary" size="large" onClick={this.sendLoginData}>Login</button>
          </form>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({

  autenticateLogin: (email, password) => dispatch(autenticateLogin(email, password)),
})


export default connect(null, mapDispatchToProps)(LoginPage);
