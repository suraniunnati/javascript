function data() {
  let tex, tex2, tex3;
  let amount = Number(document.getElementById("amount").value);
  tex = (amount * 5) / 100;
  tex2 = (amount * 10) / 100;
  tex3 = (amount * 15) / 100;

  amount <= 100
    ? (document.getElementById("text").innerText = `no discount is applied`)
    : amount > 100 && amount <= 500
    ? (document.getElementById("text").innerText = `income is ${amount - tex}`)
    : amount > 500 && amount <= 1000
    ? (document.getElementById("text").innerText = `income is ${amount - tex2}`)
    : amount >= 1000
    ? document.getElementById("text").innerText`income is ${amount - tex3}`
    : "";
}
