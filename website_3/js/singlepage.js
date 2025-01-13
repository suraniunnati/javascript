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
    return `<div class="flex shadow-lg w-[80%] m-[auto] bg-white p-3">
    <div class="w-[35%] flex items-center border-e">
    <div class="w-[20%]  flex flex-col justify-center items-center ">
     <img src="${arr.img}"  onclick="showImage(this)" class="w-[55px] border  mt-5 p-1">
     <img src="${arr.img1}"  onclick="showImage(this)" class="w-[55px] border  mt-5 p-1">
      <img src="${arr.img2}"  onclick="showImage(this)" class="w-[55px] border  mt-5 p-1">
       <img src="${arr.img3}"  onclick="showImage(this)" class="w-[55px] border  mt-5 p-1">
        <img src="${arr.img4}"  onclick="showImage(this)" class="w-[55px] border  mt-5 mb-5 p-1">
    </div>
     <div class="image-container w-[300px] "> <img src="${arr.img}" id="mainImage" class="zoom-image"  alt="Zoomable Image"  onmousemove="zoomIn(event)" 
        onmouseleave="zoomOut(event)"></div>
   </div>
            <div class="ps-5 w-[60%] mt-2"><h2 class="font-medium mb-2 text-xl">${arr.title}</h2>
             <h5 class="mt-2">
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
                  <h4 class="text-stone-400 mt-2">inclusive of all taxes</h4>
                  <h4 class="text-stone-400 mt-2"><i class="fa-solid fa-truck-fast"></i> Free Delivery</h4>
                  <div class="flex h-[100px] mt-10">
                     <div class="w-[50%] pt-5 border-e text-center"><button class="text-white h-[50px] w-[200px] bg-[#E80071]" id="cart">Add to Bag</button></div>
                      <div class="w-[50%] pt-3 ps-5"><p class="mb-2"><i class="fa-solid fa-location-dot"></i> Delivery Options</p><input type="text" placeholder="Enter Pincode" class="border h-[40px] ps-1"><button class="text-white h-[40px] w-[80px] bg-[#E80071]">Check</button></div>
                  </div>
                 <div class="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-2 bg-[#F4F4F5] mt-5">
                  <div class="flex items-center">
                  <img src="assets/single-1.png" class="w-[30px] me-2">
                  <p>100% Genuine Products</p>
                  </div>
                   <div class="flex items-center">
                  <img src="assets/single-2.png" class="w-[30px] me-2">
                  <p>Easy Return Policy</p>
                  </div>
                   <div class="flex items-center">
                  <p>Sold by :</p>
                  <p>NYKAA E RETAIL </p>
                  </div>
                 </div> 
            </div>
            </div>
    `
}

// #img change
function showImage(thumbnail) {
  const thumbnailSrc = thumbnail.src;
  document.getElementById("mainImage").src = thumbnailSrc;
}
// #zoom img
function zoomIn(event) {
  const image = event.target; 
  const rect = image.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * 100;
  const y = ((event.clientY - rect.top) / rect.height) * 100;
  image.style.transform = `scale(2) translate(-${x - 50}%, -${y - 50}%)`;
}

function zoomOut(event) {
  const image = event.target; 
  image.style.transform = "scale(1)";
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