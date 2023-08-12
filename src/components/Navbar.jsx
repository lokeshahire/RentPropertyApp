import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  FormControl,
  Select,
  MenuItem,
} from "@material-ui/core";
import "./Navbar.css"; // Import your CSS file for styling

const Navbar = () => {
  return (
    <AppBar className="white-background">
      <Toolbar className="navbar">
        <img
          src="https://reunion-one.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F748fea00-f7a6-4f16-9843-943f85f961f1%2F500x500_-_reunion_-_vertical.jpg?table=block&id=f27efe94-66af-463f-929d-aee58ea42536&spaceId=ca71608c-1cc3-4167-857a-24da97c78717&width=250&userId=&cache=v2"
          alt="Logo"
          className="logo"
        />
        <p className="nav-link">Rent</p>
        <p className="nav-link">Buy</p>
        <p className="nav-link">Sell</p>
        <button className="loginBtn">Login</button>
        <button className="signBtn">Sign up</button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
