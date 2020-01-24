import React, { Component } from "react";
import { connect } from "react-redux";
import { createUser } from "../../actions/user"
import Header from "../../components/Header";
import RegisterCard from '../../components/RegisterCard'
import { StyledInput, StyledButton, CardTitle, ContainerInput } from '../../style/registerPage';
import { push } from "connected-react-router";
import { routes } from "../Router/index";


const registerForm = [
  {
    name: "username",
    type: "text",
    label: "Nome de Usuário",
    required: true,
  },
  {
    name: "email",
    type: "email",
    label: "E-mail",
    required: true,
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

    const { createUser } = this.props
    const { email, password, username } = this.state.form
    createUser(email, password, username)

    this.setState({form: {}})
  }


  render() {
    const { goToLoginPage } = this.props
    return (
      <div>
        <Header onClick={goToLoginPage}></Header>
        <RegisterCard onSubmit={this.sendRegisterData}>
          <CardTitle>Cadastro</CardTitle>
          {registerForm.map( input => (
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
          <StyledButton type="submit" color="primary" size="large" onClick={this.sendRegisterData}>Cadastrar</StyledButton>
        </RegisterCard>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  createUser: (email, password, username) => dispatch(createUser(email, password, username)),
  goToLoginPage: () => dispatch(push(routes.root)),
})



export default connect(null, mapDispatchToProps)(RegisterPage);