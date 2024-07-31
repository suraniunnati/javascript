function data(){

    let a=document.getElementById("min").value ;
    let b=document.getElementById("max").value ;
    let num=document.getElementById("num").value ;

    if(num >=a && num <=b){
        document.getElementById("text").innerText ="Within Range";
    }
    else{
        document.getElementById("text").innerText ="Out of Range"; 
    }
 
}