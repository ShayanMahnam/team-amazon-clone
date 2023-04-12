import React from "react";
import StorefrontIcon from "@mui/icons-material/Storefront";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header_logo">
        <StorefrontIcon className="header_logoImage" fontSize="large" />
        <h2 className="header_logoTitle">eSHOP</h2>
      </div>
    </div>
  );
}

export default Header;
