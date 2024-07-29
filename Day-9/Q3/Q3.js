function data() {
  let add = "";
  let n = document.getElementById("num").value;

  for (x = 1; x <= n; x++) {
    if (x % 3 == 0 && x % 5 == 0) {
      add += x + " " + "FizzBuzz<br><hr>";
      document.getElementById("text").innerHTML = `${add}`;
      // console.log(x + " " + "Fizz ");
    } else if (x % 3 == 0) {
      add += x + " " + "Fizz<br>";
      document.getElementById("text").innerHTML = `${add}`;
      // console.log(x + " " + "Bizz ");
    } else if (x % 5 == 0) {
      add += x + " " + "Buzz<br>";
      document.getElementById("text").innerHTML = `${add}`;
      // console.log(x + " " + "FizzBizz ");
    }
  }
}
