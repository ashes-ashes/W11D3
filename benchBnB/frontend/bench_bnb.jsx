// frontend/bench_bnb.jsx

import React from "react";
import ReactDOM from "react-dom";

import configureStore from './store/store.js';

import Root from "./components/root";

// –––testing–––
// import { signup, login, logout } from './util/session_api_util';
import { signup, login, logout } from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
  let store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
});