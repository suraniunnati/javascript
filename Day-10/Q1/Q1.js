function data() {
  let sum = 0;
  let n = document.getElementById("num").value;

  let x=1
  while(x<=n){
    if (x % 2 == 0) {
      sum = sum + x;
    }
    x++;
  }
  document.getElementById("text").innerText = `sum of even number = ${sum}`;
}
