function data(){

    let a= document.getElementById("age").value ;
    let ut;

    if(a<=1){
        document.getElementById("text").innerText ="Infant" 
    }
    else if(a>1 && a<=12){
       document.getElementById("text").innerText ="Child" 
   }
   else if(a>12 && a<=19){
        document.getElementById("text").innerText ="Teenager"
   }
   else if(a>19 && a<=64){
       document.getElementById("text").innerText ="Adult"
   }
   else if( a>64){
    document.getElementById("text").innerText ="Senior Citizen"
}
}