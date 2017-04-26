import React, { Component } from 'react'
import Slider from './Slider'
import { observer } from 'mobx-react'
// import { observable } from 'mobx'
import store from '../store'

@observer class App extends Component {
  render () {
    const color = `hsl(${store.hueVal}, ${store.satVal}%, ${store.lightVal}%)`
    return (
      <div className='container'>
        <div className='swatch' style={{backgroundColor: color}} />
        <div className='number'>{color}</div>
        <Slider change={store.x} />
        <Slider change={store.y} />
        <Slider change={store.z} />
      </div>
    )
  }
}

export default App
