import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, createContext } from "react";

export const AppContext = createContext();

function App() {
  const [basket, setBasket] = useState([]);
  return (
    <div className="App">
      <AppContext.Provider value={{ basket, setBasket }}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
