function data(){

    let a= document.getElementById("year").value ;

    if(a<=0){
        document.getElementById("text").innerText ="Ancient" 
    }
    else if(a>1 && a<=1500){
       document.getElementById("text").innerText ="Medieval" 
   }
   else if(a>1500 && a<=2024){
        document.getElementById("text").innerText ="Modern"
   }
   else if( a>2024){
    document.getElementById("text").innerText ="Future"
}
}