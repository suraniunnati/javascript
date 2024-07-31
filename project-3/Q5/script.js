function data(){

    let a=document.getElementById("num").value ;
 

    if(a >=100 && b<=90){
        document.getElementById("text").innerText ="4.0";
    }
    else if(a >90 && b<=80){
        document.getElementById("text").innerText ="3.0";
    }
    else if(a >80 && b<=70){
        document.getElementById("text").innerText ="2.0";
    }
    else if(a >70 && b<=60){
        document.getElementById("text").innerText ="1.0";
    }
    else{
        document.getElementById("text").innerText ="0.0";
    }
 
}