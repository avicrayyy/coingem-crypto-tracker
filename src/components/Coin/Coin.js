import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import "./Coin.css";

// redux
import { selectCoin } from "../../redux/coinSlice";
import { selectUser } from "../../redux/userSlice";
import { StarBorder } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

const Coin = ({
  key,
  name,
  image,
  symbol,
  price,
  marketCap,
  volume,
  priceChange,
  rank,
  totalSupply,
  circulatingSupply,
  high,
  low,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const openCoin = () => {
    dispatch(
      selectCoin({
        key,
        name,
        image,
        symbol,
        price,
        marketCap,
        volume,
        priceChange,
        rank,
        totalSupply,
        circulatingSupply,
        high,
        low,
      })
    );
    history.push("/watchlist/coin");
  };
  return (
    <div className="cointainer" onClick={() => openCoin()}>
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
        {user ? (
          <IconButton>
            <StarBorder />
          </IconButton>
        ) : null}
      </div>
    </div>
  );
};

export default Coin;
