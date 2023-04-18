import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, createContext } from "react";

export const AppContext = createContext;

function App() {
    const [ basket, setbasket] = useState([]);
  return (
    <div className="App">
      <AppContext.provider value={{ basket, setbasket}}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </Router>
      </AppContext.provider>
    </div>
  );
}

export default App;
