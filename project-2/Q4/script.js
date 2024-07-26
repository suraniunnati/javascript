function data() {
  let a = document.getElementById("num").value;

  a % 3 == 0 && a % 5 == 0
    ? (document.getElementById("text").innerText = "FizzBuzz")
    : a % 3 == 0
    ? (document.getElementById("text").innerText = "Fizz")
    : a % 5 == 0
    ? (document.getElementById("text").innerText = "Buzz")
    : "";
}
