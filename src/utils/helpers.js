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

export function retrieveDataAsMap(data) {
  return Object.values(data || []).reduce((acc, item) => {
    acc = acc.concat(item.data)
    return acc
  }, [])
}
