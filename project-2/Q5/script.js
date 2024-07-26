function data() {
  let a = document.getElementById("num").value;

  a > 0
    ? (document.getElementById("text").innerText = "positive")
    : a < 0
    ? (document.getElementById("text").innerText = " negative")
    : (document.getElementById("text").innerText = " zero");
}
