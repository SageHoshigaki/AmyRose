import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Product from "./components/Product";
import Descript from "./components/Descript";
import Spamenu from "./components/Spamenu";
import GirlGroup from "./components/GirlGroup";
import Subscribe from "./components/Subscribe";

function Main() {
  return (
    <div className="Main">
      <Nav />
      <Hero />
      <Product />
      <Descript />
      <Spamenu />
      <GirlGroup />
      <Subscribe />
    </div>
  );
}

export default Main;
