function data() {
  let unit = Number(document.getElementById("unit").value);

  unit <= 100
    ? (document.getElementById("text").innerText = `electricity bill is ${
        unit + unit * 0.1
      }`)
    : unit > 100 && unit <= 200
    ? (document.getElementById("text").innerText = `electricity bill is ${
        unit + unit * 0.15
      }`)
    : unit > 200 && unit <= 300
    ? (document.getElementById("text").innerText = `electricity bill is ${
        unit + unit * 0.2
      }`)
    : unit >= 300
    ? document.getElementById("text").innerText`electricity bill is ${
        unit + unit * 0.25
      }`
    : "";
}
