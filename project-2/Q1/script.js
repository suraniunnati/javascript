function data() {
  let a = document.getElementById("num").value;
  b = document.getElementById("num1").value;
  c = document.getElementById("num2").value;
  d = document.getElementById("num3").value;

  a >= b && a >= c && a >= d
    ? (document.getElementById("text").innerText = "A is big")
    : b >= c && b >= d
    ? (document.getElementById("text").innerText = "B is big")
    : c >= d
    ? (document.getElementById("text").innerText = "C is big")
    : (document.getElementById("text").innerText = "D is big");
}
