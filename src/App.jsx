import Nav from "./Components/nav/Nav"
import "./App.css"
import { useState } from "react";
import Hero from "./Components/Hero/hero";
import About from "./Components/About/About";

function App() {

  const indicator = () => {
    const available = true;

    const availableData = ["#4ade80", "Available for Work"];
    const offlineData = ["#ef4444", "Not Available"];

    return available ? availableData : offlineData;
  };
  
  const [color, status] = indicator()

  return (
    <div className="app">
      <Nav color={color} status={status} />
      <Hero />
      <About/>
    </div>
  )
}

export default App