function data() {
  let age = document.getElementById("age").value;

  age > 0 && age <= 12
    ? (document.getElementById("text").innerText = "Child")
    : age > 12 && age <= 20
    ? (document.getElementById("text").innerText = "Teenage")
    : age > 20 && age <= 60
    ? (document.getElementById("text").innerText = "Adult")
    : (document.getElementById("text").innerText = "Senior");
}
