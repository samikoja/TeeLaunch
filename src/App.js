import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Input from "./components/input/Input";
import CanvasImage from "./components/canvas/CanvasImage";

function App() {
  return (
    <div className="App">
      <Header />
      <Input />
      <CanvasImage />
    </div>
  );
}

export default App;
