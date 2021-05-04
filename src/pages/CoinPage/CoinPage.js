import React from "react";
import { IconButton } from "@material-ui/core";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import "./CoinPage.css";

// icons
import { ArrowDropUp, ArrowDropDown, ArrowBack } from "@material-ui/icons";

// reducers
import { selectOpenCoin } from "../../redux/coinSlice";

const CoinPage = () => {
  const history = useHistory();
  const selector = useSelector(selectOpenCoin);
  return (
    <div className="coinpage">
      <h1 className="title">
        <IconButton onClick={() => history.push("/watchlist")}>
          <ArrowBack />
        </IconButton>{" "}
        Coin Info
      </h1>
      <div className="coin-intro">
        <div className="coin-left">
          <img
            className="coin-img"
            src={selector?.image}
            alt={selector?.symbol}
          />
          <div className="coin-name">
            <h2>{selector?.name}</h2>
            <p>{selector?.symbol.toUpperCase()}</p>
          </div>
        </div>
        <div
          className={`coin-right ${selector.priceChange < 0 ? "red" : "green"}`}
        >
          <div className="coin-current">${selector?.price}</div>
          {selector.priceChange < 0 ? <ArrowDropDown /> : <ArrowDropUp />}
          <div className="coin-percentage-24h">{selector?.priceChange}%</div>
        </div>
      </div>
      <div className="coin-stats">
        <div className="row">
          <div className="row-item">
            <p>Cap Rank</p>
            <p className="data">{selector?.rank}</p>
          </div>
          <div className="row-item">
            <p>Market Cap</p>
            <p className="data">{selector?.marketCap}</p>
          </div>
          <div className="row-item">
            <p>Total Volume</p>
            <p className="data">{selector?.volume}</p>
          </div>
        </div>
        <div className="row">
          <div className="row-item">
            <p>24h High</p>
            <p className="data">${selector?.high}</p>
          </div>
          <div className="row-item">
            <p>24h Low</p>
            <p className="data">${selector?.low}</p>
          </div>
          <div className="row-item">
            <p>Total Supply</p>
            <p className="data">{selector?.totalSupply}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinPage;
