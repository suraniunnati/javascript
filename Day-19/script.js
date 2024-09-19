let a=document.querySelector("#signupMain") 

   let data=[];
   let isvalid=true;

   document.querySelector("#signupButton").addEventListener("click",()=>{
      document.querySelector("#main").style.display="none"
      document.querySelector("#main2").style.display="block"
   })

   // document.querySelector("#submit").addEventListener("click",()=>{
   //    document.querySelector("#main").style.display="none"
   //    document.querySelector("#main2").style.display="block"
   // })
    
   
document.querySelector("#loginButton").addEventListener("click",()=>{
   document.querySelector("#main").style.display="block"
   document.querySelector("#main2").style.display="none"
})

 a.addEventListener("submit",(e)=>{
    e.preventDefault()
    isvalid=true


  document.querySelector("#usernameText").innerHTML=""
   document.querySelector("#emailText").innerHTML=""
    document.querySelector("#passwordText").innerHTML=""
     document.querySelector("#genderText").innerHTML=""

   let username=document.getElementById("username").value
   let email=document.getElementById("email").value
   let password=document.getElementById("password").value

   let emailregex=/[a-zA-Z0-9.*%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}/
   let passwordregex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;


   if(username.length == 0 ){
      document.querySelector("#usernameText").innerText=" Enter username"
      isvalid=false
   }
   if(emailregex.test(email)==false){
      document.querySelector("#emailText").innerText="  email is unvalid"
      isvalid=false
   }
   if(passwordregex.test(password)==false){
      document.querySelector("#passwordText").innerText=" password is unvalid"
      isvalid=false
   }

   let obj={
        username :username,
        email :email,
        password:password,
   }

   if(isvalid==true){
      data.push(obj)
      alert("user signup successfully !")
   }

   console.log(data)
})


document.querySelector("#loginMain").addEventListener("submit",(f)=>{
   f.preventDefault()

   let loginEmail=document.getElementById("loginEmail").value
   let loginPassword=document.getElementById("loginPassword").value

   let ans=data.filter(ele =>{
      
   if(ele.email==loginEmail && ele.password==loginPassword){
         return ele;
   }
   });
  console.log(ans)
if(ans.length>0){
   Swal.fire({
      text: "login successfule",
      icon: "success"
    });
}
else{
   Swal.fire({
      text: "login unsuccessfule",
      icon: "error"
    });
}
})



function myFunction() {
   var x = document.getElementById("password");
   if (x.type === "password") {
     x.type = "text";
   } else {
     x.type = "password";
   }
 }