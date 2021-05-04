import React from "react";
import "./Coin.css";

const Coin = ({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketCap,
}) => {
  return (
    <div className="cointainer">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="coin" />
          <h3>{name}</h3>
        </div>
        <div className="coin-data">
          <p className="coin-price">${price}</p>
          <p className="coin-volume">${volume.toLocaleString()}</p>
          <p className={`coin-percent ${priceChange < 0 ? "red" : "green"}`}>
            {priceChange.toFixed(2)}%
          </p>
          <p className="coin-market-cap">
            Mkt Cap: ${marketCap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
