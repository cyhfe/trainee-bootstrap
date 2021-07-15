import SelectorEngine from "../dom/selector-engine"
const isElement = obj => {
  if (!obj || typeof obj !== 'object') {
    return false
  }

  return typeof obj.nodeType !== 'undefined'
}

export const getElement = obj => {
  if (isElement(obj)) { 
    return obj
  }

  if (typeof obj === 'string' && obj.length > 0) {
    return SelectorEngine.findOne(obj)
  } 

  return null
}
