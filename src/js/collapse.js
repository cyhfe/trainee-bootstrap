import BaseComponent from './base-components'
import EventHandler from './dom/event-handler'

// 常量
const CLASS_NAME_SHOW = 'show'
const CLASS_NAME_COLLAPSE = 'collapse'
const CLASS_NAME_COLLAPSING = 'collapsing'
const CLASS_NAME_COLLAPSED = 'collapsed'
const CLASS_NAME_HORIZONTAL = 'collapse-horizontal'

const EVENT_KEY = '.bs.collapse'
const EVENT_SHOW = `show${EVENT_KEY}`
const EVENT_SHOWN = `shown${EVENT_KEY}`
const EVENT_HIDE = `hide${EVENT_KEY}`
const EVENT_HIDDEN = `hidden${EVENT_KEY}`

const Default = {
  toggle: true,
  parent: '',
}

export default class Collapse extends BaseComponent {
  constructor(element) {
    super(element)

    this._isTransitioning = false
    this._config = Default
    if (this._config.toggle) {
      this.toggle()
    }
  }

  toggle() {
    if (this._element.classList.contains(CLASS_NAME_SHOW)) {
      this.hide()
    } else {
      this.show()
    }
  }

  show() {
    if (
      this._isTransitioning ||
      this._element.classList.contains(CLASS_NAME_SHOW)
    ) {
      return
    }

    const startEvent = EventHandler.trigger(this._element, EVENT_SHOW)

    this._element.classList.remove(CLASS_NAME_COLLAPSE)
    this._element.classList.add(CLASS_NAME_COLLAPSING)

    this._element.style['height'] = 0

    this.setTransitioning(true)
    this._element.style['height'] = `${this._element['scrollHeight']}px`

    const complete = () => {
      this._element.classList.remove(CLASS_NAME_COLLAPSING)
      this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW)
      this._element.style['height'] = ''

      this.setTransitioning(false)
      EventHandler.trigger(this._element, EVENT_SHOWN)
    }
    this._queueCallback(complete, this._element)
  }

  hide() {
    if (
      this._isTransitioning ||
      !this._element.classList.contains(CLASS_NAME_SHOW)
    ) {
      return
    }

    EventHandler.trigger(this._element, EVENT_HIDE)

    this._element.style['height'] = `${
      this._element.getBoundingClientRect()['height']
    }px`

    this._element.classList.add(CLASS_NAME_COLLAPSING)
    this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW)

    void this._element.offsetHeight //reflow 设定动画的初始状态

    this.setTransitioning(true)

    this._element.style['height'] = ''

    const complete = () => {
      this.setTransitioning(false)
      this._element.classList.remove(CLASS_NAME_COLLAPSING)
      this._element.classList.add(CLASS_NAME_COLLAPSE)
      EventHandler.trigger(this._element, EVENT_HIDDEN)
    }
    this._queueCallback(complete, this._element)
  }

  setTransitioning(isTransitioning) {
    this._isTransitioning = isTransitioning
  }
}
