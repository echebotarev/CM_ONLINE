import React, { Component } from "react";

class DescriptionPreview extends Component {
  render() {
    let { displayName = "Имя", description = "Описание" } = this.props.template;

    return (
      <div className="description-preview">
        <div className="description-preview-wrap">
          <h1>{displayName}</h1>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default DescriptionPreview;
