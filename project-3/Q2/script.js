function data(){

    let a=document.getElementById("year").value ;

    if(a%4==0 && a%100!=0 || a%400==0){
        document.getElementById("text").innerText ="leap year"
    }
    else{
        document.getElementById("text").innerText ="Not leap year" 
    }
}