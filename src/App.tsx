import React, { Component } from "react";
import Dashboard from "./dashboard/Dashboard";
import Footer from "./shared/Footer";
import Header from "./shared/Header";
import MainRouter from "./routes/MainRouter";
import "./App.css";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <MainRouter />
      </div>
    );
  }
}

export default App;
