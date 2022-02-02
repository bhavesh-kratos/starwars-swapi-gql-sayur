export const debounce = (callback, time = 300) => {
  let interval
  return (...args) => {
    clearTimeout(interval)
    interval = setTimeout(() => {
      interval = null
      callback(...args)
    }, time)
  }
}

export const flattenDetailsData = (data = {}) =>
  Object.entries(data).reduce((acc, [key, value]) => {
    if (key.includes('mapData')) {
      const newKey = Object.keys(value).find((k) => !k.includes('__typename'))
      return {
        ...acc,
        [newKey]: value[newKey]
      }
    }
    return {
      ...acc,
      [key]: value
    }
  }, {})

// console.log(flattenDetailsData())

export function retrieveDataAsMap(data) {
  return Object.values(data || []).reduce((acc, item) => {
    acc = acc.concat(item.data)
    return acc
  }, [])
}

export function titleUpperCase(word) {
  return word
    .replace('ID', 'Number')
    .split(/(?=[A-Z])/)
    .join(' ')
    .toUpperCase()
}
