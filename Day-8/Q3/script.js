function data() {
  let age = Number(document.getElementById("age").value);

  age <= 1
    ? (document.getElementById("text").innerText = "Infant")
    : age > 1 && age <= 12
    ? (document.getElementById("text").innerText = "Child")
    : age > 12 && age <= 20
    ? (document.getElementById("text").innerText = "Teenager")
    : age > 20 && age <= 64
    ? (document.getElementById("text").innerText = "Adult")
    : age <= 65
    ? (document.getElementById("taxt").innerText = "Senior Citizen")
    : "";
}
