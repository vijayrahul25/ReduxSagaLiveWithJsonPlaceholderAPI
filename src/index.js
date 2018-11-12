import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import App from "./component/App";
import reducer from "./reducers/allReducer";
import { showPosts } from "./actions/postActions";
import { loadAuthors } from "./actions/authorActions";

import { BrowserRouter } from "react-router-dom";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
