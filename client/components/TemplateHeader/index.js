import React, { Component } from "react";
import { connect } from "react-redux";

import styles from "./styles.local.scss";
import { updateItem, pureSaveData } from "../../AC";

import { filtratedTemplateSelector } from "../../selectors";

import DescriptionPreview from "../DescriptionPreview";
import ImageUpload from "../ImageUpload";

class TemplateHeader extends Component {
  state = {
    isImageUploadOpen: false
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    // скрываем ImageUpload при потере фокуса
    if (!nextProps.isActive) {
      return {
        isImageUploadOpen: false
      };
    }

    return null;
  }

  render() {
    let picture = this.props.template.logotypePicture,
      preview = picture ? <img src={picture} /> : <svg xmlns="http://www.w3.org/2000/svg" width="54" height="43" viewBox="0 0 54 43">
        <path fillRule="nonzero" d="M0 0v43h54V0H0zm2.16 2.15h49.68V30.1H40.306l-7.56-5.375h-6.379l-4.413-4.392-5.256 1.05-4.65-6.946L2.16 24.28V2.15zM40.5 8.6c-2.67 0-4.86 2.18-4.86 4.838s2.19 4.837 4.86 4.837c2.67 0 4.86-2.18 4.86-4.837 0-2.659-2.19-4.838-4.86-4.838zm0 2.15a2.68 2.68 0 0 1 2.7 2.688 2.68 2.68 0 0 1-2.7 2.687 2.68 2.68 0 0 1-2.7-2.688 2.68 2.68 0 0 1 2.7-2.687zm-28.789 7.063l3.991 5.955 5.544-1.1 4.227 4.207h6.581l7.56 5.375H51.84v8.6H2.16V27.32l9.551-9.507z"/>
      </svg>;

    return (
      <div className="preview-component">
        <div className="template-header">
          {this.state.isImageUploadOpen ? (
            <ImageUpload
              updateItem={this.props.updateItem}
              pureSaveData={this.props.pureSaveData}
              template={this.props.template}
            />
          ) : (
            ""
          )}
          <div
            onClick={this.handleClick}
            className={
              picture ? styles["logo-preview-with-img"] : styles["logo-preview"]
            }
            data-tip={picture ? "Выберите другое" : "Добавьте логотип"}
          >
            {preview}
          </div>
          <DescriptionPreview
            template={this.props.template}
            updateItem={this.props.updateItem}
            pureSaveData={this.props.pureSaveData}
          />
        </div>
      </div>
    );
  }

  handleClick = () => {
    if (!this.props.isActive) {
      return false;
    }

    this.setState({ isImageUploadOpen: !this.state.isImageUploadOpen });
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
    };
  },
  { updateItem, pureSaveData }
)(TemplateHeader);
