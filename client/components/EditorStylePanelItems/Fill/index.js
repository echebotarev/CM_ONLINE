import React, { Component } from "react";

class Fill extends Component {
  render() {
    return (
      <div name="fill" key="fill">
        <label>
          <input type="radio" name="rb_4" value="fill" />
          <span>
            <svg
              className="symbol symbol-fillDesign"
              width="11"
              height="15"
              preserveAspectRatio="xMidYMid"
              viewBox="0 0 11 15"
            >
              <path
                id="path-1"
                fillRule="evenodd"
                d="M5.464-.006S-.01 4.116-.01 8.703c0 3.062 2.505 5.292 5.497 5.292s5.451-2.23 5.451-5.292c0-4.587-5.474-8.709-5.474-8.709zm-.526 11.001c-1 0-2-1.12-2-2.5 0-1.381 1-2.5 2-2.5v5z"
                className="cls-2"
              />
            </svg>
            <span className="tab-text">Цвета и прозрачность</span>
          </span>
          <hr className="divider-long " />
        </label>
      </div>
    );
  }
}

export default Fill;
