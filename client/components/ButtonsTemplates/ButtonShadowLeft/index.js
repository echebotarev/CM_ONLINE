import React, { Component } from "react";
import styles from "./styles.local.scss";
import Input from "../../Input";

class ButtonShadowLeft extends Component {
  render() {
    let { onChange, styles } = this.props,
      { text, _id } = this.props.button;

    return (
      <div>
        <div className="shadow left_shadow" />
        <a href="#">
          <span style={{ color: styles.color }}>
            <Input id={_id} text={text} onChange={onChange} />
          </span>
        </a>
      </div>
    );
  }
}

export default ButtonShadowLeft;
