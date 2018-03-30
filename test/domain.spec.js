import { getMonthCalendar, equalsDate, lessThanDate } from '../src/domain'

describe('getMonthCalendar', () => {
  it('should return two dimensional array that represents a calendar of month', () => {
    const result = getMonthCalendar(2018, 4)
    const undef = undefined
    const d = n => new Date(2018, 4, n)

    /* eslint-disable no-multi-spaces */
    // prettier-ignore
    expect(result).toEqual([
      [undef, undef, d(1),  d(2),  d(3),  d(4),  d(5)],
      [d(6),  d(7),  d(8),  d(9),  d(10), d(11), d(12)],
      [d(13), d(14), d(15), d(16), d(17), d(18), d(19)],
      [d(20), d(21), d(22), d(23), d(24), d(25), d(26)],
      [d(27), d(28), d(29), d(30), d(31), undef, undef]
    ])
    /* eslint-enable no-multi-spaces */
  })

  it('should not generate empty row', () => {
    const result = getMonthCalendar(2018, 2)
    const undef = undefined
    const d = n => new Date(2018, 2, n)

    /* eslint-disable no-multi-spaces */
    // prettier-ignore
    expect(result).toEqual([
      [undef, undef, undef, undef, d(1),  d(2),  d(3)],
      [d(4),  d(5),  d(6),  d(7),  d(8),  d(9),  d(10)],
      [d(11), d(12), d(13), d(14), d(15), d(16), d(17)],
      [d(18), d(19), d(20), d(21), d(22), d(23), d(24)],
      [d(25), d(26), d(27), d(28), d(29), d(30), d(31)]
    ])
    /* eslint-enable no-multi-spaces */
  })
})

describe('equalsDate', () => {
  it('checks equality of dates', () => {
    const a = new Date(2018, 2, 30, 0, 12, 34)
    const b = new Date(2018, 2, 30, 12, 0, 0)
    const c = new Date(2018, 2, 29, 12, 0, 0)

    expect(equalsDate(a, b)).toBe(true)
    expect(equalsDate(a, c)).toBe(false)
    expect(equalsDate(b, c)).toBe(false)
  })
})

describe('lessThanDate', () => {
  it('compares the dates', () => {
    const a = new Date(2018, 2, 30, 0, 12, 34)
    const b = new Date(2018, 2, 30, 12, 0, 0)
    const c = new Date(2018, 2, 29, 12, 0, 0)
    const d = new Date(2017, 11, 20)

    expect(lessThanDate(a, b)).toBe(false)
    expect(lessThanDate(a, c)).toBe(false)
    expect(lessThanDate(c, a)).toBe(true)
    expect(lessThanDate(d, a)).toBe(true)
  })
})
