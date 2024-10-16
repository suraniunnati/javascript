function singleProduct() {
  let data = new URLSearchParams(window.location.search);
  let id = data.get("id");

  fetch(`https://render-js01.onrender.com/product?id=${id}`)
    .then((r) => {
      return r.json();
    })
    .then((res) => {
      document.getElementById("product").innerHTML = view(res);
      document.getElementById("cart").addEventListener("click",()=>{
        Addcart(res)
      })
    })
    .catch((err) => {
      console.log(err);
    });
}
singleProduct();

function view(arr) {
  return arr.map((ele) => {
    return `<div id="main">
                <div id="part1">
                <img src="${ele.url}">
                <img src="assets/lence.png" width="300px" style="margin-right: 70px;">
                </div>
                <div id="part2">
                <h1  style="font-size: 25px; font-weight: bold;">${ele.title}</h1>
                <h4>REVIEWS(0) <i class="fa-solid fa-star" style="color: #e3e3e3;"></i> <i class="fa-solid fa-star" style="color: #e3e3e3;"></i> <i class="fa-solid fa-star" style="color: #e3e3e3;"></i> <i class="fa-solid fa-star" style="color: #e3e3e3;"></i> <i class="fa-solid fa-star" style="color: #e3e3e3;"></i></h4>
                <br>
                <button style="border: 1px solid gray ;padding:10px;border-radius: 10px;">Adult Large</button>
                <button style="border: 1px solid gray ;padding:10px;border-radius: 10px;">Kids Large</button>
                <p style="margin-top: 15px;font-weight: bolder;">$ ${ele.price}</p><br>
                <h2>Zenni WOW Price
Motivational quotes engraved on every pair to inspire positivity and support a healthy cause.</h2>
<p style="  font-weight: 600;
    margin-top: 10px;">Pay over time with Paypal, Affirm or Afterpay
Learn More</P>
                <br>
                 <button id="cart">Add to cart</button>
                 <br><br>
                 <button style="width:49%;height:45px;border:2px solid #007B8F;color:gray;"><i class="fa-regular fa-heart"></i> Add to favorites</button>
                 <button style="width:49%;height:45px;border:2px solid #007B8F;color:gray;margin-left: 5px;"> <i class="fa-solid fa-video"></i>Try on</button>
                 <br><br>
                 <h1 style=" text-align: center;color:#999999;
   font-size: 25px;">________ <i class="fa-brands fa-facebook-f" style="color: #999999;"></i>
                 <i class="fa-brands fa-pinterest" style="color: #999999;"></i>
                 <i class="fa-brands fa-twitter" style="color: #999999;"></i> ________</h1>
                </div>
        </div>`;
  }).join("");
}


// AddtoCart

function Addcart(res){

  fetch(`https://render-js01.onrender.com/AddCart?id=${res[0].id}`)
  .then((r)=>{
    return r.json()
  })
  .then((Res)=>{
    if(Res.length > 0){
      alert("Item is Already Present in Cart !!!!!")
    }
    else{
      fetch(`https://render-js01.onrender.com/AddCart`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({...res[0],quantity : 1})
        })
        .then((r)=>r.json())
        .then((res)=>
          console.log(res),
           alert("Item is Successfully add in Cart !!!!!"))
      }  
  })
  .catch((err)=>{
    console.log(err)
  })
}