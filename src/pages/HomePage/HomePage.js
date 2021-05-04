import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
import "./HomePage.css";

const HomePage = () => {
  const history = useHistory();

  return (
    <div className="homepage">
      <div className="homepage-container">
        <h1>CoinGem</h1>
        <p>
          Keep track of the cryptomarket and see details of your favorite
          cryptocurrency
        </p>
        <Button onClick={() => history.push("/watchlist")}>
          See Watchlist
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
