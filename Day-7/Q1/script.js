function data() {
  let num =Number( document.getElementById("num").value);
  let min =Number( document.getElementById("min").value);
  let max =Number(document.getElementById("max").value);

  if (num >= min && num <= max) {
    document.getElementById("text").innerText = "true"
  } else {
    document.getElementById("text").innerText = "false"
  }
}
