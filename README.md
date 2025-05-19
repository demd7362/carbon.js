# php-carbon.js

A JavaScript date manipulation library inspired by PHP's Carbon, providing a simple and intuitive API for working with dates and times.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Methods](#methods)
    - [Creation Methods](#creation-methods)
    - [Getter Methods](#getter-methods)
    - [Manipulation Methods](#manipulation-methods)
    - [Comparison Methods](#comparison-methods)
    - [Formatting Methods](#formatting-methods)
    - [Utility Methods](#utility-methods)
- [Contributing](#contributing)
- [License](#license)

## Installation
Install the library via npm:

```bash
npm install php-carbon.js
```

Or include it directly in your project:

```javascript
import Carbon from 'php-carbon.js';
```

## Usage
Create a new Carbon instance and use its methods to manipulate and query dates:

```javascript
const Carbon = require('php-carbon.js');

// Create a new Carbon instance for the current date and time
const now = Carbon.now();
console.log(now.format('Y-m-d H:i:s')); // e.g., "2025-05-19 20:45:00"

// Create a specific date
const date = Carbon.createFromDate(2023, 12, 25);
console.log(date.format('Y-m-d')); // "2023-12-25"

// Add days and get human-readable difference
const future = date.addDays(10);
console.log(future.diffForHumans()); // "in 10 days"
```

## Features
- **Simple Date Creation**: Create dates from various inputs (strings, numbers, Date objects).
- **Fluent Manipulation**: Add or subtract years, months, days, hours, minutes, and seconds.
- **Comparison**: Compare dates to check if they are before, after, or equal to another date.
- **Formatting**: Format dates using a simple syntax inspired by PHP's Carbon.
- **Human-Readable Differences**: Get time differences in a human-friendly format (e.g., "2 days ago").
- **Utility Methods**: Check for leap years, weekdays, weekends, and more.

## Methods

### Creation Methods
- `Carbon.now()`: Creates a Carbon instance for the current date and time.
- `Carbon.parse(date)`: Creates a Carbon instance from a string, number, or Date object.
- `Carbon.make(date)`: Alias for `parse`.
- `Carbon.today()`: Creates a Carbon instance for today at midnight.
- `Carbon.tomorrow()`: Creates a Carbon instance for tomorrow at midnight.
- `Carbon.yesterday()`: Creates a Carbon instance for yesterday at midnight.
- `Carbon.createFromDate(year, month, day)`: Creates a Carbon instance for a specific date.
- `Carbon.createFromTime(hour, minute, second)`: Creates a Carbon instance for a specific time today.
- `Carbon.createFromDateTime(year, month, day, hour, minute, second)`: Creates a Carbon instance for a specific date and time.

### Getter Methods
- `year()`: Returns the year (e.g., 2025).
- `month()`: Returns the month (1-12).
- `day()`: Returns the day of the month (1-31).
- `hour()`: Returns the hour (0-23).
- `minute()`: Returns the minute (0-59).
- `second()`: Returns the second (0-59).
- `dayOfWeek()`: Returns the day of the week (0=Sunday, 6=Saturday).
- `dayOfYear()`: Returns the day of the year (1-366).
- `weekOfYear()`: Returns the ISO week number (1-53).
- `daysInMonth()`: Returns the number of days in the current month.

### Manipulation Methods
- `addDays(days)`, `subDays(days)`: Adds or subtracts days.
- `addMonths(months)`, `subMonths(months)`: Adds or subtracts months.
- `addYears(years)`, `subYears(years)`: Adds or subtracts years.
- `addHours(hours)`, `subHours(hours)`: Adds or subtracts hours.
- `addMinutes(minutes)`, `subMinutes(minutes)`: Adds or subtracts minutes.
- `addSeconds(seconds)`, `subSeconds(seconds)`: Adds or subtracts seconds.
- `startOfDay()`, `endOfDay()`: Sets the time to the start or end of the day.
- `startOfMonth()`, `endOfMonth()`: Sets the date to the start or end of the month.
- `startOfYear()`, `endOfYear()`: Sets the date to the start or end of the year.
- `startOfWeek()`, `endOfWeek()`: Sets the date to the start or end of the week (Monday-Sunday).
- `nextWeekday()`, `previousWeekday()`: Moves to the next or previous weekday.
- `nextOrSameDay(dayOfWeek)`, `previousOrSameDay(dayOfWeek)`: Moves to the next or previous occurrence of a specific day of the week.

### Comparison Methods
- `isSameDay(other)`, `isSameMonth(other)`, `isSameYear(other)`: Checks if two dates share the same day, month, or year.
- `isSameHour(other)`, `isSameMinute(other)`, `isSameSecond(other)`: Checks if two dates share the same hour, minute, or second.
- `isAfter(other)`, `isBefore(other)`: Checks if the date is after or before another.
- `isSameOrAfter(other)`, `isSameOrBefore(other)`: Checks if the date is the same or after/before another.
- `diffInDays(other, absolute)`, `diffInMonths(other, absolute)`, `diffInYears(other, absolute)`: Calculates the difference in days, months, or years.

### Formatting Methods
- `format(format)`: Formats the date using tokens like `Y` (year), `m` (month), `d` (day), `H` (hour), `i` (minute), `s` (second).
- `toDate()`: Returns a native JavaScript `Date` object.
- `toString()`: Returns the date as an ISO string.
- `diffForHumans(other, absolute)`: Returns a human-readable time difference (e.g., "2 hours ago").

### Utility Methods
- `isWeekend()`, `isWeekday()`: Checks if the date is a weekend or weekday.
- `isToday()`, `isTomorrow()`, `isYesterday()`: Checks if the date is today, tomorrow, or yesterday.
- `isFuture()`, `isPast()`: Checks if the date is in the future or past.
- `isLeapYear()`: Checks if the year is a leap year.
- `copy()`: Creates a new Carbon instance with the same date.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue on the GitHub repository.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.