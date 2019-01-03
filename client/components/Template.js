import { connect } from "react-redux";
import React, { Component } from "react";

import ImageUpload from "./ImageUpload";
import ButtonList from "./ButtonList";
import CustomizationBar from "./CustomizationBar";
import RemoveButton from "./RemoveButton";
import Input from "./Input";

import getManageControl from "../utils/getManageControl";
import getScrollWidth from "../utils/getScrollWidth";

import {
  setCurrentTemplate,
  deleteItem,
  openEditor,
  updateItem,
  pureSaveData
} from "../AC";

class Template extends Component {
  state = {
    scrollWidth: 0
  };

  componentWillMount() {
    let { setCurrentTemplate, currentTemplate } = this.props;

    if (currentTemplate) {
      setCurrentTemplate(currentTemplate);
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    let scrollWidth = getScrollWidth(this.refs.wrapper);
    if (prevState.scrollWidth !== scrollWidth) {
      this.setState({ scrollWidth: scrollWidth });
    }
  }

  render() {
    let { template, size } = this.props,
      { scrollWidth } = this.state,
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
            text={template.displayName}
            onChange={this.onLinkChange}
          />,
          isActive
        )}
        {getManageControl(<RemoveButton id={template._id} />, isDeleted)}
        {getManageControl(<CustomizationBar />, isActive)}
        <div className="content-wrapper">
          <div
            className="wrapper"
            ref="wrapper"
            style={
              scrollWidth ? { width: `calc(100% + ${scrollWidth}px)` } : {}
            }
          >
            <ImageUpload
              picture={template.logotypePicture}
              isActive={isActive}
            />
            <ButtonList templateId={template._id} isActive={isActive} />
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
        name: "displayName"
      });
    }
  };
}

export default connect(
  null,
  { setCurrentTemplate, deleteItem, openEditor, updateItem, pureSaveData }
)(Template);
