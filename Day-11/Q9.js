function double(num) {
  return 2 * num;
}

function square(num) {
  return num * num;
}

function doubleSquare(num) {
  let c = double(num);
  let d = square(c);
  return d;
}

console.log(doubleSquare(3));
