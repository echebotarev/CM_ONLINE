import React, { Component } from "react";

import Input from "../Input";

class DescriptionPreview extends Component {
  render() {
    let {
      template: { displayName = "Имя", description = "Описание", _id: id }
    } = this.props;

    return (
      <div className="description-preview">
        <div className="description-preview-wrap">
          <Input
            id={id}
            name="displayName"
            text={displayName}
            onChange={this.handlerChange}
          />
          <Input
            id={id}
            name="description"
            text={description}
            onChange={this.handlerChange}
          />
        </div>
      </div>
    );
  }

  handlerChange = (id, value, save, name) => {
    if (save) {
      this.props.pureSaveData({
        type: "templates",
        id
      });
    }
    else {
      this.props.updateItem({
        type: "templates",
        id,
        name,
        value
      });
    }
  };
}

export default DescriptionPreview;
