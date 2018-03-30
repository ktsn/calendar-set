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
  locale: Locale
}
```

#### Events

* `fire('select', selectedDate)`

## License

MIT
