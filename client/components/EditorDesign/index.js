import React, { Component } from "react";
import { content } from "../../fixturesEditor";
import EditorStylePanel from "../EditorStylePanel";

class EditorDesign extends Component {
  state = {
    slider: {
      step: 96,
      shift: 0
    },
    arrow: {
      left: false,
      right: true
    }
  };

  componentDidMount() {
    let { templatesButton } = this.props.button,
      { slider } = this.refs;

    if (!slider) {
      return false;
    }

    if (templatesButton) {
      let count = content.buttonsPreview.indexOf(templatesButton),
        maxShift = -(this.refs.slider.clientWidth - 288),
        shift = -(this.state.slider.step * (count - 2));

      shift = shift < maxShift ? maxShift : shift > 0 ? 0 : shift;

      this.setState({
        slider: {
          step: this.state.slider.step,
          shift: shift
        },
        arrow: {
          left: shift !== 0,
          right: shift !== maxShift
        }
      });

      this.refs[templatesButton].checked = true;
    } else {
      this.refs[content.buttonsPreview[0]].checked = true;
    }
  }

  render() {
    return (
      <div>
        <div className="slider-wrapper">
          <div
            className="slider"
            ref="slider"
            style={{ left: this.state.slider.shift }}
          >
            {content.buttonsPreview.map(item => {
              let src = `https://static.parastorage.com/services/santa-resources/resources/editor/advancedStylePanel/iconsForSkins/wysiwyg.viewer.skins.button.${item}.v1.png`;
              return (
                <label data-template={item} key={item}>
                  <input
                    ref={item}
                    onChange={this.onSelect}
                    type="radio"
                    name="rb_5"
                  />
                  <img src={src} alt="" />
                </label>
              );
            })}
          </div>
          {this.state.arrow.left ? (
            <div className="left arrow" onClick={this.move.bind(null, "left")}>
              <span />
            </div>
          ) : (
            ""
          )}
          {this.state.arrow.right ? (
            <div
              className="right arrow"
              onClick={this.move.bind(null, "right")}
            >
              <span />
            </div>
          ) : (
            ""
          )}
        </div>

        <hr className="divider-long" />

        <EditorStylePanel id={this.props.button._id} />
      </div>
    );
  }

  move = direct => {
    let shift =
      direct === "right"
        ? this.state.slider.shift - this.state.slider.step
        : this.state.slider.shift + this.state.slider.step;

    let maxShift = -(this.refs.slider.clientWidth - 288);
    shift = direct === "right" && shift < maxShift ? maxShift : shift;
    shift = direct === "left" && shift > 0 ? 0 : shift;

    this.setState({
      slider: {
        shift,
        step: this.state.slider.step
      },
      arrow: {
        left: shift !== 0,
        right: shift !== maxShift
      }
    });
  };

  onSelect = e => {
    let { _id: id } = this.props.button;
    this.props.updateItem({
      id,
      type: "buttons",
      name: "templatesButton",
      value: e.target.closest("label").getAttribute("data-template")
    });
  };
}

export default EditorDesign;
