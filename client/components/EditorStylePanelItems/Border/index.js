import React, { Component } from "react";

class Border extends Component {
  render() {
    return (
      <div name="border" key="border">
        <label>
          <input type="radio" name="rb_4" value="border" />
          <span>
            <svg
              className="symbol symbol-borderDesign"
              width="14"
              height="14"
              viewBox="0 0 14 14"
            >
              <path
                fillRule="evenodd"
                d="M12.15 8.04V5.36h2v2.68h-2zm-1.3-6v-2c1.66 0 3 1.35 3 3h-2c0-.55-.44-1-1-1zM5.55-.04h3.2v2h-3.2v-2zm3.2 14h-3.2v-2h3.2v2zm-8.9-2.92h2c0 .55.45 1 1 1v2c-1.65 0-3-1.34-3-3zm2.3-2.8h-2V5.36h2v2.88zm-.3-5.2h-2c0-1.65 1.35-3 3-3v2c-.55 0-1 .45-1 1zm10 8h2c0 1.66-1.34 3-3 3v-2c.56 0 1-.45 1-1z"
              />
            </svg>
            <span className="tab-text">Граница</span>
          </span>
          <hr className="divider-long " />
        </label>
      </div>
    );
  }
}

export default Border;
