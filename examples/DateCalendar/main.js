import { en, DateCalendar } from '../../src'

new DateCalendar({
  target: document.getElementById('app'),
  data: {
    locales: en
  }
})
