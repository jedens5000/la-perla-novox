import React from "react";
import logo from "../../src/images/laperla-logo.png";

export default function Home() {
  return (
    <div className="home-container pt-5">
      <img className="logo-sm" src={logo} alt="restuarant logo" />
      <h1 className="home-title">
        Welcome to La Perla Ristoante&nbsp;Italiano
      </h1>
      <h3>Call now for reservations: (754)&nbsp;222&#8209;9174</h3>
    </div>
  );
}
