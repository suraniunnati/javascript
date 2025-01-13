function Cart(){
    fetch(`http://localhost:3000/cart`)
    .then((r)=>r.json())
    .then((res)=>{
        document.getElementById("cartbox").innerHTML=view(res)
    })
    .catch((err)=>{console.log(err)})

}
function view(arr){
    return arr.map((ele)=>{
        return `  <div class="flex border">
         <div id="img">
         <img src="${ele.img}">
         </div>
        <div id="text">
        <p id="title">${ele.title}</p>

         <div class="border flex  mt-2">
         <span id="pr">Price : ₹${ele.mrp *  ele.queinty}</span><br>
           <span id="pr" class="ms-5">Discount : -₹${(ele.mrp * ele.off/100 *  ele.queinty).toFixed(0)}</span>
        </div>
        <div class="border flex">
         <button onclick="Addcart(${ele.id} , ${ele.queinty} , 'dec')" id="Add" class="w-[25px] bg-[#FC2779] text-white">-</button>
        <input type="text" value="${ele.queinty}" disabled id="quan" class="text-center w-[50px]">
        <button onclick="Addcart(${ele.id} , ${ele.queinty} , 'inc')" id="Add" class="w-[25px] bg-[#FC2779] text-white">+</button>
        <br>
        <button onclick="del(${ele.id})" id="delete" class=" bg-[#FC2779] text-white p-2 w-[100px] rounded-lg ms-10"> Remove </button>
        </div>

       
        <div id="itemTotal">
            <span id="price"> ₹${ele.price * ele.queinty}</span>
            <p id="tex">Inclusive of all the applicable</p>
            <p id="tex">taxes</p>
        </div>
        </div>`
    })
}

function Addcart(id,queinty, clickbtn) {
    let a = queinty;
    if (clickbtn == 'inc') {
        a = a + 1
    } else if (clickbtn == 'dec') {
        a = a - 1
        if (a < 1) {
          
          document.getElementById("Add").setAttribute("disabled");
        }
    }
    

    fetch(`http://localhost:3000/cart/${id}`, {
        method: "PATCH",
        headers : {
            'Content-Type' : "application/json"
        },
        body: JSON.stringify({queinty : a})
    }).then((res) => {
        return res.json()
    })
        .then((res) => {
            console.log(res)
            window.location.reload()
        })
        .catch((err) => {
            console.log(err)
        })

}
Cart()