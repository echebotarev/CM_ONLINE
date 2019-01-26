import React, { Component } from "react";

import styles from "./styles.global.scss";

class ImageUpload extends Component {
  render() {
    let { _id: id } = this.props.template;

    return (
      <ul>
        <li>
          <label htmlFor="fileInput">Загрузить с компьютера</label>
          <input
            id="fileInput"
            className="file-input"
            type="file"
            onChange={e => this.handleImageChange(e)}
          />
        </li>
        <li>
          <a href={`/image/instagram?templateID=${id}`}>
            Загрузить из Instagram
          </a>
        </li>
      </ul>
    );
  }

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
        template: { _id: id }
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
