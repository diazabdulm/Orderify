import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { CssBaseline } from "@material-ui/core";

import App from "./App";

import store from "./redux/configureStore";

ReactDOM.render(
  <Provider store={store}>
    <CssBaseline />
    <App />
  </Provider>,
  document.getElementById("root")
);
