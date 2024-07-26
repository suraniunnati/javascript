function rate() {

    let tax,income;
    let a = document.getElementById("amount").value;

    if (a <= 10000) {
         tax =a * 5 / 100;
         income= a - tax;
        document.getElementById("tex").innerText =`tax is ${tax}`;
        document.getElementById("data").innerText =`income is ${income}`
    }
    else if (a > 10000 && a<=50000) {
        tax =a * 10 / 100;
        income= a - tax;
       document.getElementById("tex").innerText =`tax is ${tax}`;
       document.getElementById("data").innerText =`income is ${income}`
   }
   else if (a > 50000 && a<=100000) {
    tax =a * 15 / 100;
    income= a - tax;
   document.getElementById("tex").innerText =`tax is ${tax}`;
   document.getElementById("data").innerText =`income is ${income}`
}
else if (a > 100000) {
    tax =a * 20 / 100;
    income= a - tax;
   document.getElementById("tex").innerText =`tax is ${tax}`;
   document.getElementById("data").innerText =`income is ${income}`
}

}