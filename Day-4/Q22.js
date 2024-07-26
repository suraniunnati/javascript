// Determine the total bill amount including a 20% tip and 10% tax for a meal costing $100

let amount = 100,
  tex = 10,
  tip = 20;

let total = amount + (amount * tex) / 100; //100+(100*10)/100 =110
let total_2 = total + (total * tip) / 100; //110+(110*20)/100 =132

console.log("total amount :", total_2);
