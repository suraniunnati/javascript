// function data() {

//     let temp = document.getElementById("temp").value;

//     if (temp >= 30) {
//         document.getElementById("text").innerText = "Hot";
//     } else if (temp >= 15) {
//         document.getElementById("text").innerText = "Moderate";
//     } else {
//         document.getElementById("text").innerText = "Cold";
//     }
// }



function data() {
    let temp = document.getElementById("temp").value;

    if (temp >= 30) {
        document.getElementById("text").innerText = "Hot";
    } else if (temp >= 15) {
        document.getElementById("text").innerText = "Moderate";
    } else {
        document.getElementById("text").innerText = "Cold";
    }
}