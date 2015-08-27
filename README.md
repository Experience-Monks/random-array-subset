# random-array-subset
Returns an array of a specified length containing a random subset of elements from a given array. 

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Example 
```js
var originalArray =  ["a","b","c","d","e","f","g","h","i","j"];
var newArray =  require("./random-array-subset")(originalArray,4);

console.log(newArray); // ["j","g","d","c"];


```
