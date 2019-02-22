import React, { Component } from 'react';
import './style/App.css';
import "./DisplayDay"
import DisplayDay from './DisplayDay';
import * as pullups from "../data/pullups.json"
class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Select Strength Level</h2>
        {day_pullups.map((day) =>
          <div className="day">
            <DisplayDay workout={day} />
          </div>
            )}

      </div>
    );
  }
}
const day_pullups = pullups.ranges;

export default App;
