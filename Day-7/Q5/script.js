function data(){

    let a = document.getElementById("char").value; 

    if(a.length < 6){
        document.getElementById("text").innerText="the password weak";
    }
    else if(a.length >= 6 && a.length <= 10){
        document.getElementById("text").innerText="the password medium";
    }
    else{
        document.getElementById("text").innerText="the password strong";
    }
}