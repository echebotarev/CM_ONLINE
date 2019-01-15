import React, { Component } from "react";
import { connect } from "react-redux";

import {
  Form,
  FormGroup,
  FormControl,
  Col,
  Button,
  ControlLabel,
  PageHeader,
  Alert
} from "react-bootstrap";
import { authorization, deleteMessage } from "./../../AC";

class LoginForm extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    usernameValid: true,
    emailValid: true,
    passwordValid: true,
    errorMessage: "",
    serverMessage: null
  };

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.serverMessage) {
      setTimeout(() => {
        this.props.deleteMessage();
      }, 5000);
    }

    this.setState({ serverMessage: nextProps.serverMessage });
  }

  render() {
    const isRegister = this.props.location === "/register";
    const message = this.state.serverMessage;

    return (
      <Form bsClass="form-login" horizontal>
        {!this.state.emailValid || !this.state.passwordValid || message ? (
          <Col smOffset={2} sm={10}>
            <Alert bsStyle="danger">
              {message ? message : this.state.errorMessage}
            </Alert>
          </Col>
        ) : (
          ""
        )}

        <Col smOffset={2} sm={10}>
          <PageHeader>
            <small>Введите данные:</small>
          </PageHeader>
        </Col>

        {isRegister ? (
          <FormGroup className="clearfix" controlId="formHorizontalUsername">
            <Col componentClass={ControlLabel} sm={2}>
              Имя
            </Col>
            <Col sm={10}>
              <FormControl
                name="username"
                type="text"
                placeholder="Имя"
                value={this.state.username}
                onChange={this.handleChange}
                className={this.state.usernameValid ? "" : "has-error"}
              />
            </Col>
          </FormGroup>
        ) : (
          ""
        )}

        <FormGroup className="clearfix" controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Email
          </Col>
          <Col sm={10}>
            <FormControl
              name="email"
              type="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
              className={this.state.emailValid ? "" : "has-error"}
            />
          </Col>
        </FormGroup>

        <FormGroup className="clearfix" controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Password
          </Col>
          <Col sm={10}>
            <FormControl
              name="password"
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
              className={this.state.emailValid ? "" : "has-error"}
            />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button onClick={this.handleSubmit} type="submit">
              Sign in
            </Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }

  handleChange = e => {
    let { name, value } = e.target;

    this.setState(
      { [name]: value },
      this.validateField.bind(this, name, value)
    );
  };

  handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();

    if (
      !this.state.emailValid ||
      !this.state.passwordValid ||
      !this.state.usernameValid
    )
      return;

    this.props.authorization(
      this.state.email,
      this.state.password,
      this.state.username
    );
  };

  validateField = (fieldName, value) => {
    let { usernameValid, emailValid, passwordValid, errorMessage } = this.state;

    switch (fieldName) {
      case "username":
        usernameValid = value.length >= 3;
        errorMessage = "Введите пожалуйста имя";
        break;
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        errorMessage = "Не верный формат почты";
        break;
      case "password":
        passwordValid = value.length >= 3;
        errorMessage = "Слишком короткий пароль";
        break;
      default:
        break;
    }

    this.setState({
      emailValid: emailValid,
      passwordValid: passwordValid,
      errorMessage: errorMessage
    });
  };
}

export default connect(
  state => {
    return {
      location: state.router.location.pathname,
      serverMessage: state.isAuthenticate.message
    };
  },
  { authorization, deleteMessage }
)(LoginForm);
