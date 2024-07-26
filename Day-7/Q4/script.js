function data(){
    let result;
    let temp = document.getElementById("temperature").value;
    let unit= document.getElementById("unit").value;


if (unit == 'C') {
    result= (temp * 9/5) + 32;
    document.getElementById("output").innerText=`convert the Celsius to Fahrenheit = ${result}`;
} else if (unit == 'F') {
    result=(temp - 32) * 5/9;
     document.getElementById("output").innerText=`convert the Fahrenheit to Celsius = ${result}`;
} else {
    return 'Invalid unit';
}
}