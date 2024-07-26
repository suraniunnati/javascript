function data(){

    let a= document.getElementById("unit").value ;
    let ut;

    if(a<=100){
         ut=a*0.1;
        document.getElementById("text").innerText =" electricity bill is $" + ut + " and tariff rate " +0.1
    }
    else if(a>100 && a<=200){
        ut=a*0.15;
       document.getElementById("text").innerText ="electricity bill is $" + ut + " and tariff rate " +0.15 
   }
   else if(a>200 && a<=300){
    ut=a*0.2;
   document.getElementById("text").innerText ="electricity bill is $" + ut + " and tariff rate " +0.2 
  }
  if(a>300){
    ut=a*0.25;
   document.getElementById("text").innerText ="electricity bill is $" + ut + " and tariff rate " +0.25 
  }
}