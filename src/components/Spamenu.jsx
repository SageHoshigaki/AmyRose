import React from "react";

function Spamenu() {
  return (
    <section>
      <div class="spa-sec">
        <div className="columns">
          <div className="column spa-text has-text-centered">
            <h3 className="mes-one">Lorem Ipsum</h3>
            <h1 class=" mes-one">Blah Blah Blah</h1>
            <p class=" mes-one">
              whole bunch of blah blah blah blah<br></br>blah blah blah blah
            </p>
          </div>
          <div className="column">
            <img src="./img/Spapic.png" alt="spa-pic" />
          </div>
          <div></div>
        </div>
        <div className="columns ">
          <div className="column spa-menu">
            <div className="box spa-ser has-text-centered">
              <h1>Hello</h1>
              <h1>Service</h1>
              <h1>Lorem Ipsum</h1>
              <h1>Lorem Ipsum</h1>
              <p>$100</p>
            </div>
          </div>
          <div className="column spa-menu ">
            <div className="box spa-ser has-text-centered">
              <h1>Hello</h1>
              <h1>Service</h1>
              <h1>Lorem Ipsum</h1>
              <h1>Lorem Ipsum</h1>
              <p>$100</p>
            </div>
          </div>
          <div className="column spa-menu">
            <div className="box spa-ser has-text-centered">
              <h1>Hello</h1>
              <h1>Service</h1>
              <h1>Lorem Ipsum</h1>
              <h1>Lorem Ipsum</h1>
              <p>$100</p>
            </div>
          </div>
        </div>
        <button
          id="spa-btn"
          class="button spa-btn is-rounded is-outlined is-black"
        >
          Treatment Menu
        </button>
      </div>
    </section>
  );
}

export default Spamenu;
