let age =[12, 17, 19, 21, 15, 28]

let ans=age.filter((element,index)=>{
    if(element>18){
        return element;
    }
})

console.log(ans)