import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "App";

//import { AuthProvider } from "./auth-context/auth.context";

//let user = localStorage.getItem("user");
//user = JSON.parse(user);

ReactDOM.render(
  // <AuthProvider userData={user}>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  // </AuthProvider>,
  document.getElementById("root")
);
