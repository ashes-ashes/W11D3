// frontend/bench_bnb.jsx

import React from "react";
import ReactDOM from "react-dom";

import configureStore from './store/store.js';

import { signup, login, logout } from './util/session_api_util';

document.addEventListener("DOMContentLoaded", () => {
  let store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});