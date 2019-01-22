import React, { Component } from "react";

import Input from "../Input";
import Select from "../Select";
import styles from "./styles.global.scss";

import { connect } from "react-redux";
import { filtratedButtonSelector } from "../../selectors";
import { updateItem } from "../../AC";

import { content } from "../../fixturesEditor";

class EditorMsgs extends Component {
  state = {
    mssg: {
      type: null,
      index: 0
    },
    error: false,
    timerError: null
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    let type = nextProps.button ? nextProps.button.type : null;
    if (type && type !== prevState.mssg.type) {
      return {
        mssg: {
          type,
          index: getIndex(type)
        }
      };
    }

    return null;

    function getIndex(type) {
      for (let i = 0; i < content.messengers.length; i++) {
        const messenger = content.messengers[i];
        if (messenger.value === type) {
          return i;
        }
      }

      return 0;
    }
  }

  render() {
    let { button } = this.props;

    return (
      <div className="editor-mssg">
        <span>Куда будет вести эта кнопка?</span>

        <div className="select-wrapper">
          <Select
            id={button._id}
            options={content.messengers}
            selected={button.type}
            onChange={this.onChangeSelect}
          />
        </div>

        <div className="error-mssg">
          {this.state.error ? "Данные введены не верно" : ""}
        </div>

        <div className="input-wrapper">
          <Input
            id={button._id}
            text={button.link}
            placeholder={content.messengers[this.state.mssg.index].placeholder}
            onChange={this.onChangeInput}
            onValidate={this.validate}
          />
        </div>

        <span>{content.messengers[this.state.mssg.index].description}</span>
      </div>
    );
  }

  validate = value => {
    // ф-ия validate вызывается в componentWillUnmount input'a
    // со значние false, чтобы скрыть ошибку и удалить таймер
    if (!value) {
      return this.setState({
        error: false,
        timerError: clearTimeout(this.state.timerError)
      });
    }

    let regexp,
      regexpTG = "^[a-zA-Z0-9_]+$",
      regexpWhatsapp = "^[0-9]+$",
      regexpMail = "^[-\\w.]+@([A-z0-9][-A-z0-9]+\\.)+[A-z]{2,4}$",
      regexpPhone = "^\\+[0-9]+$",
      regexpSite =
        "^([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?.)+[a-zA-Z]{2,6}$";

    switch (this.state.mssg.type) {
      case "Telegram":
      case "VK":
        regexp = regexpTG;
        break;

      case "Whatsapp":
        regexp = regexpWhatsapp;
        break;

      case "Email":
        regexp = regexpMail;
        break;

      case "Phone":
        regexp = regexpPhone;
        break;

      case "Site":
        regexp = regexpSite;
        break;
    }

    let results = value.match(regexp);

    this.setState({
      error: !results
    });

    let timerError = setTimeout(() => {
      this.setState({
        error: false
      });
    }, 5000);

    this.setState({ timerError });
  };

  onChangeInput = (id, value) => {
    this.props.updateItem({
      id,
      value,
      type: "buttons",
      name: "link"
    });
  };

  onChangeSelect = (id, value) => {
    this.props.updateItem({
      id,
      value,
      type: "buttons",
      name: "type"
    });
  };
}

export default connect(
  state => {
    return {
      button: filtratedButtonSelector(state)
    };
  },
  { updateItem }
)(EditorMsgs);
