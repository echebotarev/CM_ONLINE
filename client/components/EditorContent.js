import React, { Component } from "react";
import { connect } from "react-redux";

import { filtratedTemplateSelector } from "../selectors";

import ImageUpload from "./TemplateHeader";
import ColorPicker from "./ColorPicker";

import { updateItem, setEditableData } from "../AC";

class EditorContent extends Component {
  componentWillReceiveProps() {
    // используется для:
    // при переключение вкладо "Имя шаблона"/"ссылка"
    // input не перестраивается и предыдущее значение сохраняется
    if (document.activeElement.tagName !== "INPUT" && this.refs.input)
      this.refs.input.value = "";
  }

  render() {
    let { content, id, type } = this.props;

    return (
      <div className="editor-content float-left">
        <div className="editor-content-header">{content.title}</div>
        {this.getInputForm()}
        <div className="editor-content-description">{content.description}</div>
      </div>
    );
  }

  getInputForm = () => {
    let { type } = this.props.content;

    return type === "input" ? (
      <div className="input-form">
        <input type="text" onChange={this.handleTextChange} ref="input" />
      </div>
    ) : type === "image" ? (
      <div className="input-image">
        <ImageUpload />
      </div>
    ) : (
      <div className="input-color">
        <ColorPicker onChangeComplete={this.handleColorChange} />
      </div>
    );
  };

  handleColorChange = ({ hex }) => {
    let {
      id,
      type,
      content: { name },
      updateItem
    } = this.props;
    updateItem({
      id,
      type,
      name,
      value: hex
    });
  };

  handleTextChange = event => {
    let {
      id,
      type,
      content: { name },
      updateItem
    } = this.props;
    updateItem({
      id,
      type,
      name,
      value: event.target.value
    });
  };
}

export default connect(
  state => {
    return {
      template: filtratedTemplateSelector(state)
    };
  },
  { updateItem, setEditableData }
)(EditorContent);
