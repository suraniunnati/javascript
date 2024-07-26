function data() {
    let temp = document.getElementById("temp").value;

    temp >= 30 ?
        document.getElementById("text").innerText = "Hot"
    : temp >= 15 ?
        document.getElementById("text").innerText = "Moderate"
    : document.getElementById("text").innerText = "Cold"
}