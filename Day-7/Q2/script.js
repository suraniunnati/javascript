function data() {
  let interest, unit;
  let a = document.getElementById("amount").value;

  if (a <= 1000) {
    interest = (a * 5) / 100;
    unit = +a + interest;
    document.getElementById("text").innerText = `amount is ${unit}`;
  } else if (a > 1000 && a <= 5000) {
    interest = (a * 7) / 100;
    unit = +a + interest;
    document.getElementById("text").innerText = `amount is ${unit}`;
  } else if (a > 5000) {
    interest = (a * 10) / 100;
    unit = +a + interest;
    document.getElementById("text").innerText = `amount is ${unit}`;
  }
}
