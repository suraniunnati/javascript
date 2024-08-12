let scores = [1, 2, 3, 4, 5];
let avg,
  sum = 0;

for (let x = 0; x < scores.length; x++) {
  sum += scores[x];
  avg = sum / 10;
}
console.log(avg);
