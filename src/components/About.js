import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div id="about">
    <h2>About Me</h2>
    <p>
      I reallly love coding of late and I want to be the best programmer Kenya can afford to solve as many logical problems as possible.
    </p>
    <img src={image} alt="I made this"></img>

  </div>
  );
}

export default About;
