import React, { Component } from 'react'
import './style/App.css';
import MediaQuery from 'react-responsive';

export default class DisplaySets extends Component {
  render() {
    return (
      <div>
        <MediaQuery minDeviceWidth={1224}>
        {this.props.set.map((reps, index) => 
              <div className='set'>
              Set: {index+1} : {reps}
              </div>
            )}
        </MediaQuery>
        <MediaQuery minDeviceWidth={480}>
          <div>You are portrait</div>
      </MediaQuery>
      </div>
    )
  }
}
