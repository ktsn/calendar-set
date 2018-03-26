import { en, DateCalendar } from '../../src'

const normal = new DateCalendar({
  target: document.getElementById('normal'),
  data: {
    locales: en,
    selected: new Date()
  }
})

normal.on('select', selected => {
  normal.set({
    selected
  })
})
