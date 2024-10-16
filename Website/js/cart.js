
    fetch(`https://render-js01.onrender.com/AddCart`)
      .then((r) => {
        return r.json();
      })
      .then((res) => {
        document.getElementById("AddCart").innerHTML = view(res);
      })
      .catch((err) => {
        console.log(err);
      });
  
  
  function view(arr) {
    let add=0;
    return arr.map((ele) => {
      
     add+=ele.price*ele.quantity
      document.getElementById("price").innerHTML="$"+ add.toFixed(2);
      return ` <tr>
                  <td><img src="${ele.url}" width="200px"></td>
                  <td>${ele.title}</td>
                  <td id="priceadd">$ ${(ele.price * ele.quantity).toFixed(2)}</td>
                  <td id="quan">
                      <button onclick="AddData(${ele.id},${ele.quantity},'dec')" id="add">-</button>
                      <input value="${ele.quantity}" disabled id="quan">
                     <button onclick="AddData(${ele.id},${ele.quantity},'inc')" id="add">+</button>
                  </td>
                  <td><button id="delete" onclick="deleteItem(${ele.id})">Delete</button></td>
                </tr>
          `
    }).join("");
  }
 
  //  add-quantity
  
  function AddData(id, quantity, clickbtn) {
    let a = quantity;
    if (clickbtn == 'inc') {
        a = a + 1
    } else if (clickbtn == 'dec') {
        a = a - 1
        if (a < 1) {
          document.getElementById("add").setAttribute("disabled");
        }
    }
    

    fetch(`https://render-js01.onrender.com/AddCart/${id}`, {
        method: "PATCH",
        headers : {
            'Content-Type' : "application/json"
        },
        body: JSON.stringify({quantity : a})
    }).then((res) => {
        return res.json()
    })
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })

}



// delete 

function deleteItem(id) {
  fetch(`https://render-js01.onrender.com/AddCart/${id}`, {
    method: 'DELETE',
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      document.getElementById("AddCart").innerHTML = view(res);
    })
    .catch((err) => {
      console.error('Error deleting the item:', err);
    });
}
