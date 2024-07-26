function data(){

    let  discount,income;
    let a = document.getElementById("year").value;

    if (a <= 100) {
        document.getElementById("text").innerText =` no discount is applied`
    }
    else if (a > 100 && a<=500  ) {
        discount =a * 5 / 100;
        income= a -  discount;
       document.getElementById("discount").innerText =` discount is ${ discount}`;
       document.getElementById("text").innerText =`total is ${income}`
   }
   else if (a > 500 && a<=1000) {
    discount =a * 10 / 100;
    income= a -  discount;
    document.getElementById("discount").innerText =` discount is ${ discount}`;
    document.getElementById("text").innerText =`total is ${income}`
}
else if (a > 1000) {
    discount =a * 15 / 100;
    income= a -  discount;
       document.getElementById("discount").innerText =` discount is ${ discount}`;
       document.getElementById("text").innerText =`total is ${income}`
}

}