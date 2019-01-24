import React, { Component } from "react";
import { connect } from "react-redux";

import {
  buttonsSelector,
  filtratedButtonsSelector,
  filtratedButtonSelector
} from "../../selectors";
import { deleteItem, openEditor, updateItem, pureSaveData } from "../../AC";
import Button from "../Button";
import Loader from "../Loader";

class ButtonList extends Component {
  render() {
    return <div className="buttons">{this.getButtons()}</div>;
  }

  getButtons() {
    const {
      buttons,
      filtratedButtons,
      loading,
      templateId,
      isActive,
      currentButton,
      currentTemplate
    } = this.props;

    if (loading) {
      return <Loader />;
    }

    // делаем это присваивание, чтобы показывать сообщение "Кнопок еще нет"
    let currentButtons =
      currentTemplate === templateId ? filtratedButtons : buttons;

    return currentButtons.length ? (
      <ul>
        {currentButtons.map(button => {
          if (templateId !== button.template) {
            return "";
          }

          let isEditing = false;
          if (currentButton) {
            isEditing = isActive && currentButton._id === button._id;
          }

          return (
            <li key={button._id} className={isEditing ? "editing" : ""}>
              <Button button={button} onChange={this.handleTextChange} />
            </li>
          );
        })}
      </ul>
    ) : (
      <div className="initial-text">
        <p>Нажми плюсик справа, чтобы создать первую кнопку.</p>
      </div>
    );
  }

  handleTextChange = (id, value, save) => {
    if (save) {
      this.props.pureSaveData({
        id,
        type: "buttons"
      });
    } else {
      this.props.updateItem({
        id,
        value,
        type: "buttons",
        name: "text"
      });
    }
  };
}

export default connect(
  state => {
    return {
      currentButton: filtratedButtonSelector(state),
      buttons: buttonsSelector(state),
      filtratedButtons: filtratedButtonsSelector(state),
      loading: state.templates.loading
    };
  },
  { deleteItem, openEditor, updateItem, pureSaveData }
)(ButtonList);
