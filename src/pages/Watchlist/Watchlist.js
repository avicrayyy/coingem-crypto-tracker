import React, { useState, useEffect } from "react";
import axios from "axios";

// icons
import { Search, Cancel } from "@material-ui/icons";

// components
import Coin from "../../components/Coin/Coin";

const Watchlist = () => {
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

  const cancelSearch = () => {
    setSearch("");
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="coin-container">
      <h1 className="title">Watchlist</h1>
      <div className="search-container">
        <div className="search-coin-bar">
          <div className="coin-search">
            <Search />
            <form>
              <input
                onChange={handleChange}
                type="text"
                placeholder="Search"
                className="coin-input"
                value={search}
              />
            </form>
            {search && (
              <Cancel className="cancel-search" onClick={cancelSearch} />
            )}
          </div>
        </div>
      </div>
      {!search ? (
        <h2 className="title">All Coins</h2>
      ) : (
        <h2 className="title">Results for: "{search}"</h2>
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
  );
};

export default Watchlist;
