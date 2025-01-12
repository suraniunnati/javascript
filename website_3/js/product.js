function Product(){

    fetch('http://localhost:3000/product')
    .then((r)=>r.json())
    .then((res)=>{
        console.log(res)
        document.getElementById("product").innerHTML=view(res)

        // #price
        document.getElementById("fil1").addEventListener("change", function () {
            if (this.checked) { const filteredProducts1 = fil1(res); document.getElementById("product").innerHTML = view(filteredProducts1); }
            else { document.getElementById("product").innerHTML = view(res) }
        })
        document.getElementById("fil2").addEventListener("change", function () {
            if (this.checked) { const filteredProducts1 = fil2(res); document.getElementById("product").innerHTML = view(filteredProducts1); }
            else { document.getElementById("product").innerHTML = view(res) }
        })
        document.getElementById("fil3").addEventListener("change", function () {
            if (this.checked) { const filteredProducts1 = fil3(res); document.getElementById("product").innerHTML = view(filteredProducts1); }
            else { document.getElementById("product").innerHTML = view(res) }
        })
        document.getElementById("fil4").addEventListener("change", function () {
            if (this.checked) { const filteredProducts1 = fil4(res); document.getElementById("product").innerHTML = view(filteredProducts1); }
            else { document.getElementById("product").innerHTML = view(res) }
        })
        document.getElementById("fil5").addEventListener("change", function () {
            if (this.checked) { const filteredProducts1 = fil5(res); document.getElementById("product").innerHTML = view(filteredProducts1); }
            else { document.getElementById("product").innerHTML = view(res) }
        })
        
        // #color
        document.getElementById("fil6").addEventListener("change", function () {
            if (this.checked) { const filteredProducts1 = fil6(res); document.getElementById("product").innerHTML = view(filteredProducts1); }
            else { document.getElementById("product").innerHTML = view(res) }
        })
        document.getElementById("fil7").addEventListener("change", function () {
            if (this.checked) { const filteredProducts1 = fil7(res); document.getElementById("product").innerHTML = view(filteredProducts1); }
            else { document.getElementById("product").innerHTML = view(res) }
        })
        document.getElementById("fil8").addEventListener("change", function () {
            if (this.checked) { const filteredProducts1 = fil8(res); document.getElementById("product").innerHTML = view(filteredProducts1); }
            else { document.getElementById("product").innerHTML = view(res) }
        })
        document.getElementById("fil9").addEventListener("change", function () {
            if (this.checked) { const filteredProducts1 = fil9(res); document.getElementById("product").innerHTML = view(filteredProducts1); }
            else { document.getElementById("product").innerHTML = view(res) }
        })
        document.getElementById("fil10").addEventListener("change", function () {
            if (this.checked) { const filteredProducts1 = fil10(res); document.getElementById("product").innerHTML = view(filteredProducts1); }
            else { document.getElementById("product").innerHTML = view(res) }
        })
        document.getElementById("fil11").addEventListener("change", function () {
            if (this.checked) { const filteredProducts1 = fil11(res); document.getElementById("product").innerHTML = view(filteredProducts1); }
            else { document.getElementById("product").innerHTML = view(res) }
        })
        document.getElementById("fil12").addEventListener("change", function () {
            if (this.checked) { const filteredProducts1 = fil12(res); document.getElementById("product").innerHTML = view(filteredProducts1); }
            else { document.getElementById("product").innerHTML = view(res) }
        })
        document.getElementById("fil13").addEventListener("change", function () {
            if (this.checked) { const filteredProducts1 = fil13(res); document.getElementById("product").innerHTML = view(filteredProducts1); }
            else { document.getElementById("product").innerHTML = view(res) }
        })
        document.getElementById("fil14").addEventListener("change", function () {
            if (this.checked) { const filteredProducts1 = fil14(res); document.getElementById("product").innerHTML = view(filteredProducts1); }
            else { document.getElementById("product").innerHTML = view(res) }
        })
         // #brand
         document.getElementById("fil15").addEventListener("change", function () {
            if (this.checked) { const filteredProducts1 = fil15(res); document.getElementById("product").innerHTML = view(filteredProducts1); }
            else { document.getElementById("product").innerHTML = view(res) }
        })
        document.getElementById("fil16").addEventListener("change", function () {
            if (this.checked) { const filteredProducts1 = fil16(res); document.getElementById("product").innerHTML = view(filteredProducts1); }
            else { document.getElementById("product").innerHTML = view(res) }
        })
        document.getElementById("fil17").addEventListener("change", function () {
            if (this.checked) { const filteredProducts1 = fil17(res); document.getElementById("product").innerHTML = view(filteredProducts1); }
            else { document.getElementById("product").innerHTML = view(res) }
        })
        document.getElementById("fil18").addEventListener("change", function () {
            if (this.checked) { const filteredProducts1 = fil18(res); document.getElementById("product").innerHTML = view(filteredProducts1); }
            else { document.getElementById("product").innerHTML = view(res) }
        })
        document.getElementById("fil19").addEventListener("change", function () {
            if (this.checked) { const filteredProducts1 = fil19(res); document.getElementById("product").innerHTML = view(filteredProducts1); }
            else { document.getElementById("product").innerHTML = view(res) }
        })
        document.getElementById("fil20").addEventListener("change", function () {
            if (this.checked) { const filteredProducts1 = fil20(res); document.getElementById("product").innerHTML = view(filteredProducts1); }
            else { document.getElementById("product").innerHTML = view(res) }
        })
        document.getElementById("fil21").addEventListener("change", function () {
            if (this.checked) { const filteredProducts1 = fil21(res); document.getElementById("product").innerHTML = view(filteredProducts1); }
            else { document.getElementById("product").innerHTML = view(res) }
        })
        document.getElementById("fil22").addEventListener("change", function () {
            if (this.checked) { const filteredProducts1 = fil22(res); document.getElementById("product").innerHTML = view(filteredProducts1); }
            else { document.getElementById("product").innerHTML = view(res) }
        })
        // #finish
        document.getElementById("fil23").addEventListener("change", function () {
            if (this.checked) { const filteredProducts1 = fil23(res); document.getElementById("product").innerHTML = view(filteredProducts1); }
            else { document.getElementById("product").innerHTML = view(res) }
        })
        document.getElementById("fil24").addEventListener("change", function () {
            if (this.checked) { const filteredProducts1 = fil24(res); document.getElementById("product").innerHTML = view(filteredProducts1); }
            else { document.getElementById("product").innerHTML = view(res) }
        })
        document.getElementById("fil25").addEventListener("change", function () {
            if (this.checked) { const filteredProducts1 = fil25(res); document.getElementById("product").innerHTML = view(filteredProducts1); }
            else { document.getElementById("product").innerHTML = view(res) }
        })
        document.getElementById("fil26").addEventListener("change", function () {
            if (this.checked) { const filteredProducts1 = fil26(res); document.getElementById("product").innerHTML = view(filteredProducts1); }
            else { document.getElementById("product").innerHTML = view(res) }
        })

        // #discount
        document.getElementById("fil27").addEventListener("change", function () {
            if (this.checked) { const filteredProducts1 = fil27(res); document.getElementById("product").innerHTML = view(filteredProducts1); }
            else { document.getElementById("product").innerHTML = view(res) }
        })
        document.getElementById("fil28").addEventListener("change", function () {
            if (this.checked) { const filteredProducts1 = fil28(res); document.getElementById("product").innerHTML = view(filteredProducts1); }
            else { document.getElementById("product").innerHTML = view(res) }
        })
        document.getElementById("fil29").addEventListener("change", function () {
            if (this.checked) { const filteredProducts1 = fil29(res); document.getElementById("product").innerHTML = view(filteredProducts1); }
            else { document.getElementById("product").innerHTML = view(res) }
        })
        document.getElementById("fil30").addEventListener("change", function () {
            if (this.checked) { const filteredProducts1 = fil30(res); document.getElementById("product").innerHTML = view(filteredProducts1); }
            else { document.getElementById("product").innerHTML = view(res) }
        })
        document.getElementById("fil31").addEventListener("change", function () {
            if (this.checked) { const filteredProducts1 = fil31(res); document.getElementById("product").innerHTML = view(filteredProducts1); }
            else { document.getElementById("product").innerHTML = view(res) }
        })
    
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
            <i class="fa-regular fa-heart w-[30%] border text-[20px] text-center leading-10 text-[#E80071] rounded-lg me-2"></i>
            <a href="singlepage.html?id=${el.id}" class=" w-full"><button class="w-full h-full bg-[#E80071] text-white rounded-lg">View Details</button></a>
            </div>
        </div>`
    }).join("")
}

// #price filter
function fil1(arr){
    return arr.filter((ele) => ele.price > 0 && ele.price <= 499); 
}
function fil2(arr){
    return arr.filter((ele) => ele.price > 500 && ele.price <= 999); 
}
function fil3(arr){
    return arr.filter((ele) => ele.price > 1000 && ele.price <= 1999); 
}
function fil4(arr){
    return arr.filter((ele) => ele.price > 2000 && ele.price <= 3999); 
}
function fil5(arr){
    return arr.filter((ele) => ele.price >= 4000); 
}

// #color filter
function fil6(arr) { return arr.filter((ele) => ele.color == "brown"); }
function fil7(arr) { return arr.filter((ele) => ele.color == "maroon"); }
function fil8(arr) { return arr.filter((ele) => ele.color == "pink"); }
function fil9(arr) { return arr.filter((ele) => ele.color == "nude"); }
function fil10(arr) { return arr.filter((ele) => ele.color == "red"); }
function fil11(arr) { return arr.filter((ele) => ele.color == "orange"); }
function fil12(arr) { return arr.filter((ele) => ele.color == "gray"); }
function fil13(arr) { return arr.filter((ele) => ele.color == "blue"); }
function fil14(arr) { return arr.filter((ele) => ele.color == "black"); }

// #brand filter
function fil15(arr) { return arr.filter((ele) => ele.brand == "nykaa"); }
function fil16(arr) { return arr.filter((ele) => ele.brand == "lakme"); }
function fil17(arr) { return arr.filter((ele) => ele.brand == "Forest"); }
function fil18(arr) { return arr.filter((ele) => ele.brand == "Nivea"); }
function fil19(arr) { return arr.filter((ele) => ele.brand == "Latus"); }
function fil20(arr) { return arr.filter((ele) => ele.brand == "Loreal"); }
function fil21(arr) { return arr.filter((ele) => ele.brand == "Olay"); }
function fil22(arr) { return arr.filter((ele) => ele.brand == "Wish Care"); }

// #finish filter
function fil23(arr) { return arr.filter((ele) => ele.finish == "Matte"); }
function fil24(arr) { return arr.filter((ele) => ele.finish == "glossy"); }
function fil25(arr) { return arr.filter((ele) => ele.finish == "creme"); }
function fil26(arr) { return arr.filter((ele) => ele.finish == "natural"); }

// #discount filter
function fil27(arr){
    return arr.filter((ele) => ele.off < 70 ); 
}
function fil28(arr){
    return arr.filter((ele) => ele.off < 70 && ele.off >= 50); 
}
function fil29(arr){
    return arr.filter((ele) => ele.off < 50 && ele.off >= 30); 
}
function fil30(arr){
    return arr.filter((ele) => ele.off < 30 && ele.off >= 10); 
}
function fil31(arr){
    return arr.filter((ele) => ele.off > 10); 
}
Product()