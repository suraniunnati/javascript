function productData() {
  fetch(`http://localhost:3000/product`)
    .then((r) => {
      return r.json();
    })
    .then((res) => {
      console.log(res);
      document.getElementById("box").innerHTML = view(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

function view(arr) {
  return arr
    .map((ele) => {
      return `<a href="singleProduct.html?id=${ele.id}">
               <div id="main">
                <div id="image"><img src="${ele.url}"></div>
                <div id="text">
                <p>$ ${ele.price}</p><h3>${ele.title}</h3>
                <i class="fa-regular fa-heart"></i>
                </div>
        </div> </a>`;
    })
    .join("");
}

productData();

