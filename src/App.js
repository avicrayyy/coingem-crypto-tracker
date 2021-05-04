import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

// components
import Navbar from "./components/Navbar/Navbar";

// pages
import Watchlist from "./pages/Watchlist/Watchlist";

function App() {
  return (
    <Router>
      <div className="coin-app">
        <Navbar />
        <Watchlist />
      </div>
    </Router>
  );
}

export default App;
