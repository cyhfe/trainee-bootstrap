const EventHandler = {
  on(element, event, handler) {
    element.addEventListener(event, handler)
  },
  one() {},
  off() {},
  trigger(element, event) {
    let evt = null
    let bubbles = true
    evt = new CustomEvent(event, {
      bubbles,
      cancelable: true,
    })
    element.dispatchEvent(evt)
    return evt
  },
}

export default EventHandler