import React, { Component } from "react";
import { connect } from "react-redux";

import { content } from "../fixturesEditor";

import EditorBasic from "./EditorBasic";
import EditorAdvanced from "./EditorAdvanced";

import { openColorPicker, deleteItem } from "../AC";

class EditorContainer extends Component {
  state = {
    currentTab: 0
  };

  render() {
    let { id, type, position, advanced } = this.props;

    return (
      <div
        style={position}
        className={advanced ? "editor-container advanced" : "editor-container"}
      >
        <div className="editor-header">
          <div className="editor-name">Редактор кнопки</div>
          <ul className="clearfix">
            {content[type].map((item, index) => {
              let className = this.state.currentTab === index ? "active" : "";

              return (
                <li
                  key={index}
                  className={className}
                  onClick={this.switchTabs.bind(null, index)}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>
        <hr className="divider-long" />
        {advanced ? (
          <EditorAdvanced
            id={id}
            type={type}
            currentTab={this.state.currentTab}
            switchTabs={this.switchTabs}
          />
        ) : (
          <EditorBasic
            id={id}
            type={type}
            currentTab={this.state.currentTab}
            switchTabs={this.switchTabs}
          />
        )}
        <div className="editor-footer">
          <button className="delete-item" onClick={() => this.deleteItem(id)}>
            <div>
              <svg
                className="zen-icon"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m10.4996 0h-.99992v9.50037h-9.49968v.99993h9.49968v9.4996h.99992v-9.4996h9.5003v-.99993h-9.5003z"
                  fillRule="evenodd"
                  transform="matrix(.707107 .707107 -.707107 .707107 8 -6.139999999999)"
                />
              </svg>
            </div>
            Удалить
          </button>
        </div>
      </div>
    );
  }

  deleteItem = id => {
    let { deleteItem } = this.props;
    deleteItem("btn", id);
  };

  switchTabs = index => {
    this.setState({
      currentTab: index
    });
  };
}

export default connect(
  null,
  { openColorPicker, deleteItem }
)(EditorContainer);
