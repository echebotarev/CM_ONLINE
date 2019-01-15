import React, { Component } from "react";

import Slider from "../../SliderStyleAdvanced";
import InputStyleAdvanced from "../../InputStyleAdvanced";
import ColorPickerInput from "../../ColorPickerInput";

class Border extends Component {
  state = {
    borderOpacity: 1,
    borderWidth: 0,
    borderColor: "rgb(0, 0, 0)"
  };

  componentWillMount() {
    let { borderColor, borderOpacity, borderWidth } = this.props;
    this.setState({
      borderColor,
      borderOpacity,
      borderWidth
    });
  }

  render() {
    return (
      <div className="scrolled-content">
        <span className="tab-text">Граница</span>
        <div className="section">
          <div>
            <div className="color-picker-input-with-opacity">
              <label className="color-picker-input-with-opacity-label">
                Прозрачность и цвет
              </label>
              <div className="color-picker-input-with-opacity-slider">
                <div className="input-slider">
                  <label className="label" />
                  <div className="clearfix sliderArea">
                    <div className="sliderContainer">
                      <InputStyleAdvanced
                        maxValue={100}
                        value={this.state.borderOpacity}
                        units={true}
                        callback={this.callbackOpacity}
                      />
                      <Slider
                        maxValue={100}
                        value={this.state.borderOpacity}
                        callback={this.callbackOpacity}
                      />
                    </div>
                  </div>
                  <ColorPickerInput
                    opacity={this.state.borderOpacity}
                    background={this.state.borderColor}
                    callback={this.callback("borderColor")}
                  />
                </div>
              </div>
            </div>
            <hr className="divider-short" />
          </div>
          <div>
            <div className="input-slider has-label">
              <label className="label">Ширина (пикс.)</label>
              <div className="clearfix sliderArea">
                <div className="sliderContainer">
                  <InputStyleAdvanced
                    maxValue={15}
                    value={this.state.borderWidth}
                    callback={this.callbackWidth}
                  />
                  <Slider
                    maxValue={15}
                    value={this.state.borderWidth}
                    callback={this.callbackWidth}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  callbackOpacity = value => {
    this.setState({ borderOpacity: value });

    this.props.onChange(value / 100, "borderOpacity");
  };
  callbackWidth = value => {
    this.setState({ borderWidth: value });
    this.props.onChange(value, "borderWidth");
  };
  callback = type => {
    return value => {
      this.setState({ [type]: value });

      this.props.onChange(value, type);
    };
  };
}

export default Border;
