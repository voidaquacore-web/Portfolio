import { useState } from "react";
import Nav from "./Components/nav/Nav"
import Hero from "./Components/Hero/hero";
import About from "./Components/About/About";
import Footer from "./Components/Footer/footer";
import "./App.css"

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
      <Footer/>
    </div>
  )
}

export default App