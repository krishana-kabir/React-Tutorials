import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import RefDemo from "./Component/RefDemo";
import Api from "./Component/Api";

function App() {
  return (
    <div className="App">
      <RefDemo></RefDemo>
      <Api></Api>
    </div>
  );
}

export default App;
