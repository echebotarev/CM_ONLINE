import React, { Component } from "react";
import { content } from "../fixturesEditor";

import EditorContent from "./EditorContent";

class EditorBasic extends Component {
  render() {
    let { switchTabs, id, type, currentTab } = this.props;

    return (
      <div className="content">
        <ul className="editor-nav float-left">
          {content[type].map((item, index) => {
            return (
              <li key={index} onClick={switchTabs.bind(null, index)}>
                {item.displayName}
              </li>
            );
          })}
        </ul>
        <EditorContent
          id={id}
          type={type}
          content={content[type][currentTab]}
        />
      </div>
    );
  }
}

export default EditorBasic;
