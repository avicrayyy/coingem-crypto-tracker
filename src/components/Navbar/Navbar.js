import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, Button, Menu, MenuItem } from "@material-ui/core";
import { useSelector } from "react-redux";
import "./Navbar.css";

// redux
import { selectUser } from "../../redux/userSlice";

const Navbar = () => {
  const user = useSelector(selectUser);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-left">
          <div className="logo">
            <h3>CoinGem</h3>
          </div>
          <div className="nav-row">
            <div className="nav-item">
              <Link to="/">Home</Link>
            </div>
            <div className="nav-item">
              <Link to="/watchlist">Watchlist</Link>
            </div>
          </div>
        </div>
        <div className="nav-right">
          {!user ? (
            <Button>Sign In</Button>
          ) : (
            <Avatar
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            />
          )}
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
  );
};

export default Navbar;
