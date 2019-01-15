import React, { Component } from "react";
import { connect } from "react-redux";

import { filtratedTemplateSelector } from "../../selectors";

import Menu, { MenuItem } from "./../Menu";

class Header extends Component {
  state = {
    displayName: ""
  };

  componentDidMount() {
    let displayName = this.props.template
      ? this.props.template.displayName
      : null;

    if (displayName !== this.state.displayName) {
      this.setState({ displayName });
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    let displayName = this.props.template
      ? this.props.template.displayName
      : null;

    if (displayName !== prevState.displayName) {
      this.setState({ displayName });
    }
  }

  getLink = () => {
    return this.props.isAuthenticate ? (
      <MenuItem className="ml-3" to="/logout">
        Выйти
      </MenuItem>
    ) : (
      <span>
        <MenuItem className="ml-3" to="/register">
          Зарегистрироваться
        </MenuItem>
        <MenuItem className="ml-3" to="/login">
          Войти
        </MenuItem>
      </span>
    );
  };

  render() {
    let { username } = this.props;

    return (
      <div className="header">
        <h1>Contact Me</h1>
        {this.state.displayName ? (
          <span className="link-name">
            {this.state.displayName}.{document.location.host}
          </span>
        ) : (
          ""
        )}
        {username ? <span className="float-right">{username}</span> : ""}
        <div className="line" />
        <Menu className="float-left">
          <MenuItem className="mr-3" to="/">
            Главная
          </MenuItem>
          <MenuItem className="mr-3" to="/constructor">
            Конструктор
          </MenuItem>
        </Menu>
        <Menu className="float-right">{this.getLink()}</Menu>
      </div>
    );
  }
}

export default connect(state => {
  return {
    router: state.router,
    isAuthenticate: state.isAuthenticate.auth,
    username: state.isAuthenticate.username,
    template: filtratedTemplateSelector(state)
  };
})(Header);
