function findFactorial() {
  let fat = 1;
  let a = 5;

  for (let x = 1; x <= a; x++) {
    fat = fat * x;
  }
  console.log(" factorial :", fat);
}

findFactorial();
