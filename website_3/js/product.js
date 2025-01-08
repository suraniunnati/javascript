function Product(){

    fetch('http://localhost:3000/product')
    .then((r)=>r.json())
    .then((res)=>{
        console.log(res)
        document.getElementById("product").innerHTML=view(res)
    })
    .catch((err)=>{console.log(err)})
}

function view(arr){
    return arr.map((el)=>{
        return `<div class="productview shadow-lg rounded p-3 h-[450px]">
            <div class="h-[60%]"><img src="${el.img}" height="100%"></div>
            <div class="h-[30%] p-2 text-center">
            <h3 class="font-medium mb-2">${el.title}</h3>
            <h4><span class="text-stone-400 line-through">MRP:₹${el.mrp}</span> <span>₹${el.price}</span> <span class="text-stone-300">|</span> <span class="text-lime-700 font-medium">${el.off}%Off</span></h4>
            <h6 class="mt-2">
           <i class="fa-solid fa-star fa-2xs"></i>
           <i class="fa-solid fa-star fa-2xs"></i>
           <i class="fa-solid fa-star fa-2xs"></i>
           <i class="fa-solid fa-star fa-2xs"></i>
           <i class="fa-solid fa-star fa-2xs"></i>
            <span class="text-stone-500 text-[15px]" >(${el.rate})</span>
            </h6>
            </div>
            <div class="details flex h-[10%] w-full">
            <i class="fa-regular fa-heart w-[30%] border text-2xl text-center leading-10 text-[#E80071] rounded-lg"></i>
            <a href="singlepage.html?id=${el.id}" class=" w-full"><button class="w-full h-full bg-[#E80071] text-white rounded-lg">View Details</button></a>
            </div>
        </div>`
    }).join("")
}
Product()