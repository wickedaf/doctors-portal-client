import React from "react";
import BusinessInfo from "../BusinessInfo/BusinessInfo";
import HeaderMain from "../HeaderMain/HeaderMain";
import HeaderNav from "../HeaderNav/HeaderNav";
import "./Header.css";


const Header = () => {
  return (
    <div className="header-container">
      <HeaderNav></HeaderNav>
      <HeaderMain></HeaderMain>
      <BusinessInfo></BusinessInfo>
    </div>
  );
};

export default Header;
