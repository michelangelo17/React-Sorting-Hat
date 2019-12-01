import React, { Component } from 'react'
import EmoGlobal from './emotionalThings/EmoGlobal'
import Welcome from './components/Welcome'

class App extends Component {
  constructor() {
    super()
    this.state = {
      gPoints: 0,
      rPoints: 0,
      hPoints: 0,
      sPoints: 0,
    }
  }
  render() {
    return (
    <>
      <EmoGlobal />
      <Welcome />
    </>)
  }
}

export default App
