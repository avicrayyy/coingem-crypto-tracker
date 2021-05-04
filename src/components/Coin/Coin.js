import React from "react";

const Coin = ({ name, imagge, symbol, price, volume }) => {
  return (
    <div className="cointainer">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="coin" />
          <h1>{name}</h1>
        </div>
        <div className="coin-data">
          <p className="coin-price">${price}</p>
          <p className="coin-volume">${volume.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
