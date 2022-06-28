import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import albums from "./Redux/albums";

import { configureStore } from "@reduxjs/toolkit";
import songs from "./Redux/songs";
import playlists from "./Redux/playlists";
import { Provider } from "react-redux";
const root = ReactDom.createRoot(document.querySelector("#root"));
const store = configureStore({
  reducer: {
    albums,
    songs,
    playlists,
  },
});
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
