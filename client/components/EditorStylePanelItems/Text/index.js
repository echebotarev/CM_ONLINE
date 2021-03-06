import React, { Component } from "react";

class Text extends Component {
  render() {
    return (
      <div name="text" key="text">
        <label>
          <input type="radio" name="rb_4" value="text" />
          <span>
            <svg
              className="symbol symbol-textDesign"
              width="14"
              height="13"
              viewBox="0 0 14 13"
            >
              <path
                fillRule="evenodd"
                d="M10.5-.5h-8c-1.65 0-3 1.35-3 3v2h2v-2c0-.55.45-1 1-1h3v9h-2v2h6v-2h-2v-9h3c.55 0 1 .45 1 1v2h2v-2c0-1.65-1.35-3-3-3z"
              />
            </svg>
            <span className="tab-text">Текст</span>
          </span>
          <hr className="divider-long " />
        </label>
      </div>
    );
  }
}

export default Text;
