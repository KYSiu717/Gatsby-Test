import React from 'react';
import Header from '../components/header.js';

export default () => (
  <div>
    <div style={{ color: 'teal' }}>
      <Header headerText="Kenny's place" />
      <Header headerText="Part Two" />
      <h1> About myself</h1>
      <p> I am pretty fucking awesome and I enjoy coding like a beast</p>
    </div>
    <div>
      <img
        src="https://wallpapercave.com/wp/wp2225607.jpg"
        style={{ width: '100%', 'max-width': '600px', 'max-height': '400px' }}
        alt="decorative text 2"
      />
    </div>
  </div>
);
