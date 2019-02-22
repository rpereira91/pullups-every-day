import React, { Component } from 'react'
import './style/App.css';
import DisplaySets from "./DisplaySets";
export default class DisplayDay extends Component {
  constructor(props) {
    super(props);
    this.state = {displaySets: false};

    // This binding is necessary to make `this` work in the callback
    this.setClicked = this.setClicked.bind(this);
  }
  setClicked(){
    this.setState(state => ({
      displaySets: !state.displaySets
    }));
  }
  render() {
    return (
      <div onClick={this.setClicked}>
          <h3>
              Number of reps: {this.props.workout.range}
          </h3>
          <div className='set-container'>
          {this.state.displaySets ? <DisplaySets set = {this.props.workout.set} /> : "Click to expand"}
            
          </div>
      </div>
    )
  }
}
