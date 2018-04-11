# calendar-set

Framework agnostic calendar components ([demo](https://ktsn.github.io/calendar-set/))

## Components

The components are implemented with [Svelte](https://svelte.technology/), so they can be used with [Svelte component API](https://svelte.technology/guide#component-api). The following is a simple example how you can use `DateCalendar` component.

```js
import { en, DateCalendar } from 'calendar-set'

// Set the locale object to the component
DateCalendar.setLocale(en)

// Instantiate the calendar component
const calendar = new DateCalendar({
  // Pass a DOM element which the component mount to
  target: document.querySelector('#calendar'),

  // Pass initial data of the component
  data: {
    selected: new Date()
  }
})

// Observe calendar events
calendar.on('select', selected => {
  console.log(selected)
})

// Set calendar data
calendar.set({
  selected: new Date(2018, 0, 1)
})

// Destroy the component
calendar.destroy()
```

All components have a static method `setLocale` to specify localized string shown in the calendar. You need to call the method before instantiating components. `calendar-set` provides built in locales `en` and `ja`.

If you want to use with [Vue.js](https://vuejs.org/), you may interested in [vue-svelte-adapter](https://github.com/ktsn/vue-svelte-adapter).

### DateCalendar

#### Data

```ts
{
  current: {
    year: number
    month: number
  }
  selected: Date | Date[] | undefined
  isHighlighted: (target: Date, selected: Date | Date[] | undefined) => boolean
  locale: Locale
}
```

#### Events

* `fire('select', selectedDate)`
* `fire('hover', hoveredDate)`

### DateRangeCalendar

Similar to DateCalendar but can be selected range of two date.

#### Data

```ts
{
  current: {
    year: number
    month: number
  }
  selected: Date | Date[] | undefined
  hovered: Date | undefined
  second: boolean // `true` if it is going to select the second date
  locale: Locale
}
```

#### Events

* `fire('select', selectedDate)`: `selectedDate` is an array and always sorted with ASC order by date.
* `fire('hover', hoveredDate)`

## Styles

There is a default style at `calendar-set/dist/calendar-set.css`. If you want to use it, import it by appropriate way of your project setup.

Example of webpack:

```js
// Import calendar default style
import 'calendar-set/dist/calendar-set.css'

// Import calendar component
import { DateCalendar, en } from 'calendar-set'

DateCalendar.setLocale(en)
```

Example loading from CDN:

```html
<!-- Import calendar default style -->
<link rel="stylesheet" href="https://unpkg.com/calendar-set/dist/calendar-set.css">

<!-- Import calendar script -->
<script src="https://unpkg.com/calendar-set"></script>
```

## License

MIT
