// Calculate the total bill amount including 18% tax and a $5 service charge for a purchase of $80

let amount = 80,
  tex = 18,
  service = 5;

let total = amount + service + (amount * tex) / 100;

console.log("total amount :", total);
