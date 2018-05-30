var number = [1, 2, 3, 4, 5];

var sum = number.reduce((acc, next) => acc + next);
var min, max;
min = sum - Math.max(...number);
max = sum - Math.min(...number);

console.log(min, max);