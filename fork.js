var __ = require('highland');
var a = __([1, 2, 3, 4]);

var isOdd = function(number) {
  return number % 2 == 1;
};

var oddStream = a.fork().filter(isOdd);

var evenStream = a.fork().reject(isOdd);

a.resume();

__([oddStream, evenStream]).parallel(2)
.toArray(function(numbers) {
  console.log(numbers);
});

