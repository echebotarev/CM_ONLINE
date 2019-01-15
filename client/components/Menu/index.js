import React, { Component } from "react";
import PropTypes from "prop-types";
import MenuItem from "./MenuItem";

class Menu extends Component {
  static propTypes = {};

  render() {
    const { className } = this.props;

    return (
      <div className={className ? className : ""}>
        <ul className="nav">{this.props.children}</ul>
      </div>
    );
  }
}

export { MenuItem };
export default Menu;
