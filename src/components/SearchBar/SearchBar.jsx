import React from "react";
import styles from "./SearchBar.module.scss";

const SearchBar = (props) => {
  return (
    <>
      <input type="text" placeholder="Search City, Region, or Country " onInput={(e) => props.updateSearch(e.target.value)}/>
    </>
  );
};

export default SearchBar;
