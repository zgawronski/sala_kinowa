import React from "react";
import ReactDOM from "react-dom";
import { Reset } from "styled-reset";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import { MainPage } from "./components/MainPage/MainPage";
import store from "./tools/store";
import otherStore from "./tools/peristedStore"

const persistor = persistStore(otherStore);
console.log(persistor);
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Reset />

      <MainPage />

    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
