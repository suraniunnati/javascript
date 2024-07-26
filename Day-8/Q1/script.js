function data() {
  let tex, tex2, tex3, tex4;
  let amount = Number(document.getElementById("amount").value);
  tex = (amount * 5) / 100;
  tex2 = (amount * 10) / 100;
  tex3 = (amount * 15) / 100;
  tex4 = (amount * 20) / 100;

  amount <= 10000
    ? (document.getElementById("text").innerText = `income is ${amount - tex}`)
    : amount > 10000 && amount <= 50000
    ? (document.getElementById("text").innerText = `income is ${amount - tex2}`)
    : amount > 50000 && amount <= 100000
    ? (document.getElementById("text").innerText = `income is ${amount - tex3}`)
    : amount >= 100000
    ? document.getElementById("text").innerText`income is ${amount - tex4}`
    : "";
}
