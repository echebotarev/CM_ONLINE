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
    }
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

        <Input
          id={button._id}
          text={button.link}
          placeholder="https://"
          onChange={this.onChangeInput}
        />

        <span>{content.messengers[this.state.mssg.index].description}</span>
      </div>
    );
  }

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
