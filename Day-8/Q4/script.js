function data(){

    let a= document.getElementById("year").value ;

    a<=0 ? document.getElementById("text").innerText ="Ancient" 
    : a>1 && a<=1500 ?
     document.getElementById("text").innerText ="Medieval" 
   : a>1500 && a<=2024?
    document.getElementById("text").innerText ="Modern"
   : a>2024?
    document.getElementById("text").innerText ="Future"
    :""
}