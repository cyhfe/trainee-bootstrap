import { getElement } from "./util/index"


export default class BaseComponent {
  constructor(element) {
    element = getElement(element)
    if(!element) {
      return
    }
    this._element = element
  }
  _queueCallback() {
    
  }
}