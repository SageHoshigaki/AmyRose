import React from "react";
import Nav from "../components/Nav";
function About() {
  return (
    <div>
      <Nav />
      <div className="columns about-sec">
        <div class="column">
          <img class="about-img" src="./img/MainAbout.jpg" alt="About-main" />
        </div>
      </div>
      <div class="about-mes has-text-centered">
        <h1>Blah Blah Welcome</h1>
        <p class="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}

export default About;
