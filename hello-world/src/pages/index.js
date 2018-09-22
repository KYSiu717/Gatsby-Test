import React from 'react';
import { Link } from 'gatsby';
// import Typography from "typography"

// const typography = new Typography({
//   baseFontSize: "18px",
//   baseLineHeight: 1.45,
//   headerFontFamily: [
//     "Avenir Next",
//     "Helvetica Neue",
//     "Segoe UI",
//     "Helvetica",
//     "Arial",
//     "sans-serif",
//   ],
//   bodyFontFamily: ["Georgia", "serif"],
// })

export default () => (
  <div style={{ color: 'purple' }}>
    <Link to="/about">More about me my doogle!</Link> <br />
    <Link to="/contact/">Contact me man!</Link>
    <h1>Hello from the other Great Gatsby!</h1>
    <p>What a wonderful life</p>
    <img
      src="https://source.unsplash.com/random/600x200"
      alt="decorative text"
    />
    <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
      <h1>Richard Hamming on Luck</h1>
      <div>
        <p>
          From Richard Hamming’s classic and must-read talk, “
          <a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
            You and Your Research
          </a>
          ”.
        </p>
        <blockquote>
          <p>
            There is indeed an element of luck, and no, there isn’t. The
            prepared mind sooner or later finds something important and does it.
            So yes, it is luck.{' '}
            <em>
              The particular thing you do is luck, but that you do something is
              not.
            </em>
          </p>
        </blockquote>
      </div>
      <p>Posted April 09, 2011</p>
    </div>
  </div>
);
