import React from "react";


export default function Cakery() {
  return (
    <div className="cakery">
      <div>
        <img src="./assets/breakfast2.png" alt="img" />
        <h1>The Big Chill Cakery</h1>
      </div>
      <div className="middle-section">
        <span>Overview</span>
        <span>Contacts</span>
        <button>Place Online Order</button>
      </div>
      <hr/>
      <div className="over-view">
        <h2>About this Place</h2>
        <h4>Cuisine</h4>
        <p>Bakery, Fast-food</p>
        <h4>Average Cost</h4>
        <p>₹700 for two people (approx.)</p>
      </div>
    </div>
  );
}
