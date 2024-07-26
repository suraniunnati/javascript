// Determine the total bill amount including 8% tax and a $20 service fee for a purchase of $250 with a $30 discount.

let amount = 250-30,
    tex=8,
    service=20

    let total=amount+service+amount*(tex/100);

    console.log("the total bill :",total)