import {computed, observable} from 'mobx'

class Store {
  @observable hueVal = 0
  @observable satVal = 50
  @observable lightVal = 50

  x = (val) => {
    this.hueVal = val
  }

  y = function (val) {
    this.satVal = val
  }

  z = function (val) {
    this.lightVal = val
  }
}

const store = new Store()

window.store = store

export default store

  // @computed get
