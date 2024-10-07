
function fun(){
fetch(`https://dog.ceo/api/breeds/image/random`).then((r)=>{
    return r.json()
})
.then((res)=>{
    
    console.log(res)
    document.getElementById("box").innerHTML=`<img src="${res.message}" height="100%" width="100%">`
})
.catch((err)=>{
    console.log(err)
})
}

fun()
