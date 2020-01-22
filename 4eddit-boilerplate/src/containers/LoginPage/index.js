import React, { Component } from "react";
import { connect } from "react-redux";
import { autenticateLogin } from "../../actions/user"
import Header from '../../components/Header';
import LoginFooter from '../../components/LoginFooter'
// import { RegisterButton } from '../../style/registerButton'; 
import { StyledInput, LoginCardWrapper, StyledButton  } from '../../style/login';

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
        <Header/>
          <LoginCardWrapper onSubmit={this.sendLoginData}> 
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
          </LoginCardWrapper>
          <LoginFooter/>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  autenticateLogin: (email, password) => dispatch(autenticateLogin(email, password)),
})


export default connect(null, mapDispatchToProps)(LoginPage);
