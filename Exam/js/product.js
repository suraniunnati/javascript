
  document.getElementById("detail").addEventListener("submit",(e)=>{
    e.preventDefault()

    let obj = {
      id : document.getElementById("id").value,  
     title : document.getElementById("title").value,
     url : document.getElementById("imgurl").value,
     price : document.getElementById("price").value
    }
    console.log(obj)

    fetch(`http://localhost:3000/prduct `,{
      method :'POST',
      Headers : {
          'content-type' : 'application/json'
      },
      body : JSON.stringify(obj)
     })
     .then((r)=>r.json)
     .then((res)=>{
      document.getElementById("box").innerHTML = view(res)
    })

})

fetch(`http://localhost:3000/prduct`)
.then((r) => {
  return r.json();
})
.then((res) => {
  console.log(res);
  document.getElementById("box").innerHTML = view(res);
})
.catch((err) => {
  console.log(err);
});



function view(arr){
  return arr.map((ele)=>{
    return `<a href="cart.html?id=${ele.id}">
    <div id="main">
       <div id="img"><img src="${ele.url}" alt=""></div>
       <div id="text"><h3>${ele.title}</h3> <p>$ ${ele.price}</p>
      <button id="off">20% off</button>
       </div>
   </div></a>
`
  }).join("")
    
}


