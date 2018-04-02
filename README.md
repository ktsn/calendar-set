# calendar-set

Framework agnostic calendar components

## Components

All components have a static method `setLocale` to specify localized string shown in the calendar. You need to call the method before instantiating components. `calendar-set` provides built in locales `en` and `ja`.

```js
import { en, DateCalendar } from 'calendar-set'

// Set the locale object to the component
DateCalendar.setLocale(en)
```

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
