import React from "react";

function Hero() {
  return (
    <section class="hero is-large">
      <div class=" columns">
        <div class="column is-four-fifths">
          <img src="./img/spamain.png" alt="Spa-girls" />
        </div>
        <div class="column hero-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper
            feugiat nibh sed pulvinar proin. Sed vulputate mi sit amet mauris
            commodo quis imperdiet.
          </p>
          <h5 class="globe">Lorem ipsum dolor sit amet,</h5>
          <button class="button globe-btn is-outlined">Shop Now</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
