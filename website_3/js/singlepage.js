function singlepage(){
    let data=new URLSearchParams(window.location.search);
   let id = data.get("id");
   console.log(id);

fetch(`http://localhost:3000/product/${id}`)
.then((r)=>{
    return r.json()
})
.then((res)=>{
    console.log(res)
    document.getElementById("singlpage").innerHTML= show(res)
   
})

}

function show(arr){
    return `<div class="flex border w-[80%] m-[auto]">
    <div class="w-[40%]"><img src="${arr.img}"></div>
            <div><h2 class="font-medium mb-2 text-xl">${arr.title}</h2>
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
            </div>
            </div>
    `
}

singlepage()