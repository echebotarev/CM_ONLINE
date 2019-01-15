import React, { Component } from "react";
import Input from "../../Input";

class IronButton extends Component {
  render() {
    let { onChange, styles } = this.props,
      { text, _id } = this.props.button;

    return (
      <div>
        <div className="body" />
        <div className="screw tl" />
        <div className="screw bl" />
        <div className="screw tr" />
        <div className="screw br" />
        <a href="#">
          <span style={{ color: styles.color }}>
            <Input id={_id} text={text} onChange={onChange} />
          </span>
        </a>
      </div>
    );
  }
}

export default IronButton;
