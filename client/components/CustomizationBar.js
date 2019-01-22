import React, { Component } from "react";

import {
  EDITOR_HEIGHT,
  EDITOR_SHIFT
} from "../constants";

import { connect } from "react-redux";
import {
  openColorPicker,
  updateItem,
  addItem,
  pureSaveData,
  openEditor
} from "../AC";
import {
  filtratedButtonsSelector,
  filtratedTemplateSelector,
  currentButtonSelector
} from "../selectors";

class CustomizationBar extends Component {
  render() {
    let { buttons } = this.props;

    return (
      <div className="customization-bar">
        <div className="customization-item" onClick={this.addButton}>
          <svg
            className="customization-icon"
            viewBox="0 0 17 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <path
                d="m33 29.478v-7h-3v7h-7v3h7v7h3v-7h7v-3h-7"
                transform="translate(-23-22)"
                fill="#000"
              />
            </g>
          </svg>
        </div>
        {buttons.length
          ? buttons.map(button => {
              let className =
                this.props.currentButton === button._id
                  ? "customization-item active"
                  : "customization-item";

              return (
                <div
                  className={className}
                  onClick={e => this.openEditor(e, button._id)}
                  key={button._id}
                >
                  <span>Btn</span>
                </div>
              );
            })
          : ""}
        <div
          className="customization-item"
          ref="container"
          onClick={this.onClick}
        >
          <svg
            className="customization-icon"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              stroke="#000000"
              strokeWidth="2"
              fill="#FFFFFF"
              cx="8"
              cy="8"
              r="7"
            />
          </svg>
        </div>
      </div>
    );
  }

  onClick = () => {
    this.props.openColorPicker(true, {
      currentColor: this.props.template.backgroundColor,
      rect: this.refs.container.getBoundingClientRect(),
      isGradient: true,
      callback: this.onChange
    });
  };

  addButton = () => {
    let { template, addItem } = this.props;
    addItem("btn", template._id);
  };

  openEditor = (e, id) => {
    const getCoords = target => {
      let targetCoords = target.getBoundingClientRect(),
        bottom = document.documentElement.clientHeight - targetCoords.bottom,
        editorOffset = EDITOR_HEIGHT - bottom,
        editorTop = targetCoords.top - (editorOffset > 0 ? editorOffset : 0);

      return {
        top: editorTop,
        left:
          targetCoords.left + document.documentElement.scrollLeft + EDITOR_SHIFT
      };
    };

    this.props.openEditor(
      "buttons",
      id,
      true,
      getCoords(e.target.closest(".customization-item"))
    );
  };

  onChange = value => {
    let payload = {
      id: this.props.template._id,
      type: "templates",
      style: true,
      name: "backgroundColor",
      value
    };

    this.props.updateItem(payload);
    this.props.pureSaveData(payload);
  };
}

export default connect(
  state => {
    return {
      colorPickerIsOpen: state.colorPicker.isOpen,
      template: filtratedTemplateSelector(state),
      buttons: filtratedButtonsSelector(state),
      currentButton: currentButtonSelector(state)
    };
  },
  { openColorPicker, updateItem, addItem, pureSaveData, openEditor }
)(CustomizationBar);
