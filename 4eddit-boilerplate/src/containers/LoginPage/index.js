import React, { Component } from "react";
import { connect } from "react-redux";
import { autenticateLogin } from "../../actions/user"
import Header from '../../components/Header';
import LoginFooter from '../../components/LoginFooter'
import { RegisterButton } from '../../style/registerButton'; 
import { StyledInput, StyledButton  } from '../../style/login';
import LoginCard from "../../components/LoginCard";
import { push } from "connected-react-router";
import { routes } from "../Router/index"

const loginForm = [
  {
    name: "email",
    type: "email",
    label: "E-mail ",
    required: true,
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
    this.setState({form: {}})
  }

  render() {
    return (
      <div>
        <Header> <RegisterButton onClick={this.props.goToRegisterPage}/> </Header>
          <LoginCard onSubmit={this.sendLoginData}> 
            {loginForm.map( input => (
              <div key={StyledInput.name}>
                <StyledInput
                onChange={this.handleFieldChange}
                name={input.name}
                type={input.type}
                placeholder={input.label}
                label={input.label}
                value={this.state.form[input.name] || ""}
                />
              </div>
            ))}
            <StyledButton type="submit" color="primary" size="large" onClick={this.sendLoginData}>Login</StyledButton>
          </LoginCard>
          <LoginFooter/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  autenticateLogin: (email, password) => dispatch(autenticateLogin(email, password)),
  goToRegisterPage: () => dispatch(push(routes.register)),
})


export default connect(null, mapDispatchToProps)(LoginPage);
