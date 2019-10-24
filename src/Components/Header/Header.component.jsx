import React from "react";
import "./Header.styles.css";
import HeaderItem from "../HeaderItem/HeaderItem.component";

const Header = props => {
  return (
    <div className="navbar position-sticky">
      <div className="col-4 text-center">
        <a className="navbar-brand" id="brand" href='/'>
          Memory Game
        </a>
      </div>
      <div className="col-4 text-center">
        <HeaderItem />
      </div>
      <div className="col-4">
        <HeaderItem itemName='score'/>
      </div>
    </div>
  );
};

export default Header;
