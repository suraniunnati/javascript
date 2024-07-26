function data() {
  let tex, total;
  let a = document.getElementById("amount").value;

  if (a <= 500) {
    tex = (a * 10) / 100;
    total = +a + tex +50;
    document.getElementById("text").innerText = `amount is ${total}`;
  } else if (a > 500 && a <= 1000) {
    tex = (a * 15) / 100;
    total = +a + tex +50;
    document.getElementById("text").innerText = `amount is ${total}`;
  } else if (a > 1000) {
    tex = (a * 20) / 100;
    total = +a + tex +50;
    document.getElementById("text").innerText = `amount is ${total}`;
  }
}
