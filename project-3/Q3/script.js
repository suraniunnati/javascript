function data(){

    let a=document.getElementById("num1").value ;
    let b=document.getElementById("num2").value ;
    let c=document.getElementById("num3").value ;

    if(a>=b && a<=c){
        document.getElementById("text").innerText ="A is second large number";
    }
    else if(b>=a && b<=c){
        document.getElementById("text").innerText ="B is second large number";
    }
    else if(c>=a && c<=b){
        document.getElementById("text").innerText ="c is second large number";
    }
   
}