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
