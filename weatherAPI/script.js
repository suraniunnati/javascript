
document.getElementById("check").addEventListener("click",Weather)

function Weather(){
    
    let city = document.getElementById("name").value;

    let city_name = "";

    if(city == "")
    {
        city_name = "delhi";
    }
    else{
        city_name = city;
    }
    
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=1ea29a77da19a8a962d5a52b128521c0&units=metric`)

.then((r)=>{
    return r.json();
})
.then((res)=>{
    console.log(res);
    document.getElementById("box").innerHTML = view(res);
    
})
.catch((err)=>{
    console.log(err);
})
}



function celsiusToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
  }

function view(arr){
    let celsius = arr.main.temp;
    let fahrenheit = celsiusToFahrenheit(celsius);
    return `
    <h1>${arr.name}</h1><br>
    <hr>
      <img src="https://openweathermap.org/img/wn/${arr.weather[0].icon}@2x.png" id="img">
      <p>${arr.weather[0].description}</p>
      <br>
    <span style="margin-right: 20px;"id="temp"> ${arr.main.temp}°C </span> <span onclick="celsiusToFahrenheit()" id="temp">${fahrenheit.toFixed(2)}°F</span>
    <br><br><br>
    <div id="manu">
    <p>humidity <br><span style="
    font-weight: bolder;"> ${arr.main.humidity} %</span></p>
    <p>pressure <br><span style="
    font-weight: bolder;"> ${arr.main.pressure} hpa</span></p>
    <p>wind <br><span style="
    font-weight: bolder;"> ${arr.wind.speed} kmph </span></p>
  </div>
   
    `
}
Weather()
