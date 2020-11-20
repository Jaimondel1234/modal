import React from "react";
import ReactDOM from "react-dom";
import { ModalApp } from "./ModalApp";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.render(
  <Provider store={store}>
    <ModalApp />
  </Provider>,
  document.getElementById("root")
);
