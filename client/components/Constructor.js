import React, { Component } from "react";

import { isNotAuthenticated } from "../AC";
import { connect } from "react-redux";

import Templates from "./Templates";

class Constructor extends Component {
  componentDidMount() {
    const { isAuthenticate, isNotAuthenticated } = this.props;
    if (!isAuthenticate) {
      isNotAuthenticated();
    }
  }

  render() {
    return (
      <div className="content clearfix">
        <Templates />
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      isAuthenticate: state.isAuthenticate.auth
    };
  },
  { isNotAuthenticated }
)(Constructor);
