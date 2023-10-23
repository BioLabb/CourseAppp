import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";

import Home from "./component/layout/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/layout/login";
import Sign from "./component/layout/Sign";
import Course from "./component/layout/Course";
import Header from "./component/layout/Header";
import CourseBuy from "./component/layout/CourseBuy";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <div>
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/login" Component={Login} />
      <Route path="/signup" Component={Sign} />
      <Route path="/course" Component={Course} />
      <Route path="/coursebuy" Component={CourseBuy} />
    </Routes>
  </BrowserRouter>
  </div>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
