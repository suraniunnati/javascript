function singlepage() {
    let data = new URLSearchParams(window.location.search);
    let id = data.get("id");
    console.log(id);

    fetch(`http://localhost:3000/product/${id}`)
        .then((r) => {
            return r.json()
        })
        .then((res) => {
            console.log(res)
            document.getElementById("singlpage").innerHTML = show(res)
            document.getElementById("cart").addEventListener("click",()=>{
                AddCart(res)
              })

        })

}

function show(arr) {
    return `<div class="flex border w-[80%] m-[auto] bg-white p-3">
    <div class="w-[35%] flex items-center border-e">
    <div class="w-[20%]  flex flex-col justify-center items-center ">
     <img src="${arr.img}" class="w-[50px] border  mt-2 p-1">
     <img src="${arr.img1}" class="w-[50px] border  mt-2 p-1">
      <img src="${arr.img2}" class="w-[50px] border  mt-2 p-1">
       <img src="${arr.img3}" class="w-[50px] border  mt-2 p-1">
        <img src="${arr.img4}" class="w-[50px] border  mt-2 p-1">
    </div>
     <div> <img src="${arr.img}"></div>
   </div>
            <div class="ps-5 w-[70%]"><h2 class="font-medium mb-2 text-xl">${arr.title}</h2>
             <h5>
           <i class="fa-solid fa-star fa-2xs"></i>
           <i class="fa-solid fa-star fa-2xs"></i>
           <i class="fa-solid fa-star fa-2xs"></i>
           <i class="fa-solid fa-star fa-2xs"></i>
           <i class="fa-solid fa-star fa-2xs"></i>
           <span class="text-slate-300">|</span>
           <span>${arr.rate} rating & </span>
           <span>${arr.review} reviews</span>
                 </h5>   
                  <h4 class="mt-2"><span class="text-stone-400 line-through">MRP:₹${arr.mrp}</span> <span class="text-lg font-medium">₹${arr.price}</span> <span class="text-stone-300">|</span> <span class="text-lime-700 font-medium">${arr.off}%Off</span></h4>
                  <h4 class="text-stone-400">inclusive of all taxes</h4>
                  <div class="flex h-[100px] mt-5">
                     <div class="w-[50%] pt-5 border-e text-center"><button class="text-white h-[50px] w-[200px] bg-[#E80071]" id="cart">Add to Bag</button></div>
                      <div class="w-[50%] pt-3 ps-5"><p class="mb-2"><i class="fa-solid fa-location-dot"></i> Delivery Options</p><input type="text" placeholder="Enter Pincode" class="border h-[40px] ps-1"><button class="text-white h-[40px] w-[80px] bg-[#E80071]">Check</button></div>
                  </div>
            </div>
            </div>
    `
}


function AddCart(res){

    fetch(`http://localhost:3000/cart?id=${res.id}`)
    .then((r)=>{return r.json()})
    .then((Res)=>{
         if(Res.length > 0){
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Item is Already Present in Cart....",
            showConfirmButton: false,
            timer: 1500
          })
         }
         else{
          fetch(`http://localhost:3000/cart`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({...res,queinty: 1})
            })
            .then((r)=>r.json())
            .then((res)=>console.log(res),
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Item is Successfully add in Cart...",
              showConfirmButton: false,
              timer: 1500
            })
          )
            .catch((err)=>
              console.log(err),
           
          ) 
         }
    })
    
     
    }

singlepage()