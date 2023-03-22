import React from "react";

import ReactDOM from "react-dom";

import App from "./App";

import logger from "redux-logger";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ajayGod from "redux-thunk";

import Amount from "./reducers/amountReducer";

// redux toolkit

import amountSlices from "./Slices/amountSlices";

import { configureStore } from "@reduxjs/toolkit";

import bounsSlice from "./Slices/bounsSlice";

// with redux toolkit

// const store = createStore(
//   combineReducers({
//     ajay: Amount,
//   }),
//   applyMiddleware(logger, ajayGod)
// );

// with redux toolkit

const store = configureStore({
  reducer: {
    ajay: amountSlices,
    sunny: bounsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger, ajayGod),
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
