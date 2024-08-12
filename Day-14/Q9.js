let ages = [25, 32, 19, 40, 28];

let oldestAge = ages[0];

for (let i = 0; i < ages.length; i++) {
  if (ages[i] > oldestAge) {
    oldestAge = ages[i];
  }
}

console.log("The oldest age is:", oldestAge);
