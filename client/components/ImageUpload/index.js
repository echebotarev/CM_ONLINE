import React, { Component } from "react";

import styles from "./styles.global.scss";

class ImageUpload extends Component {
  render() {
    return (
      <ul>
        <li>
          <label htmlFor="fileInput">Изображение</label>
          <input
            id="fileInput"
            className="file-input"
            type="file"
            onChange={e => this.handleImageChange(e)}
          />
        </li>
      </ul>
    );
  }

  handleClick = () => {};

  handleImageChange = e => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    if (!file) {
      return false;
    }

    let {
        updateItem,
        pureSaveData,
        currentTemplate: { _id: id }
      } = this.props,
      type = "templates",
      name = "logotypePicture";

    reader.onloadend = () => {
      updateItem({
        id,
        type,
        name,
        value: reader.result
      });

      pureSaveData({
        id,
        type: "templates"
      });
    };

    reader.readAsDataURL(file);
  };
}

export default ImageUpload;
