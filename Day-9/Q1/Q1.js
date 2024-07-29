function data() {
  let sum = 0,even="";
  let n = document.getElementById("num").value;

  for (x = 1; x <= n; x++) {
    if (x % 2 == 0) {
      sum = sum + x;
    }
  }
  document.getElementById("text").innerText = `sum of even number = ${sum}`;
}
