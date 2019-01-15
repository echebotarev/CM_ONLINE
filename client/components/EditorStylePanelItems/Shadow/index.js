import React, { Component } from "react";

class Shadow extends Component {
  render() {
    return (
      <div name="shadow" key="shadow">
        <label>
          <input type="radio" name="rb_4" value="shadow" />
          <span>
            <svg
              className="symbol symbol-shadowDesign"
              width="15"
              height="15"
              viewBox="0 0 15 15"
            >
              <path
                fillRule="evenodd"
                d="M11.5 14.5h-8v-2h8c.55 0 1-.45 1-1v-9h2v9c0 1.65-1.35 3-3 3zm-3-4h-7c-1.1 0-2-.9-2-2v-7c0-1.1.9-2 2-2h7c1.1 0 2 .9 2 2v7c0 1.1-.9 2-2 2z"
              />
            </svg>
            <span className="tab-text">Тень</span>
          </span>
          <hr className="divider-long " />
        </label>
      </div>
    );
  }
}

export default Shadow;
