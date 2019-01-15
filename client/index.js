import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";

import store from "./store";
import Root from "./components/Root";
import "./css/index.global.scss";

render(
  <AppContainer>
    <Root store={store} />
  </AppContainer>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept("./components/Root", () => {
    console.log("index.js HMR");
    const NewApp = require("./components/Root").default;
    render(
      <AppContainer>
        <NewApp store={store} />
      </AppContainer>,
      document.getElementById("root")
    );
  });
}
