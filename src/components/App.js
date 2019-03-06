import React, { Component } from 'react';
import './style/App.css';
import "./DisplayDay"
import DisplayDay from './DisplayDay';
import * as pullups from "../data/pullups.json";
import ms from 'pretty-ms';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      time: 0,
      isOn: false,
      start: 0
    }
    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
  }
  
  startTimer() {
    this.setState({
      isOn: true,
      time: this.state.time,
      start: Date.now() - this.state.time
    })
    this.timer = setInterval(() => this.setState({
      time: Date.now() - this.state.start
    }), 1);
  }
  stopTimer() {
    this.setState({isOn: false})
    clearInterval(this.timer)
  }
  resetTimer() {
    this.setState({time: 0, isOn: false})
  }
  render() {
    let start = (this.state.time === 0) ?
    <button onClick={this.startTimer}>start</button> :
    null
    let stop = (this.state.time === 0 || !this.state.isOn) ?
      null :
      <button onClick={this.stopTimer}>stop</button>
    let resume = (this.state.time === 0 || this.state.isOn) ?
      null :
      <button onClick={this.startTimer}>resume</button>
    let reset = (this.state.time === 0 || this.state.isOn) ?
      null :
      <button onClick={this.resetTimer}>reset</button>
    return (
      <div className="App">
        <h2>Select Strength Level</h2>

        {day_pullups.map((day) =>
          <div className="day">
            <DisplayDay workout={day} />
          </div>
            )}
      <div>
        <h2>timer: {ms(this.state.time)}</h2>
          {start}
          {resume}
          {stop}
          {reset}
      </div>
      </div>
    );
  }
}
const day_pullups = pullups.ranges;

export default App;
