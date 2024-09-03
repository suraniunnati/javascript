let arr =[1,2,3,4,5,6,7,8,9]

 let ans= arr.filter((element,index)=>{
    if(element%2!=0){
        return element;
    }
})
console.log(ans)

let sqar=ans.map((element,index)=>{
    return element*element
})
console.log(sqar);