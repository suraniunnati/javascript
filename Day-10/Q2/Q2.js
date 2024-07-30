function data() {
  let fat = 1;
  let n = document.getElementById("num").value;

  let x=1
  while(x<=n){
   fat=fat*x
    x++;
  }
  document.getElementById("text").innerText = `factorial = ${fat}`;
}
