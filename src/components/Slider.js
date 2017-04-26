import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { computed, observable } from 'mobx'

class Slider extends Component {
  _change = (event) => {
    this.props.change(event.target.value)
  }

  render () {
    return (
      <div>
        <input type='range' onChange={this._change} />
      </div>
    )
  }
}

export default Slider
