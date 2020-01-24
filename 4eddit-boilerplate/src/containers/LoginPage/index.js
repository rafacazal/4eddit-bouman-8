import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router/index";
import { autenticateLogin } from "../../actions/user";
import Header from '../../components/Header';
import { RegisterPageButton } from '../../style/global'; 
import LoginPageFooter from '../../components/LoginPageFooter';
import LoginCard from "../../components/LoginCard";
import { StyledInput, StyledButton, ContainerInput } from '../../style/loginPage';


const loginForm = [
  {
    name: "email",
    type: "email",
    label: "E-mail ",
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

    const { email, password } = this.state.form;
    const { autenticateLogin } = this.props;
    autenticateLogin(email, password)

    this.setState({form: {}})
  }


  render() {
    const { goToRegisterPage } = this.props
    
    return (
      <div>
        <Header>
        <RegisterPageButton onClick={goToRegisterPage}>Cadastre-se</RegisterPageButton>
        </Header>
        <LoginCard onSubmit={this.sendLoginData}>
          {loginForm.map( input => (
            <ContainerInput key={input.name}>
              <label>{input.label}</label>
              <StyledInput
              onChange={this.handleFieldChange}
              name={input.name}
              type={input.type}
              value={this.state.form[input.name] || ""}
              />
            </ContainerInput>
          ))}
          <StyledButton type="submit" onClick={this.sendLoginData}>Login</StyledButton>
        </LoginCard>
        <LoginPageFooter/>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  autenticateLogin: (email, password) => dispatch(autenticateLogin(email, password)),
  goToRegisterPage: () => dispatch(push(routes.register)),
})



export default connect(null, mapDispatchToProps)(LoginPage);
