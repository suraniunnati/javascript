function cart() {
  
    fetch(`http://localhost:3000/AddCart`)
      .then((r) => {
        return r.json();
      })
      .then((res) => {
        document.getElementById("AddCart").innerHTML = view(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  function view(arr) {
    return arr.map((ele) => {
      return ` <tr>
                  <td><img src="${ele.url}" width="200px"></td>
                  <td>${ele.title}</td>
                  <td>$ ${ele.price}</td>
                  <td><button id="delete" onclick="deleteItem(${ele.id})">Delete</button></td>
                  </tr>
          `;
    })
      .join("");
  }
  
  cart()

// delete 

function deleteItem(id) {
  fetch(`http://localhost:3000/AddCart/${id}`, {
    method: 'DELETE',
  })
    .then((res)=>{
      return res.json();
    })
}