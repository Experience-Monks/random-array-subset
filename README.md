# random-array-subset
Returns an array of a specified length containing a random subset of elements from a given array. 

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)



Example of normal use.  
```js
var originalArray =  ["a","b","c","d","e","f","g","h","i","j"];

//request a random array of 4 elements. 
var newArray =  require("./random-array-subset")(originalArray,4);

console.log(newArray); // ["j","g","d","c"]


```


Example of requesting more elements than are in the original array.  
```js

//array with length == 10
var originalArray =  ["a","b","c","d","e","f","g","h","i","j"];

//request a random array of 15 elements. Will retun only 10. 
var newArray =  require("./random-array-subset")(originalArray,15);

console.log(newArray); // [ 'c', 'i', 'f', 'b', 'h', 'j', 'a', 'g', 'e', 'd' ]


```

Example of requesting 0 items
```js
var originalArray =  ["a","b","c","d","e","f","g","h","i","j"];

//request a random array of 0 elements. 
var newArray =  require("./random-array-subset")(originalArray,0);

//returns empty array
console.log(newArray); // [ ]


```


## License

MIT, see [LICENSE.md](http://github.com/Jam3/repo-deps/blob/master/LICENSE.md) for details.

