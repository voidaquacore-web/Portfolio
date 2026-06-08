import Nav from "./Components/nav/Nav"
import "./App.css"

function App() {

 const indicator = () => {
  const available = true;

  const availableData = ["#4ade80", "Available for Work"];
  const offlineData = ["#ef4444", "Not Available"];

  return available ? availableData : offlineData;
};

const [color, status] = indicator()

  return(
    <div className="app">
    <Nav color={color} status={status}/>
    </div>
  )
}

export default App