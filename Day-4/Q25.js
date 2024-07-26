// Calculate the total bill amount including 25% tax, 15% tip, and a $20 service charge for a purchase of $200


let amount = 200;
let tex = 25,
    tip = 15,
    service = 20;

let texbill=amount*(tex/100)
let tipbill=amount*(tip/100)

let total = amount + texbill + tipbill +service;

console.log("the total bill =", total);