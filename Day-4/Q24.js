// Determine the total bill amount including 15% tax and a $10 delivery fee for a purchase of $150

let amount = 150,
  tex = 15,
  delivery = 10;

let total = amount + delivery + (amount * tex) / 100;

console.log("total amount :", total);
