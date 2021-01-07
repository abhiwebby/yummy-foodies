import React from "react";
import "./App.css";
import Home from "./components/Home";
import Footer from "./shared/Footer";
import Header from "./shared/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
