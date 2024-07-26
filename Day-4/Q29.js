// Determine the total bill amount including 12% tax, 18% tip, and a $25 service charge for a purchase of $500 with a $50 voucher.


let amount = 450;
let tex = 12,
    tip = 18,
    service = 25;

let texbill=amount*(tex/100)
let tipbill=amount*(tip/100)

let total =amount + texbill + tipbill + service;

console.log("the total bill =", total);