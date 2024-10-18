function singleProduct() {
    let data = new URLSearchParams(window.location.search);
    let id = data.get("id");
    console.log(id)
  
    fetch(`http://localhost:3000/prduct?id=${id}`)
      .then((r) => {
        return r.json();
      })
      .then((res) => {
        console.log(res)
        document.getElementById("box").innerHTML = view(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function view(arr){
  return arr.map((ele)=>{
    return `
    <div id="main">
       <div id="img"><img src="${ele.url}" alt=""></div>
       <div id="text"><h4>${ele.title}</h4> <p>$ ${ele.price}</p>
       <button id="delete" onclick="deleteitem(${ele.id})">Delete</button>
       <button id="edit">Edit</button>
       </div>
   </div>
`
  }).join("")
    
}

function deleteitem(id){
    fetch(`http://localhost:3000/prduct/${id} `,{
        method :'DELETE',
    })
    .then((r) => {
        return r.json();
      })
      .then((res) => {
        console.log(res)
        window.location.reload()
        document.getElementById("box").innerHTML = view(res);
      })
      .catch((err) => {
        console.log(err);
      });
}



singleProduct();