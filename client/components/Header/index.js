import React, { Component } from "react";
import { connect } from "react-redux";

import { filtratedTemplateSelector } from "../../selectors";

import Menu, { MenuItem } from "./../Menu";

class Header extends Component {
  state = {
    link: ""
  };

  componentDidMount() {
    let link = this.props.template ? this.props.template.link : null;

    if (link !== this.state.link) {
      this.setState({ link });
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    let link = this.props.template ? this.props.template.link : null;

    if (link !== prevState.link) {
      this.setState({ link });
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
        <div className="above-line">
          <h1>Contact Me</h1>
          {this.state.link ? (
            <span className="link-name">
              {this.state.link}.{document.location.host}
            </span>
          ) : (
            ""
          )}
          {username ? <span className="float-right">{username}</span> : ""}
        </div>
        <div className="line" />
        <div className="under-line">
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
