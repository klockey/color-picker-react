import React, { Component } from 'react'
import Slider from './Slider'

class App extends Component {
  state = {
    hueVal: 0,
    satVal: 50,
    lightVal: 50
  }

  x = (val) => {
    this.setState({
      hueVal: val
    })
  }

  y = (val) => {
    this.setState({
      satVal: val
    })
  }

  z = (val) => {
    this.setState({
      lightVal: val
    })
  }

  render () {
    const color = `hsl(${this.state.hueVal}, ${this.state.satVal}%, ${this.state.lightVal}%)`
    return (
      <div className='container'>
        <div className='swatch' style={{backgroundColor: color}} />
        <div className='number'>{color}</div>
        <Slider change={this.x} />
        <Slider change={this.y} />
        <Slider change={this.z} />
      </div>
    )
  }
}

export default App
