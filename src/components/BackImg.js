import React from "react";

export default function BackImg() {
  return (
    <div className="img">
      <span className="login">Login</span>
      <span className="account">Create an account</span>
      <h1 className="circle-img">e!</h1>
      <div className="heading-content">
        <h1>Find the best restaurants, cafes and bars.</h1>
        <select name="please type a location" id="location">
          <option value="">Please select a location</option>
          <option value="Sarajpur,Bengaluru">Sarajpur,Bengaluru</option>
          <option value="HSR Layout, Bengaluru">HSR Layout, Bengaluru </option>
          <option value="Kormangala, Bengaluru">Kormangala, Bengaluru</option>
          <option value="Jay Nagar, Bengaluru">Jay Nagar, Bengaluru</option>
        </select>
        <select name="Search for restaurants" id="restaurants">
          <option value="">Search for restaurants</option>
          <option value="The Big Chill Cakery">The Big Chill Cakery</option>
          <option value="Punjabi Rasoi">Punjabi Rasoi </option>
          <option value="Punjabi Rasoiu">Punjabi Rasoi</option>
        </select>
      </div>
    </div>
  );
}
