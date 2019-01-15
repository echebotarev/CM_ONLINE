import React, { Component } from "react";
import { connect } from "react-redux";

import LoginForm from "./../LoginForm";

class LoginPage extends Component {
  render() {
    const { isAuthenticate } = this.props;

    return (
      <div className="login">
        {isAuthenticate ? (
          <h3>You are registered! You are so lucky</h3>
        ) : (
          <LoginForm />
        )}
      </div>
    );
  }
}

export default connect(state => {
  return {
    isAuthenticate: state.isAuthenticate.auth
  };
})(LoginPage);
