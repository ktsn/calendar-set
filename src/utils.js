export function range(len) {
  return Array.apply(null, Array(len)).map((_, i) => i)
}

export function accumlateWhile(fn, condition) {
  const res = []
  let i = 0
  let current
  while (condition(current, i)) {
    current = fn(current, i)
    res.push(current)
    i++
  }
  return res
}

export function format(str, ...values) {
  const placeholderRE = /\{(\d+)\}/g
  const escapedRE = /\\\{(\d+)\\\}/g

  return str
    .replace(placeholderRE, (_, index) => {
      const i = Number(index)
      const value = values[i] || ''
      return value
    })
    .replace(escapedRE, (_, index) => {
      return '{' + index + '}'
    })
}
