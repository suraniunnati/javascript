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

        <div>
         <button onclick="Addcart(${ele.id} , ${ele.queinty} , 'dec')" id="Add">-</button>
        <input type="text" value="${ele.queinty}" disabled id="quan">
        <button onclick="Addcart(${ele.id} , ${ele.queinty} , 'inc')" id="Add">+</button>
        <br>
        <button onclick="del(${ele.id})" id="delete"> Remove </button>
        </div>

        <div id="">
         <span id="pr">Price : ₹${ele.mainPrice *  ele.queinty}</span><br>
           <span id="pr">Discount : -₹${(ele.mainPrice * ele.off/100 *  ele.queinty).toFixed(0)}</span>
           <br>
           <span id="pr">Shipping Fee : FREE</span>
        </div>
        <div id="itemTotal">
            <span id="price"> ₹${ele.price * ele.queinty}</span>
            <p id="tex">Inclusive of all the applicable</p>
            <p id="tex">taxes</p>
        </div>
        </div>`
    })
}
Cart()