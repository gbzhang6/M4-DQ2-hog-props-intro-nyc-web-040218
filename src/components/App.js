import React, { Component } from 'react'
import MasterHog from '../containers/MasterHog'
import offspring from '../db.js'
import '../App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      offspring: {offspring}
    }
  }

  render() {
    return (
      <div className="App">
        <MasterHog list={this.state.offspring} />
      </div>
    )
  }

}

export default App
