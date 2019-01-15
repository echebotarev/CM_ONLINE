import React, { Component } from "react";

import Slider from "../../SliderStyleAdvanced";
import InputStyleAdvanced from "../../InputStyleAdvanced";
import ColorPickerInput from "../../ColorPickerInput";

class Text extends Component {
  state = {
    textOpacity: 0,
    maxValue: 100,
    textColor: null
  };

  componentWillMount() {
    this.setState({
      textOpacity: this.props.textOpacity,
      textColor: this.props.textColor
    });
  }

  render() {
    return (
      <div className="scrolled-content">
        <span className="tab-text">Текст</span>
        <div className="section">
          <div>
            <div className="color-picker-input-with-opacity">
              <label className="color-picker-input-with-opacity-label">
                Цвет
              </label>
              <div className="color-picker-input-with-opacity-slider">
                <div className="input-slider">
                  <label className="label" />
                  <div className="clearfix sliderArea">
                    <div className="sliderContainer">
                      <InputStyleAdvanced
                        maxValue={this.state.maxValue}
                        value={this.state.textOpacity}
                        units={true}
                        callback={this.callback("textOpacity")}
                      />
                      <Slider
                        maxValue={this.state.maxValue}
                        value={this.state.textOpacity}
                        callback={this.callback("textOpacity")}
                      />
                    </div>
                  </div>
                  <ColorPickerInput
                    opacity={this.state.textOpacity}
                    background={this.state.textColor}
                    callback={this.callback("textColor")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  callback = type => {
    return value => {
      this.setState({ [type]: value });

      value = type === "textOpacity" ? value / 100 : value;
      this.props.onChange(value, type);
    };
  };
}

export default Text;
