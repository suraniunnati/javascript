function data() {
  let fat = 1;
  let n = document.getElementById("num").value;

  for (x = 1; x <= n; x++) {
    fat = fat * x;
  }
  document.getElementById("text").innerText = `factorial = ${fat}`;
}
