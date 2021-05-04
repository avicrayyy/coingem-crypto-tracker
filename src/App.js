import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";

// components
import Navbar from "./components/Navbar/Navbar";

// pages
import Watchlist from "./pages/Watchlist/Watchlist";
import HomePage from "./pages/HomePage/HomePage";
import CoinPage from "./pages/CoinPage/CoinPage";

function App() {
  return (
    <Router>
      <div className="coin-app">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/watchlist">
            <Watchlist />
          </Route>
          <Route path="/watchlist/coin">
            <CoinPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
