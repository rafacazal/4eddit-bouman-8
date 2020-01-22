import React, { Component } from "react";
import { connect } from "react-redux";
import { createUser } from "../../actions/user"
import Header from '../../components/Header';
import RegisterCard from '../../components/RegisterCard'
import { StyledRegisterInput, StyledRegisterButton } from '../../style/register';


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
      <Header/>
          <RegisterCard onSubmit={this.sendRegisterData}>
            {registerForm.map( input => (
              <div key={StyledRegisterInput.name}>
                <input
                onChange={this.handleFieldChange}
                name={input.name}
                type={input.type}
                label={input.label}
                value={this.state.form[input.name] || ""}
                />
              </div>
            ))}
            <StyledRegisterButton type="submit" color="primary" size="large" onClick={this.sendRegisterData}>cadastrar</StyledRegisterButton>
          </RegisterCard>
          </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
    createUser: (email, password, username) => dispatch(createUser(email, password, username)),
})


export default connect(null, mapDispatchToProps)(RegisterPage);