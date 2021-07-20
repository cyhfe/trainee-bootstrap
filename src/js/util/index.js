import SelectorEngine from '../dom/selector-engine'
const isElement = (obj) => {
  if (!obj || typeof obj !== 'object') {
    return false
  }

  return typeof obj.nodeType !== 'undefined'
}

export const getElement = (obj) => {
  if (isElement(obj)) {
    return obj
  }

  if (typeof obj === 'string' && obj.length > 0) {
    return SelectorEngine.findOne(obj)
  }

  return null
}

const execute = (callback) => {
  if (typeof callback === 'function') {
    callback()
  }
}

const getTransitionDurationFromElement = (element) => {
  let { transitionDuration, transitionDelay } = window.getComputedStyle(element)
  return (
    (Number.parseFloat(transitionDuration) +
      Number.parseFloat(transitionDelay)) *
    1000
  )
}

export const executeAfterTransition = (callback, transitionElement) => {
  const durationPadding = 5
  const emulatedDuration =
    getTransitionDurationFromElement(transitionElement) + durationPadding
  setTimeout(() => {
    execute(callback)
  }, emulatedDuration)
}
