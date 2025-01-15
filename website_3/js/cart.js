function Cart(){
    fetch(`http://localhost:3000/cart`)
    .then((r)=>r.json())
    .then((res)=>{
      
        if(res.length===0){
            console.log("error....")
            document.getElementById("cartbox").innerHTML=defult(res)
        }
        else{
        document.getElementById("cartbox").innerHTML=view(res)
        }
    })
    .catch((err)=>{console.log(err)})

}
function view(arr){
    let mrpPrice=0
    let dis=0
    let total=0
    let Total=0
    return arr.map((ele)=>{
         mrpPrice+=ele.mrp*ele.queinty
         dis+=ele.mrp*ele.off/100*ele.queinty
         total=mrpPrice-dis
         Total=mrpPrice-dis
        document.getElementById("MRPprice").innerHTML="₹" + mrpPrice
        document.getElementById("dis").innerHTML="- ₹" + dis
        document.getElementById("total").innerHTML="₹" + total
        document.getElementById("Total").innerHTML="₹" + total
        return ` 
        <div>
         <div class="flex  justify-center rounded-lg shadow-md  p-2 mt-5 border">
         <div id="img" class=" mt-5  p-2">
         <img src="${ele.img}" class="w-[120px]">
         </div>
        <div class="p-4">
        <p class="text-lg font-medium text-gray-800">${ele.title}</p>

         <div class=" flex  mt-2">
         <span id="pr">Price : ₹${ele.mrp *  ele.queinty}</span><br>
           <span id="pr" class="ms-5">Discount : -₹${(ele.mrp * ele.off/100 *  ele.queinty).toFixed(0)}</span>
        </div>
        <div class="mt-2 mb-2">
         <button onclick="Addcart(${ele.id} , ${ele.queinty} , 'dec')" id="Add" class="w-[25px] bg-pink-600 rounded-sm  text-white h-[30px]">-</button>
        <input type="text" value="${ele.queinty}" disabled id="quan" class="text-center w-[50px] h-[30px]">
        <button onclick="Addcart(${ele.id} , ${ele.queinty} , 'inc')" id="Add" class="w-[25px] bg-pink-600 rounded-sm text-white h-[30px]">+</button>
        </div>

       
        <div class="border-t p-2 text-right mt-2">
               <button onclick="del(${ele.id})" id="delete" class=" bg-pink-600 text-white p-2 w-[100px] rounded-lg mr-10"> <i class="fa-solid fa-trash"></i> Remove </button>
            <span class="font-bold">Total : ₹${ele.price * ele.queinty}</span>
           
        </div>
        </div>
        </div>
        `
    }).join("")
}
function defult(arr){
    return `<div class="flex flex-col items-center text-center p-5">
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/3bd05447340145.587755b7635a0.gif" width="200px">
        <p class="mt-2 font-medium">Your cart is Empty</p>
        <p class="text-sm mt-2">Looks like you have not added anything to your cart. <br/>Go ahead & explore top categories.</p>
        <a href="product.html" class="bg-pink-600 rounded-lg text-sm text-white p-2 mt-2">Continue Shopping</a>
    </div>`
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

function del(id){
    fetch(`http://localhost:3000/cart/${id}`, {
        method: "DELETE",
        headers: {
            "content-type": "application/json"
        }})
        .then((r)=>r.join)
        .then((res)=>{
            window.location.reload()
        })
    
    
}
Cart()