// Swap the values of two variables without using a function. Given two variables, swap their values.

let x = 5,
  y = 10;

x = x + y;
y = x - y;
x = x - y;

console.log("first:", x, "second:", y);
