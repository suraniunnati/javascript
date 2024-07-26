function data() {
  let a = document.getElementById("num").value;

  a > "A" && a < "Z"
    ? (document.getElementById("text").innerText = "uppercase letter")
    : a > "a" && a < "z"
    ? (document.getElementById("text").innerText = "lowercase letter")
    : a > "0" && a < "9"
    ? (document.getElementById("text").innerText = "digit/number")
    : (document.getElementById("text").innerText = "special character");            
}
