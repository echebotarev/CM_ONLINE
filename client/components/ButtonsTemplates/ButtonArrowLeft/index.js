import React, { Component } from "react";
import styles from "./styles.scss";
import Input from "../../Input";

class ButtonArrowLeft extends Component {
  render() {
    let { onChange, styles } = this.props,
      { text, _id } = this.props.button;

    return (
      <div>
        <div
          ref={elem => this.setColor(elem, styles, "bottom")}
          className="top border"
        />
        <div
          ref={elem => this.setColor(elem, styles, "top")}
          className="bottom border"
        />
        <div style={{ background: styles.background }} className="body" />
        <a className="a" href="#">
          <span style={{ color: styles.color }}>
            <Input id={_id} text={text} onChange={onChange} />
          </span>
        </a>
      </div>
    );
  }

  setColor = (elem, style, direct) => {
    if (elem) {
      elem.style.setProperty(
        direct === "bottom" ? "border-bottom-color" : "border-top-color",
        style.background,
        "important"
      );
    }
  };
}

export default ButtonArrowLeft;
