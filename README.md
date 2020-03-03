# JustMyLuck

A collection of utility functions for working with randomness.

## setup

### npm

```shell
npm i just-my-luck
```

### ES module

```javascript
import JustMyLuck from 'just-my-luck';
```

### Node

```javascript
let JustMyLuck = require('just-my-luck');
```

### browser

```html
<script src="https://unpkg.com/just-my-luck"></script>
```

The module is globally available as `JustMyLuck`.

## members

### static properties

`.random = Math.random`

---

`.MersenneTwister(seed)`

The implementation of the Mersenne Twister pseudo-random number generator.

| argument | description |
| ---: | :--- |
| `seed` | A number as the initial seed. |

Returns the pseudo-random number generator as a function.

```javascript
let random = JustMyLuck.MersenneTwister(835);
console.log(random()); // => 0.7212939869047637
console.log(random()); // => 0.2532498844651273
```

---

`.lowerCasedAlphabetic = 'abcdefghijklmnopqrstuvwxyz'`

---

`.upperCasedAlphabetic = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'`

---

`.alphabetic = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'`

---

`.numeric = '0123456789'`

---

`.lowerCasedAlphanumeric = 'abcdefghijklmnopqrstuvwxyz0123456789'`

---

`.upperCasedAlphanumeric = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'`

---

`.alphanumeric = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'`

### constructor

`new JustMyLuck(random)`

| argument | description |
| ---: | :--- |
| `random` | A function that returns a float greater than or equal to 0 and less than 1. |

```javascript
let seed = Date.now();
let luck1 = new JustMyLuck(JustMyLuck.MersenneTwister(seed));
let luck2 = new JustMyLuck(JustMyLuck.MersenneTwister(seed));
let integer1 = luck1.integer(-2, 2, true);
let integer2 = luck2.integer(-2, 2, true);
console.log(integer1 === integer2); // => true;
```

### instance properties

`.random`

The pseudo-random number generator.

### static and instance methods

`.chance(p)`

Tests the chance with a probability.

| argument | description |
| ---: | :--- |
| `p` | A number as the probability. |

Returns a boolean.

```javascript
let b = JustMyLuck.chance(0.4);
// => either true (40%) or false (60%)
```

---

`.boolean()`

Generates a boolean.

Returns the generated boolean.

```javascript
let boolean = JustMyLuck.boolean();
// => either true or false
```

---

`.booleanWeighted(weight)`

Generates a boolean using a weighted probability.

| argument | description |
| ---: | :--- |
| `weight` | A number as the weighted probability. |

Returns the generated boolean.

```javascript
let boolean = JustMyLuck.booleanWeighted(3);
// => either true (75%) or false (25%)
```

```javascript
console.log(JustMyLuck.booleanWeighted(0) === false); // => true
```

```javascript
console.log(JustMyLuck.booleanWeighted(Infinity) === true); // => true
```

---

`.float(min, max, inclusive = false)`

Generates a float within a range.

| argument | description |
| ---: | :--- |
| `min` | A number as the inclusive minimum. |
| `max` | A number as the exclusive maximum. |
| `inclusive` | If `true`, the maximum is inclusive. |

Returns the generated float.

```javascript
let float = JustMyLuck.float(0.4, 2.7);
// => a float greater than or equal to 0.4 and less than 2.7
```

```javascript
let float = JustMyLuck.float(0.4, 2.7, true);
// => a float greater than or equal to 0.4 and less than or equal to 2.7
```

```javascript
let float = 6.5;
console.log(JustMyLuck.float(float, float, true) === float); // => true
```

---

`.integer(min, max, inclusive = false)`

Generates an integer within a range.

| argument | description |
| ---: | :--- |
| `min` | A number as the inclusive minimum. |
| `max` | A number as the exclusive maximum. |
| `inclusive` | If `true`, the maximum is inclusive. |

Returns the generated integer.

```javascript
let integer = JustMyLuck.integer(2, 11);
// => an integer greater than or equal to 2 and less than 11
```

```javascript
let integer = JustMyLuck.integer(2, 11, true);
// => an integer greater than or equal to 2 and less than or equal to 11
```

```javascript
console.log(JustMyLuck.integer(4.3, 6.5) === 5); // => true
```

---

`.string(alphabet, length)`

Generates a string using an alphabet.

| argument | description |
| ---: | :--- |
| `alphabet` | An array-like or iterable object of characters as the alphabet. |
| `length` | A number as the length of the string to generate. |

Returns the generated string.

```javascript
let string = JustMyLuck.string(JustMyLuck.alphabetic, JustMyLuck.integer(8, 16, true));
// => 'eFEgkjWzTsTmA'
```

---

`.date(min, max, inclusive = false)`

Generates a `Date` instance within a range.

| argument | description |
| ---: | :--- |
| `min` | A `Date` instance as the inclusive minimum. |
| `max` | A `Date` instance as the exclusive maximum. |
| `inclusive` | If `true`, the maximum is inclusive. |

Returns the generated `Date` instance.

```javascript
let date = JustMyLuck.date(new Date('01 Jan 1970'), new Date('04 Dec 1995'));
// => '1989-08-26T01:02:17.622Z'
```

```javascript
let date = new Date('04 Dec 1995');
console.log(JustMyLuck.date(date, date, true).getTime() === date.getTime()); // => true
```

---

`.single(collection)`

Selects a value from a collection.

| argument | description |
| ---: | :--- |
| `collection` | An array-like or iterable object to select from. |

Returns the selected value.

```javascript
let value = JustMyLuck.single(['a', 'b', 'c']);
// => either 'a', 'b' or 'c'
```

---

`.singleWeighted(weightedCollection)`

Selects a value from a collection using a weighted probability.

| argument | description |
| ---: | :--- |
| `weightedCollection` | An array-like or iterable object of value-weight pairs. A value-weight pair is an array of length 2. The first value is actually a value to select. The second value is a number as the weighted probability. |

Returns the selected value.

```javascript
let value = JustMyLuck.singleWeighted([['a', 3.3], ['b', 0.7], ['c', 1]]);
// => either 'a' (66%), 'b' (14%) or 'c' (20%)
```

---

`.combination(collection, maxCount)`

Selects a combination of values without repetition from a collection. Preserves the order of the values.

| argument | description |
| ---: | :--- |
| `collection` | An array-like or iterable object to select from. |
| `maxCount` | A number as the maximum count of the values to select. |

Returns the selected values as an array.

```javascript
let values = JustMyLuck.combination(['a', 'b', 'c', 'd', 'e'], 3);
// => ['a', 'b', 'd']
```

---

`.combinationWeighted(weightedCollection, maxCount)`

Selects a combination of values without repetition from a collection using a weighted probability. Preserves the order of the values.

| argument | description |
| ---: | :--- |
| `collection` | An array-like or iterable object of value-weight pairs. A value-weight pair is an array of length 2. The first value is actually a value to select. The second value is a number as the weighted probability. |
| `maxCount` | A number as the maximum count of the values to select. |

Returns the selected values as an array.

```javascript
let values = JustMyLuck.combinationWeighted([['a', 2], ['b', 7], ['c', 8], ['d', 5], ['e', 8]], 3);
// => ['a', 'c', 'e']
```

---

`.permutation(collection, maxCount)`

Selects a permutation of values without repetition from a collection.

| argument | description |
| ---: | :--- |
| `collection` | An array-like or iterable object to select from. |
| `maxCount` | A number as the maximum count of the values to select. |

Returns the selected values as an array.

```javascript
let values = JustMyLuck.permutation(['a', 'b', 'c', 'd', 'e'], 3);
// => ['b', 'd', 'a']
```

---

`.permutationWeighted(weightedCollection, maxCount)`

Selects a permutation of values without repetition from a collection using a weighted probability.

| argument | description |
| ---: | :--- |
| `collection` | An array-like or iterable object of value-weight pairs. A value-weight pair is an array of length 2. The first value is actually a value to select. The second value is a number as the weighted probability. |
| `maxCount` | A number as the maximum count of the values to select. |

Returns the selected values as an array.

```javascript
let values = JustMyLuck.permutationWeighted([['a', 2], ['b', 7], ['c', 8], ['d', 5], ['e', 8]], 3);
// => ['c', 'e', 'a']
```

---

`.multicombination(collection, count)`

Selects a combination of values with repetition from a collection. Preserves the order of the values.

| argument | description |
| ---: | :--- |
| `collection` | An array-like or iterable object to select from. |
| `count` | A number as the count of the values to select. |

Returns the selected values as an array.

```javascript
let values = JustMyLuck.multicombination(['a', 'b'], 8);
// => ['a', 'a', 'a', 'a', 'a', 'b', 'b', 'b']
```

---

`.multicombinationWeighted(weightedCollection, count)`

Selects a combination of values with repetition from a collection using a weighted probability. Preserves the order of the values.

| argument | description |
| ---: | :--- |
| `collection` | An array-like or iterable object of value-weight pairs. A value-weight pair is an array of length 2. The first value is actually a value to select. The second value is a number as the weighted probability. |
| `count` | A number as the count of the values to select. |

Returns the selected values as an array.

```javascript
let values = JustMyLuck.multicombinationWeighted([['a', 1], ['b', 3]], 8);
// => ['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b']
```

---

`.multipermutation(collection, count)`

Selects a permutation of values with repetition from a collection.

| argument | description |
| ---: | :--- |
| `collection` | An array-like or iterable object to select from. |
| `count` | A number as the count of the values to select. |

Returns the selected values as an array.

```javascript
let values = JustMyLuck.multipermutation(['a', 'b'], 8);
// => ['a', 'a', 'b', 'b', 'a', 'a', 'b', 'a']
```

---

`.multipermutationWeighted(weightedCollection, count)`

Selects a permutation of values with repetition from a collection using a weighted probability.

| argument | description |
| ---: | :--- |
| `collection` | An array-like or iterable object of value-weight pairs. A value-weight pair is an array of length 2. The first value is actually a value to select. The second value is a number as the weighted probability. |
| `count` | A number as the count of the values to select. |

Returns the selected values as an array.

```javascript
let values = JustMyLuck.multipermutationWeighted([['a', 1], ['b', 3]], 8);
// => ['b', 'b', 'b', 'a', 'b', 'b', 'b', 'b']
```

---

`.shuffle(collection)`

Shuffles a collection.

| argument | description |
| ---: | :--- |
| `collection` | An array-like or iterable object to shuffle. |

Returns the shuffled collection as an array.

```javascript
let shuffledArray = JustMyLuck.shuffle([1, 2, 3, 4, 5]);
// => [4, 3, 2, 5, 1]
```

---

`.shuffleInPlace(array)`

Shuffles an array in place.

| argument | description |
| ---: | :--- |
| `array` | An array-like object to shuffle. |

Returns the same array but shuffled.

## plugins

Write your own plugins to extend the library.

```javascript
import JustMyLuck from 'just-my-luck';

JustMyLuck.extend({
  color() {
    return `rgb(${[0, 0, 0].map(() => this.integer(0, 255, true)).join(',')})`;
  },
});
```
