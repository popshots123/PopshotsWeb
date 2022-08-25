import React, { Component } from "react";
import "./App.css";
import { BrowserRouter,HashRouter, Route, Routes } from "react-router-dom";

import Home from "./views/home/home";
import About from "./views/about/about"
import AddFriends from "./views/addFriends/addFriends";

export default class App extends Component {
  render() {
    return (
      <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/*" element={<AddFriends />}></Route>
      </Routes>
    </HashRouter>
    );
  }
}
