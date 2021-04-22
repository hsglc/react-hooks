import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { AuthContextProdiver } from "./store/auth-content";

ReactDOM.render(
  <AuthContextProdiver>
    <App />{" "}
  </AuthContextProdiver>,
  document.getElementById("root")
);
