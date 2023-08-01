import React from "react";
import ReactDOM from "react-dom"
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
