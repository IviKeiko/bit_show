import React from "react";

import { FaSearch } from "react-icons/fa";

const Header = ({ onChange }) => {
  return (
    <header>
      <h1>Shows</h1>
      <div>
        <input type="search" placeholder="search" onChange={onChange}></input>
        <FaSearch className="icon" icon="search" />
      </div>
    </header>
  );
};

export default Header;
