import React, { Component } from "react";
import { connect } from "react-redux";

import FA from "react-fontawesome";
import styles from "./styles.scss";
import { updateItem, pureSaveData } from "../../AC";

import { filtratedTemplateSelector } from '../../selectors'

class ImageUpload extends Component {
  render() {
    let picture = this.props.picture,
      preview = null;

    if (picture) {
      preview = <img src={picture} />;
    } else {
      preview = <FA name="camera-retro" />;
    }

    return (
      <div className="previewComponent">
        <form className="displaynone" onSubmit={e => this.handleSubmit(e)}>
          <input
            id="fileInput"
            className="fileInput"
            type="file"
            onChange={e => this.handleImageChange(e)}
          />
          <button
            className="submitButton"
            type="submit"
            onClick={e => this.handleSubmit(e)}
          >
            Upload Image
          </button>
        </form>
        <div
          onClick={this.handleClick}
          className={picture ? styles.logoPreviewWithImg : styles.logoPreview}
          data-tip={picture ? "Выберите другой" : "Добавьте логотип"}
        >
          {preview}
        </div>
      </div>
    );
  }

  handleClick = () => {
    if (!this.props.isActive) {
      return false;
    }

    // TODO проверить, чтобы click работал везде
    document.getElementById("fileInput").click();
  };

  handleSubmit = e => {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log("handle uploading-", this.state.file);
  };

  handleImageChange = e => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    let { updateItem, pureSaveData, currentTemplate: {_id: id} } = this.props,
      type = "templates",
      name = "logotypePicture";

    console.log('ID', id);

    reader.onloadend = () => {
      console.log("reader", reader);
      console.log("target", file);

      // this.setState({
      // 	logotypePicture: reader.result
      // });
      updateItem({
        id,
        type,
        name,
        value: reader.result
      });

      pureSaveData({
        id,
        type: "templates"
      })
    };

    reader.readAsDataURL(file);
  };
}

// 1. на вход получает весь Store
// 2. значения возвращенные из этой функции добавляются в this.props компонента
// 3. благодаря connect'у в this.props добавляется this.props.dispatch
//    в dispatch надо передавать action
/*const mapStateToProps = (state) => ({
	buttons: state.buttons
});*/

export default connect(
  state => {
    return {
      currentTemplate: filtratedTemplateSelector(state)
    }
  },
  { updateItem, pureSaveData }
)(ImageUpload);
