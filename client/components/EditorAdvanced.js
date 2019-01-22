import React, { Component } from "react";
import { connect } from "react-redux";

import EditorDesign from "./EditorDesign";
import EditorMsgs from "./EditorMsgs";

import { updateItem } from "../AC";
import { filtratedButtonSelector } from "../selectors";

class EditorAdvanced extends Component {
  render() {
    let { currentTab } = this.props;
    if (typeof currentTab === "undefined") {
      return false;
    }

    return currentTab ? (
      <EditorDesign
        button={this.props.button}
        updateItem={this.props.updateItem}
      />
    ) : (
      <EditorMsgs />
    );
  }
}

export default connect(
  state => {
    return {
      button: filtratedButtonSelector(state)
    };
  },
  { updateItem }
)(EditorAdvanced);
