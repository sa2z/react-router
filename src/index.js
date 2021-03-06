import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

// ctrl + F2 -> BrowserRouter, HashRouter, MemoryRouter
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
