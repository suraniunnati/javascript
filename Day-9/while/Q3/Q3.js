function data() {
  let add = "";
  let n = document.getElementById("num").value;
  let x=1;
  while (x <= n) {
    if (x % 3 == 0 && x % 5 == 0) {
      add += x + " " + "FizzBuzz<br><hr>";
      document.getElementById("text").innerHTML = `${add}`;
    } else if (x % 3 == 0) {
      add += x + " " + "Fizz<br>";
      document.getElementById("text").innerHTML = `${add}`;
    } else if (x % 5 == 0) {
      add += x + " " + "Buzz<br>";
      document.getElementById("text").innerHTML = `${add}`;
    }
    x++;
  }
}
