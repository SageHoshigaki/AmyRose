import React from "react";

function Nav() {
  return (
    <section>
      <div class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item logo" href="/">
            Amy Rose
          </a>
        </div>

        <div class="navbar-end end-bar">
          <a class="navbar-item spa-out" href="/">
            Home
          </a>
          <a class="navbar-item spa-out" href="about">
            About
          </a>
          <a class="navbar-item spa-out" href="contact">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}

export default Nav;
