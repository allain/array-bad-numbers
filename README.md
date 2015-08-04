# Bad Numbers

Filters the given array to remove the matched numbers.

This could also be easily solved with the `filter` Array method, or even with a `for` loop.

This works on commonJS, requireJS and default environments.

## Usage

```javascript
var badNumbers = require('array-bad-numbers');

badNumbers([1, 2, 3], [2]); //[3]

badNumbers([7, 5, 2, 2, 2, 1, 5, 3], [5, 2, 2]); //[7, 1, 3]
```

## Usage

`badNumbers` accepts 2 arguments

* the **first** argument is the array that is going to be filtered.
* the **second** argument is an array of numbers to filter.

## Tests

To test run the following commands

```
npm install
npm test
```
