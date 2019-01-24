import { connect } from "react-redux";
import React, { Component } from "react";

import ImageUpload from "./ImageUpload";
import ButtonList from "./ButtonList";
import CustomizationBar from "./CustomizationBar";
import RemoveButton from "./RemoveButton";
import Input from "./Input";

import getManageControl from "../utils/getManageControl";

import {
  setCurrentTemplate,
  deleteItem,
  openEditor,
  updateItem,
  pureSaveData
} from "../AC";

class Template extends Component {
  componentWillMount() {
    let { setCurrentTemplate, currentTemplate } = this.props;

    if (currentTemplate) {
      setCurrentTemplate(currentTemplate);
    }
  }

  render() {
    let { template, currentTemplate, size } = this.props,
      backgroundColor = template ? template.backgroundColor : "#fff",
      isActive = this.props.currentTemplate === template._id,
      isDeleted = isActive && this.props.isDeleted;

    return (
      <div
        className={isActive ? "template active" : "template"}
        key={this.props.key}
        onClick={this.handleClick}
        style={{
          background: backgroundColor,
          width: `${size.width}px`,
          height: `${size.height}px`
        }}
      >
        {getManageControl(
          <Input
            id={template._id}
            text={template.link}
            onChange={this.onLinkChange}
          />,
          isActive
        )}
        {getManageControl(<RemoveButton id={template._id} />, isDeleted)}
        {getManageControl(<CustomizationBar />, isActive)}
        <div className="content-wrapper">
          <div className="wrapper">
            <ImageUpload
              picture={template.logotypePicture}
              isActive={isActive}
            />
            <ButtonList
              isActive={isActive}
              templateId={template._id}
              currentTemplate={currentTemplate}
            />
          </div>
        </div>
      </div>
    );
  }

  handleClick = () => {
    let { setCurrentTemplate } = this.props;

    setCurrentTemplate(this.props.template._id);
  };

  deleteItem = () => {
    let { deleteItem } = this.props;
    deleteItem("tmp", this.props.template._id);
  };

  openEditor = () => {
    this.props.openEditor("templates", this.props.template._id);
  };

  onLinkChange = (id, value, save) => {
    if (save) {
      this.props.pureSaveData({
        id,
        type: "templates"
      });
    } else {
      this.props.updateItem({
        id,
        value,
        type: "templates",
        name: "link"
      });
    }
  };
}

export default connect(
  null,
  { setCurrentTemplate, deleteItem, openEditor, updateItem, pureSaveData }
)(Template);
