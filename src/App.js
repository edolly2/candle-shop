import "./App.css";

import React, { useState } from "react";

import { MdClose } from "react-icons/md";
import ShoppingCartHover from "./_components/ShoppingCartHover";
import StoreHeader from "./_components/StoreHeader";

function App() {
  const [searchBarActive, setSearchBarActive] = useState(false);
  const [cartMenuActive, setCartMenuActive] = useState(false);
  return (
    <div className="store">
      <ShoppingCartHover
        shoppingCartMenu={{ display: cartMenuActive ? "block" : "none" }}
      />
      <div
        className="overlay"
        style={{ display: searchBarActive ? "flex" : "none" }}
      >
        <div className="search-bar-close">
          <MdClose
            onClick={() => {
              setSearchBarActive(false);
            }}
          />
        </div>
        <div className="search-input-cont">
          <p>I am looking for....</p>
          <input type="search" />
          <div className="search-input-btn-group">
            <button className="btn" type="submit">
              Search
            </button>
            <button
              className="btn"
              onClick={() => {
                setSearchBarActive(false);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
      <StoreHeader
        searchIconClick={() => {
          setSearchBarActive(true);
        }}
        cartIconClick={() => {
          setCartMenuActive(true);
        }}
      />
      <div className="horizontal-break"></div>
      <div style={{ display: "flex" }}>
        <h1>HELLO</h1>
        <div className="vertical-break"></div>
        <h1>HELLO</h1>
      </div>
    </div>
  );
}

export default App;
