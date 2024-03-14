import './index.css';
// import state, {addPost, subscribe, updateTextareaText} from './redux/state';
//import store from './redux/store';
import store from './redux/redux-store';
import ReactDOM from "react-dom/client";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById('root'));
let renderTree = (state) => {

  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} dispatch={store.dispatch.bind(store)} />
      </BrowserRouter>
    </React.StrictMode>
  );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
}

renderTree(store.getState());
store.subscribe(() => {
  renderTree(store.getState());
});
