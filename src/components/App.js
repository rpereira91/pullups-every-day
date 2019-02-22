import React, { Component } from 'react';
import './style/App.css';
import "./DisplayDay"
import DisplayDay from './DisplayDay';
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

const day_pullups= [
  {
      "range":"0-5",
      "set":[2,4,3,3,3,5]
  },
  {
      "range":"6-10",
      "set":[2,4,3,3,3,5]
  },
  {
      "range":"11-15",
      "set":[2,4,3,3,3,5]
  },

]
export default App;
