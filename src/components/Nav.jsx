import React from "react";

function Nav() {
  return (
    <section>
      <div class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item logo">Amy Rose</a>
        </div>

        <div class="navbar-end end-bar">
          <a class="navbar-item spa-out">Home</a>
          <a class="navbar-item spa-out">About</a>
          <a class="navbar-item spa-out">Contact</a>
        </div>
      </div>
    </section>
  );
}

export default Nav;
