import React, { Component } from "react";

class Input extends Component {
  state = {
    isActive: false
  };

  render() {
    let { text, placeholder, onChange, id } = this.props,
      { isActive } = this.state;

    return (
      <div className={isActive ? "input-text active" : "input-text"}>
        <input
          type="text"
          value={text ? text : ""}
          placeholder={placeholder ? placeholder : ""}
          onChange={e => onChange(id, e.target.value)}
          onFocus={this.handlerFocus}
          onBlur={e => this.handlerBlur(e)}
        />
        <div>
          <span className="invisible">{text}</span>
        </div>
      </div>
    );
  }

  handlerFocus = () => {
    if (this.props.onValidate) {
      this.props.onValidate(false);
    }

    this.toggleActiveClassName();
  };

  handlerBlur = e => {
    let { id } = this.props;

    if (this.props.onValidate) {
      this.props.onValidate(e.target.value);
    }

    this.toggleActiveClassName();
    this.props.onChange(id, e.target.value, true);
  };

  toggleActiveClassName = () => {
    this.setState({
      isActive: !this.state.isActive
    });
  };
}

export default Input;
