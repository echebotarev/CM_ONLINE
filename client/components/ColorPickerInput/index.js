import React, { Component } from "react";
import { connect } from "react-redux";

import { openColorPicker } from "../../AC";

class ColorPickerInput extends Component {
  state = {
    isOpen: false,
    opacity: 1,
    background: "rgb(7, 97, 219)"
  };

  componentDidMount() {
    let opacity =
        this.props.opacity || this.props.opacity === 0
          ? this.props.opacity / 100
          : 1,
      { background } = this.props;

    this.setState({ opacity, background });
  }

  componentWillReceiveProps(nextProps, nextContext) {
    let opacity =
        nextProps.opacity || nextProps.opacity === 0
          ? nextProps.opacity / 100
          : 1,
      isOpen = nextProps.colorPickerIsOpen,
      { background } = nextProps;

    let state = {};
    if (isOpen !== this.state.isOpen) state.isOpen = isOpen;
    if (background !== this.state.background) state.background = background;
    if (opacity !== this.state.opacity) state.opacity = opacity;

    if (Object.keys(state).length) this.setState(state);
  }

  render() {
    return (
      <div>
        <div
          onClick={this.onClick}
          ref="container"
          data-aid="bg-colorPicker"
          className="color-picker-input"
        >
          <div className="color-picker-wrapper">
            <div
              className="color-picker-color"
              style={{
                backgroundColor: this.state.background,
                opacity: this.state.opacity
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  onClick = () => {
    // открыт ColorPicker или нет
    // узнаем в ComponentWillReceiveProps
    let value = !this.state.isOpen;

    this.props.openColorPicker(value, {
      currentColor: this.state.background,
      rect: this.refs.container.getBoundingClientRect(),
      isGradient: false,
      callback: this.props.callback
    });
  };
}

export default connect(
  state => {
    return {
      colorPickerIsOpen: state.colorPicker.isOpen
    };
  },
  { openColorPicker }
)(ColorPickerInput);
