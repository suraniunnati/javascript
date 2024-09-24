var a;
function start() {
    let hour = document.getElementById("hou");
    let minute = document.getElementById("min");
    let second = document.getElementById("sed");
    let date = document.getElementById("date");
    let month = document.getElementById("month");
    var AmPm =document.getElementById("AmPm");

   a=setInterval(() => {

     let amPm = hour >= 12 ? 'AM' : 'PM';

    // hour = hour % 12;
    // hour = hour ? hour : 12;


        let countTime = new Date();
        hour.innerHTML = countTime.getHours() % 12 || 12 ;
        minute.innerHTML = countTime.getMinutes();
        second.innerHTML = countTime.getSeconds() ;
        date.innerHTML = countTime.getDate() ;
        month.innerHTML = countTime.getMonth() + 1 ;
        AmPm.innerHTML = amPm ;
       
        
    }, 1000)

  

}

function stop(){
    clearInterval(a)
}
