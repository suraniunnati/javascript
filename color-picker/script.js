function fun(){
    let colornumber = Math.floor(Math.random()*16777215);
    let colorcode = "#" + colornumber.toString(16);
    document.getElementById("color").style.backgroundColor = colorcode;
    document.getElementById("code").innerText =colorcode;

}
document.getElementById(fun())