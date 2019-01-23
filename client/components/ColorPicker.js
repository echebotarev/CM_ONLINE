import React, { Component } from "react";

import { CustomPicker, TwitterPicker } from "react-color";

class ColorPicker extends Component {
  state = {
    hex: "#fff",
    onChange: null
  };

  componentDidMount() {
    this.setState({
      hex: this.props.hex,
      onChange: this.props.onChange
    });
  }

  componentWillReceiveProps() {
    this.setState({
      hex: this.props.hex
    });
  }

  render() {
    // const { hex, hsl, onChange } = this.props;

    const styles = {
      swatch: {
        width: 54,
        height: 38,
        background: this.state.hex
      }
    };

    return (
      <div>
        <TwitterPicker
          onChange={this.state.onChange}
          color={this.state.hex}
          triangle="hide"
        />

        <div style={styles.swatch} />
      </div>
    );
  }
}

export default CustomPicker(ColorPicker);
