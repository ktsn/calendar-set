import { accumlateWhile, range } from './utils'

const WEEK_DAYS_NUM = 7
const SUNDAY = 0

export function getMonthCalendar(year, month) {
  const target = new Date(year, month, 1)
  const offsetOfFirstDate = SUNDAY - target.getDay()

  return accumlateWhile(
    (prev, i) => {
      const weekOffset = WEEK_DAYS_NUM * i
      return range(WEEK_DAYS_NUM).map(dayOffset => {
        const res = new Date(
          year,
          month,
          offsetOfFirstDate + weekOffset + dayOffset + 1
        )

        return equalsMonth(res, year, month) ? res : undefined
      })
    },
    prev => {
      if (!prev) return true

      const last = prev[WEEK_DAYS_NUM - 1]
      if (!last) return false

      return equalsMonth(last, year, month)
    }
  )
}

function equalsMonth(date, year, month) {
  return date.getFullYear() === year && date.getMonth() === month
}
