import React from "react";
import "./App.css";

// components
import Navbar from "./components/Navbar/Navbar";

// pages
import Watchlist from "./pages/Watchlist/Watchlist";

function App() {
  return (
    <div className="coin-app">
      <Navbar />
      <Watchlist />
    </div>
  );
}

export default App;
