let product=[{name: 'Shirt', price: 30}, {name: 'Shoes', price: 60}, {name: 'Hat', price: 25}]

let ans=((element,index)=>{
    return element.price>50
})
console.log( product.findIndex(ans))
