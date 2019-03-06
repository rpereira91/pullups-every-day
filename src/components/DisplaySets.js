import React, { Component } from 'react'
import './style/App.css';
export default class DisplaySets extends Component {

  render() {


    return (
      <div>

        {this.props.set.map((reps, index) => 
              <div className='set'>
              Set: {index+1} : {reps}
              </div>
            )}
      </div>
    )
  }
}
