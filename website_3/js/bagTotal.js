function Bagtatal(){
    fetch(`http://localhost:3000/cart`)
    .then((r)=>r.json())
    .then((res)=>{
        let BagTotal= res.length
        document.getElementById("bagtotal").innerHTML='(' + BagTotal + ')' 
    })
    .catch((err)=>{console.log(err)})
}

Bagtatal()