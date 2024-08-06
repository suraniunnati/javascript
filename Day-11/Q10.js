function findFactorial(positive) {
  let fat = 1;
  for (x = 1; x <= positive; x++) {
    fat *= x;
}
    return fat;
}

console.log(findFactorial(5));
