function data(){

    let a=document.getElementById("income").value ;
    let b=document.getElementById("score").value ;
    let c=document.getElementById("amount").value ;
 

    if(a<=50000 && b<=700 && c<=a/2){
        document.getElementById("text").innerText ="Eligible";
    }
   
    else{
        document.getElementById("text").innerText ="Not Eligible";
    }
 
}