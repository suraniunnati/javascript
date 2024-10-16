fetch(`https://render-js01.onrender.com/AddCart`)
      .then((r) => {
        return r.json();
      })
      .then((res) => {

        let addcart=res.length
        document.getElementById("total").innerHTML=addcart
      })
      .catch((err) => {
        console.log(err);
      });