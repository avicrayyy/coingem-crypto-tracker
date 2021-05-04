import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { Avatar, Menu, MenuItem, TablePagination } from "@material-ui/core";
import { Search } from "@material-ui/icons";

// components
import Coin from "./components/Coin/Coin";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="coin-app">
      <nav>
        <div className="nav-container">
          <div className="nav-left">
            <h3>CoinGem</h3>
          </div>
          <div className="nav-middle">
            <div className="coin-search">
              <Search />
              <form>
                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="Search"
                  className="coin-input"
                />
              </form>
            </div>
          </div>
          <div className="nav-right">
            <Avatar
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            />
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Settings</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        </div>
      </nav>
      <div className="coin-container">
        {!search ? (
          <h1 className="title">All Coins</h1>
        ) : (
          <h1 className="title">Results for: "{search}"</h1>
        )}
        {filteredCoins.map((coin) => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              price={coin.current_price}
              marketCap={coin.market_cap}
              priceChange={coin.price_change_percentage_24h}
              volume={coin.total_volume}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
